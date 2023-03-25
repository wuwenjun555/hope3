/// <reference types="vite/client" />

/// 本文件为代码中获取.env[mode] 文件中以【VITE_】为前缀的用户自定义环境变量的 TypeScript 智能提示。
/// 注意：vite2为src/env.d.ts，vite3已改为src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_API_BASE_URL: string
  readonly VITE_BUILD_SOURCEMAP: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
