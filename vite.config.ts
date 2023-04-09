import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  // 取得环境变量
  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      createHtmlPlugin(),
      Components({
        // 使用Typescript则必须设置dts。
        // 设置为在'src/'目录下生成类型文件auto-imports.d.ts解决ts报错，默认是当前目录('./'，即根目录)
        dts: 'src/components.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // global imports to register
        imports: [
          // presets: https://github.com/unjs/unimport/blob/main/src/presets/index.ts
          'vue',
          'vue-router',
          // custom
          {
            axios: [
              // default imports
              ['default', 'axios'], // import { default as axios } from 'axios',
            ],
          },
          // example type import
          // {
          //   from: 'vue-router',
          //   imports: ['RouteLocationRaw'],
          //   type: true,
          // },
        ],
        // 使用Typescript则必须设置dts。
        // 设置为在'src/'目录下生成类型文件auto-imports.d.ts解决ts报错，默认是当前目录('./'，即根目录)
        // [DEL]: 为true，以防止TS类型丢失导致的TS编译报错
        // [DEL]: 插件会在项目根目录生成类型文件auto-imports.d.ts确保该文件在tsconfig中被include
        dts: 'src/auto-import.d.ts',
        // 如果使用了eslint，需要设置 eslintrc 字段
        eslintrc: {
          enabled: true,
          // [Default]: filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          // [Default]: globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
    ],
    define: {
      'process.env': env,
    },
    resolve: {
      // 这里的alias是路径别名，是运行阶段的替换路径，而tsconfig.json中的paths是编码阶段的提示，
      alias: {
        '@': pathResolve('src'), // path.resolve中，'./src' 等于 'src'
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      // minify默认esbuild，esbuild模式下terserOptions将失效
      // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
          drop_debugger: true, // 去除 debugger
        },
      },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${pathResolve('src/styles/index.less')}";`,
        },
      },
    },
  })
}
