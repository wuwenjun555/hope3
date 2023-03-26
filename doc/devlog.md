# hope3

## dev log

- ### Ready

  - OS: windows 10
  - Browser: Edge
  - Git: installed
    - github SSH config ok
    - gitee SSH config ok
  - WinMerge: download and unzip to D:\ASoftRun\WinMerge

  ---

- ### new repository github

  ```cmd
  start microsoft-edge:https://github.com
  ~ login by your account
  ~ new repository
    - Repository name: hope3
    - Description: Hope the world is getting better
    - Public: check
    - Add a README file: check
    - Add .gitignore: None
    - Choose a license: MIT License
  ```

  ---

- ### new repository gitee

  ```cmd
  start microsoft-edge:https://gitee.com
  ~ 登录你的账户
  ~ 新建仓库
    - 仓库名称: hope3
    - 路径: hope3
    - 仓库介绍: 希望世界变得越开来越好
    - 私有（仅仓库成员可见）: check
    - 初始化仓库: check
      - 选择语言: 不选
      - 添加 .gitignore: 不选
      - 添加开源许可证: MIT
    - 设置模板: check
      - Readme 文件: check
      - Issue 模板文件: check
      - 添加开源许可证: check
    - 选择分支模型: 开发/发布/缺陷分离模型 (支持 master/develop/feature/release/hotfix 类型分支)
  ```

  ---

- ### new work folder

  文件夹 ASoft 主要用于安放无需安装，绿色解压可用的软件。  
  文件夹 ASrc 主要用于安放本地开发中的代码。  
  其下的文件夹 github 和 gitee 分别用于上面两个git仓库的代码同步提交。  
  文件夹 bk 主要用于备份每个重大阶段当时的代码用于日后对比。

  ```cmd
  cmd
  mkdir D:\ASoft
  mkdir D:\ASrc
  mkdir D:\ASrc\github
  mkdir D:\ASrc\gitee
  mkdir D:\ASrc\bk
  D:
  ```

  ---

- ### install nvm

  因为电脑之前装过各种版本Node.js，所以才会在Finish之前有3处询问是否由nvm统一管理调控。

  ```cmd
  start microsoft-edge:https://github.com/coreybutler/nvm-windows/releases
  start microsoft-edge:https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe
  C:\Users\Dell\Downloads\nvm-setup.exe
  ~ I accept the agreement: check
  ~ Next: click
  ~ change: D:\ASoft\nvm
  ~ Next: click
  ~ Y: click
  ~ Browse: D:\ASoft\nvm\nodejs
  ~ Next: click
  ~ Install: click
  ~ 'Node v12.18.2 is already installed. Do you want NVM to control this version?': Y
  ~ 'Node v8.7.0 is already installed. Do you want NVM to control this version?': Y
  ~ 'Node v19.7.0 is already installed. Do you want NVM to control this version?': Y
  ~ Finish: click
  ```

  ---

- ### install Node.js

  因为电脑太老了，安装最新版Node.js会报错，所以这里只能选尽可能新的LTS版本。

  ```cmd
  nvm install lts
  /*out*******************************************************************************
  Downloading node.js version 18.15.0 (64-bit)...
  Extracting node and npm...
  Complete
  npm v9.5.0 installed successfully.


  Installation complete. If you want to use this version, type

  nvm use 18.15.0
  ********************************************************************************/
  ```

  ---

- ### install pnpm

  ```cmd
  npm install -g pnpm
  /*out*******************************************************************************

  added 1 package in 13s
  npm notice
  npm notice New minor version of npm available! 9.5.0 -> 9.6.1
  npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.6.1
  npm notice Run npm install -g npm@9.6.1 to update!
  npm notice
  ********************************************************************************/
  ```

  ---

- ### update npm

  发现上面安装的时候提示npm有新版可以用，所以这里更新一下。

  ```cmd
  npm install -g npm@9.6.1
  /*out*******************************************************************************

  changed 29 packages in 13s
  ********************************************************************************/
  ```

  ---

- ### git clone github

  ```cmd
  cd D:\ASrc\github
  git clone https://github.com/wuwenjun555/hope3
  /out*******************************************************************************
  Cloning into 'hope3'...
  remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (3/3), done.
  remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
  Receiving objects: 100% (4/4), done.
  ********************************************************************************/
  ```

  ---

- ### git clone gitee

  ```cmd
  cd D:\ASrc\gitee
  git clone https://gitee.com/wuwenjun55555/hope3
  /out*******************************************************************************
  Cloning into 'hope3'...
  remote: Enumerating objects: 8, done.
  remote: Counting objects: 100% (8/8), done.
  remote: Compressing objects: 100% (8/8), done.
  remote: Total 8 (delta 0), reused 0 (delta 0), pack-reused 0
  Receiving objects: 100% (8/8), done.
  ********************************************************************************/
  ```

  ---

- ### new vue project with vite

  ```cmd
  cd D:\ASrc
  pnpm create vite hope3 --template vue
  /*out*******************************************************************************
  ../.pnpm-store/v3/tmp/dlx-17936          |   +1 +
  Packages are hard linked from the content-addressable store to the virtual store.
    Content-addressable store is at: D:\.pnpm-store\v3
    Virtual store is at:             ../.pnpm-store/v3/tmp/dlx-17936/node_modules/.pnpm
  ../.pnpm-store/v3/tmp/dlx-17936          | Progress: resolved 1, reused 1, downloaded 0, added 1, done

  Scaffolding project in D:\ASrc\hope3...

  Done. Now run:

    cd hope3
    pnpm install
    pnpm run dev
  ********************************************************************************/
  ```

---

- ### bk hope3_000

  上面创建 vue javascript 项目是为了跟之后创建的 vue typescript 项目做个比较，了解区别。
  之后重点是 vue typescript 项目，所以上面创建的 vue javascript 项目直接移动到备份文件夹。

  ```cmd
  move D:\ASrc\hope3 D:\ASrc\bk\hope3_000
  ```

---

- ### new vue-typescript project with vite

  ```cmd
  pnpm create vite hope3 --template vue-ts
  /*out*******************************************************************************
  ../.pnpm-store/v3/tmp/dlx-23004          |   +1 +
  Packages are hard linked from the content-addressable store to the virtual store.
    Content-addressable store is at: D:\.pnpm-store\v3
    Virtual store is at:             ../.pnpm-store/v3/tmp/dlx-23004/node_modules/.pnpm
  ../.pnpm-store/v3/tmp/dlx-23004          | Progress: resolved 1, reused 1, downloaded 0, added 1, done

  Scaffolding project in D:\ASrc\hope3...

  Done. Now run:

    cd hope3
    pnpm install
    pnpm run dev
  ********************************************************************************/
  ```

---

- ### bk hope3_001

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_001\ /e
  ```

---

- ### install project dependent packages

  ```cmd
  cd hope3
  pnpm install
  /*out*******************************************************************************
    ╭──────────────────────────────────────────────────────────────────╮
    │                                                                  │
    │                Update available! 7.30.0 → 7.30.3.                │
    │   Changelog: https://github.com/pnpm/pnpm/releases/tag/v7.30.3   │
    │                Run "pnpm add -g pnpm" to update.                 │
    │                                                                  │
    │      Follow @pnpmjs for updates: https://twitter.com/pnpmjs      │
    │                                                                  │
    ╰──────────────────────────────────────────────────────────────────╯

   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +50
  ++++++++++++++++++++++++++++++++++++++++++++++++++
  Packages are copied from the content-addressable store to the virtual store.
    Content-addressable store is at: D:\.pnpm-store\v3
    Virtual store is at:             node_modules/.pnpm
  Progress: resolved 72, reused 47, downloaded 3, added 50, done
  node_modules/.pnpm/esbuild@0.17.13/node_modules/esbuild: Running postinstall script, done in 7.6s

  dependencies:
  + vue 3.2.47

  devDependencies:
  + @vitejs/plugin-vue 4.1.0
  + typescript 4.9.5 (5.0.2 is available)
  + vite 4.2.1
  + vue-tsc 1.2.0

  Done in 33s
  ********************************************************************************/
  ```

---

- ### new bk-hope3-exclude.txt for set exclute folder list in xcopy command parameter

  上面安装项目依赖的npm包都会安装在 D:\ASrc\hope3\node_modules 中  
  但因并不是源代码，所以在备份的时候将其排除在外。

  ```cmd
  echo node_modules\ > D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### bk hope3_002

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_002\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### update pnpm

  上面命令执行的时候，发现输出中含有 7.30.0 → 7.30.3 的字样。  
  这是pnpm在安装之后又有了新的版本。  
  如果不作处理，之后每次执行 pnpm 命令都会输出该提示，会造成干扰。  
  所以按照提示的命令更新成最新版本。

  ```cmd
  pnpm add -g pnpm
  /*out*******************************************************************************
  Nothing to stop. No server is running for the store at C:\Users\Dell\AppData\Local\pnpm\store\v3
   ERR_PNPM_NO_GLOBAL_BIN_DIR  Unable to find the global bin directory

  Run "pnpm setup" to create it automatically, or set the global-bin-dir setting, or the PNPM_HOME env variable. The global bin directory should be in the PATH.
  ********************************************************************************/
  ```

---

- ### update pnpm again

  很遗憾上面 pnpm 更新失败了。看输出的消息是没有将 pnpm 设置到全局变量之中。
  目前看不设置全局变量，除了自己更新自己失败之外其他命令并没有出错。  
  本着影响最小化的原则，改用 npm 命令更新 pnpm 。  
  更新成功！通过版本命令也确认了的确更新到了最新版。  
  而且更新之后跟之前项目代码备份比对一下，确认了 pnpm 作为安装在全局的工具不会改变项目代码。

  ```cmd
  npm update -g pnpm
  /*out*******************************************************************************
  changed 1 package in 13s
  ********************************************************************************/
  pnpm -v
  /*out*******************************************************************************
  7.30.3
  ********************************************************************************/
  ```

---

- ### run project service first time

  通过 pnpm 启动命令间接通过 vite 将这个最小模板代码的服务正常启动了。  
  跟之前项目代码备份比对一下，代码没有任何变化。  
  这里实际上是在内存启动了一个服务器，并将编译后的文件发布到该服务器内可以使浏览器访问。

  ```cmd
  pnpm run dev
  /*out*******************************************************************************
  > hope3@0.0.0 dev D:\ASrc\hope3
  > vite


    VITE v4.2.1  ready in 2663 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help
  ********************************************************************************/
  ```

---

- ### run project url first time

  上一个命令启动了服务后占用了windows命令窗口，无法再入力其他命令。  
  因此用 cmd 再开启一个新窗口，调用浏览器打卡画面，确认画面显示正常。  
  跟之前项目代码备份比对一下，代码没有任何变化。  
  以exit命令关闭新打开的windows命令窗口，并回到之前的windows命令窗口用 Ctrl + C 关闭服务。

  ```cmd
  cmd
  start microsoft-edge:http://localhost:5173/
  exit
  Ctrl + C
  ```

---

- ### add this doc to project

  最初的成果完成，为庆祝一下将当前代码（除 node_modules 文件夹）提交保存。  
  当然因为本文档也是这一阶段的成果物，所以将其追加到项目中。

  ```cmd
  mkdir D:\ASrc\hope3\doc
  ~ copy this file to D:\ASrc\hope3\doc\devlog.md
  ```

---

- ### git commit & push hope3

  下面命令中 git add . 表示根据ignore的配置添加所有修改过的文件。

  ```cmd
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\github\hope3
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\gitee\hope3
  cd D:\ASrc\github\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.vscode/extensions.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/components/HelloWorld.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/main.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/style.css', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/vite-env.d.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'tsconfig.node.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_002: pnpm create vite hope3 --template vue-ts OK"
  /*out*******************************************************************************
  [main 3aa2b7c] hope3_002: pnpm create vite hope3 --template vue-ts OK
  17 files changed, 1269 insertions(+), 2 deletions(-)
  create mode 100644 .gitignore
  create mode 100644 .vscode/extensions.json
  create mode 100644 doc/devlog.md
  create mode 100644 index.html
  create mode 100644 package.json
  create mode 100644 pnpm-lock.yaml
  create mode 100644 public/vite.svg
  create mode 100644 src/App.vue
  create mode 100644 src/assets/vue.svg
  create mode 100644 src/components/HelloWorld.vue
  create mode 100644 src/main.ts
  create mode 100644 src/style.css
  create mode 100644 src/vite-env.d.ts
  create mode 100644 tsconfig.json
  create mode 100644 tsconfig.node.json
  create mode 100644 vite.config.ts
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 27, done.
  Counting objects: 100% (27/27), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (19/19), done.
  Writing objects: 100% (25/25), 16.61 KiB | 4.15 MiB/s, done.
  Total 25 (delta 0), reused 0 (delta 0), pack-reused 0
  To https://github.com/wuwenjun555/hope3
    262eec5..3aa2b7c  main -> main
  ********************************************************************************/
  cd D:\ASrc\gitee\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.vscode/extensions.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/components/HelloWorld.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/main.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/style.css', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/vite-env.d.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'tsconfig.node.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_002: pnpm create vite hope3 --template vue-ts OK"
  /*out*******************************************************************************
  [master dc202d9] hope3_002: pnpm create vite hope3 --template vue-ts OK
  17 files changed, 1262 insertions(+), 30 deletions(-)
  create mode 100644 .gitignore
  create mode 100644 .vscode/extensions.json
  create mode 100644 doc/devlog.md
  create mode 100644 index.html
  create mode 100644 package.json
  create mode 100644 pnpm-lock.yaml
  create mode 100644 public/vite.svg
  create mode 100644 src/App.vue
  create mode 100644 src/assets/vue.svg
  create mode 100644 src/components/HelloWorld.vue
  create mode 100644 src/main.ts
  create mode 100644 src/style.css
  create mode 100644 src/vite-env.d.ts
  create mode 100644 tsconfig.json
  create mode 100644 tsconfig.node.json
  create mode 100644 vite.config.ts
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 27, done.
  Counting objects: 100% (27/27), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (19/19), done.
  Writing objects: 100% (25/25), 16.66 KiB | 4.17 MiB/s, done.
  Total 25 (delta 0), reused 0 (delta 0), pack-reused 0
  remote: Powered by GITEE.COM [GNK-6.4]
  To https://gitee.com/wuwenjun55555/hope3
    45a7237..dc202d9  master -> master
  ********************************************************************************/
  cd D:\ASrc\hope3
  ```

---

- ### install VSCode

  ```cmd
  start microsoft-edge:https://code.visualstudio.com/Download
  ~ unzip VSCode to D:\ASoftRun\VSCode
  ```

---

- ### Open project in VSCode

  ```cmd
  D:\ASoftRun\VSCode\Code.exe D:\ASrc\hope3
  ```

---

- ### install VSCode Extentions

  ```cmd
  ~ install VSCode Extension below
      - [Project Manager]
      - [ESLint]
      - [Prettier]
      - [Stylelint]
      - [Vue Language Features (Volar)]
      - [TypeScript Vue Plugin (Volar)]
      - [Git Graph]
      - [Git History]
      - [GitLens — Git supercharged]
      - [Path Intellisense v2.8.4]
      - [change-case]
  ```

---

- ### add VSCode Extentions to Workspace Recommendations

  ```cmd
  /********************************************************************************
  In VSCode Extension every extension mouseRightClick and 
  click [Add to Workspace Recommendations] to add below or
  VSCode edit extensions.json
  ********************************************************************************/
  ~ VSCode edit extensions.json
  /*edit*******************************************************************************
  -  "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
  +  "recommendations": [
  +    "Vue.volar",
  +    "vue.vscode-typescript-vue-plugin",
  +    "wmaurer.change-case",
  +    "dbaeumer.vscode-eslint",
  +    "mhutchie.git-graph",
  +    "donjayamanne.githistory",
  +    "eamodio.gitlens",
  +    "christian-kohler.path-intellisense",
  +    "esbenp.prettier-vscode",
  +    "alefragnani.project-manager",
  +    "wayou.vscode-todo-highlight",
  +    "stylelint.vscode-stylelint"
  +  ]
  ********************************************************************************/
  ```

---

- ### comment [.vscode/*] in .gitignore

  文件夹 .vscode 中的文件 extensions.json 中记载了推荐安装的VSCode插件，  
  又或者是只有追加设定的 settings.json 文件都是项目参与者统一开发环境的标准，  
  个人认为都是需要的，所以暂定都是需要 push 到 git 中的。

  ```.gitignore
  ~ VSCode edit .gitignore
  /*edit*******************************************************************************
  -.vscode/*
  -!.vscode/extensions.json
  +# vscode/*
  +# !.vscode/extensions.json
  ********************************************************************************/
  ```

---

- ### save project by VSCode Extentions [Project Manager]

  此举是为了今后在VSCode中快速切换或快速打开各个项目的。  
  保存后内容都存在下面这个配置文件中。  
  C:\Users\Dell\AppData\Roaming\Code\User\projects.json  
  跟之前项目代码备份比对一下，确认了本操作不会改变项目代码。

  ```cmd
  ~ VSCode E[ProjectManager] save hope3
  ```

---

- ### lock project Node.js version

  此举用以锁定项目的 node 版本。

  ```cmd
  node -v > .nvmrc
  ```

---

- ### bk hope3_003

  ```cmd
  cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_003\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### install eslint package for project develop

  此处安装了以下一系列的代码检测工具。
  - eslint 插件化可组装的JavaScript和JSX检查工具
  - @typescript-eslint/parser 因ESLint默认的语法解析器Espree无法解析部分typescript，以此解析器替换
  - @typescript-eslint/eslint-plugin 作为ESLint默认规则的补充，提供了一些额外的适用于typescript语法的规则
  - eslint-plugin-vue 用于Eslint识别vue文件

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这4个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +139
  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +137
  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  Progress: resolved 209, reused 184, downloaded 3, added 137, done

  devDependencies:
  + @typescript-eslint/eslint-plugin 5.56.0
  + @typescript-eslint/parser 5.56.0
  + eslint 8.36.0
  + eslint-plugin-vue 9.10.0

  Done in 15.9s
  ********************************************************************************/
  ```

---

- ### bk hope3_004

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_004\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### install prettier package for project develop

  此处安装了以下一系列的代码统一美化格式化工具。  
  - prettier 支持大量编程语言的代码格式化工具
  - eslint-config-prettier 禁用eslint中与prettier有冲突的代码格式化规则
  - eslint-plugin-prettier 执行eslint检查和自动修复的时候使用prettier的代码格式化规则

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这4个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i prettier eslint-config-prettier eslint-plugin-prettier -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +5
  +++++
  Progress: resolved 214, reused 191, downloaded 1, added 5, done

  devDependencies:
  + eslint-config-prettier 8.8.0
  + eslint-plugin-prettier 4.2.1
  + prettier 2.8.7

  Done in 9.1s
  ********************************************************************************/
  ```

---

- ### bk hope3_005

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_005\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### new .\.prettierrc.cjs

  ```js
  ~ VSCode new .\.prettierrc.cjs
  /*in*******************************************************************************
  /**
   * @file .prettierrc.cjs
   * @fileoverview Prettier javascript代码格式化设置
   * 
   * @OID Prettier
   * @ver 2.8.6
   * @license MIT
   * @intro @en Opinionated Code Formatter
   * @homepage @en https://prettier.io/
   * @github https://github.com/prettier/prettier
   * @doc https://prettier.io/docs/en/options.html
   * @supportLang JavaScript · TypeScript · Flow · JSX · JSON · CSS · SCSS · Less · HTML · Vue · Angular · GraphQL · Markdown · YAML
   * @renew wuwenjun55555 20230322
   */

  module.exports = {
    printWidth: 120,  // 单行代码最大长度（超过该值折行） @default 80 @remark 最大长度一般会设置成 100-120，不建议太长，影响可读性。
    tabWidth: 2,  // 缩进长度 @default 2
    useTabs: false,  // 是否使用tab进行缩进 @default false
    semi: false,  // 是否行尾使用分号 @default true @remark false只会在可能导致ASI错误的行首添加分号
    singleQuote: true,  // 是否字符串使用单引号代替双引号 @default false
    quoteProps: 'as-needed',  // 对象属性中加引号的规则 @option 'as-needed' 仅在必需时为对象的key添加引号|'consistent' 如果对象中有一个属性有引号则都加上引号|'preserve' 遵循对象属性中引号的用法 @default 'as-needed'
    jsxSingleQuote: true,  // 是否JSX中使用单引号代替双引号 @default false
    trailingComma: 'all',  // 是否在可能的多行中添加尾逗号 @option 'es5' 添加es5中被支持的尾逗号|'none' 无尾逗号|'all' 多行时有可能的地方都添加 @default 'es5'
    bracketSpacing: true,  // 是否在对象字面量的括号前后添加空格 @demo true:{ foo: bar }|false:{foo: bar} @default false
    //jsxBracketSameLine: true,  // 是否在多属性行JSX中最后一行的html标签的‘>’另起一行放置 @default false @deprecated 2.4.0开始废弃，被bracketSameLine替代
    bracketSameLine: false,  // 是否多属性html标签的‘>’折行放置 @default false
    arrowParens: 'always',  // 单参数箭头函数参数周围使用圆括号规则 @option 'always' 始终使用|'avoid' 尽量避免使用 @demo 'always': (x) => x|'avoid': x => x @default 'always'
    rangeStart: 0,  // 指定文件需要代码格式化的开始范围 @default 0
    rangeEnd: Infinity,  // 指定文件需要代码格式化的结束范围 @default Infinity
    // parser: None,  // 指定使用哪一种解析器。通常不需要特别指定。 @default None
    // filepath: None,  // 指定用于推断要使用的分析器的文件名。通常用于CLI和API，在配置文件中无需指定。 @default None
    requirePragma: false,  // 是否文件顶部必须有标注的文件才格式化 @default false @remark /* * @prettier */
    insertPragma: false,  // 是否在被preitter格式化的文件顶部加上标注 @default false
    proseWrap: 'preserve',  // 指定文件折行方式 @option 'always' 当超出printWidth时折行|'never' 永不折行|'preserve' 按照文件原样折行 @default 'preserve'
    htmlWhitespaceSensitivity: "strict",  // 指定对HTML全局空白的敏感规则 @option 'css' 遵循css的display属性的默认值|'strict' 空格敏感|'ignore' 空格不敏感 @default 'css'
    vueIndentScriptAndStyle: true,  // 是否对vue中的script及style标签内的代码缩进 @default false
    endOfLine: "lf",  // 行尾换行符 @option 'lf' 仅换行符换行(\n)|'crlf' 回车符+换行符(\r\n)|'cr' 仅回车符(\r)|'auto' 维持文件现有的行尾 (通过查看第一行行尾的内容对一个文件中的混合值进行归一化) @default 'lf'
    embeddedLanguageFormatting: 'auto',  // 对被引号包裹的引用代码进行格式化规则 @option 'off' 不会对嵌入的代码进行格式化|'auto' 对Prettier可以识别的嵌入代码会格式化 @default 'auto'
    singleAttributePerLine: false,  // 是否在Html，Vue，JSX中强制每条属性独占一行 @default false
  };
  ********************************************************************************/
  ```

---

- ### new .\.prettierignore

  ```ini
  ~ VSCode new .\.prettierignore
  /*in*******************************************************************************
  # @file .prettierignore
  # 
  # @OID Prettier
  # @ver 2.8.6
  # @license MIT
  # @intro @en Opinionated Code Formatter
  # @homepage @en https://prettier.io/
  # @github https://github.com/prettier/prettier
  # @doc https://prettier.io/docs/en/ignore.html
  # @renew wuwenjun55555 20230322

  **/.git
  **/.svn
  **/.hg

  node_modules
  dist
  *.yaml
  ********************************************************************************/
  ```

---

- ### new .\.eslintrc.cjs

  ```js
  ~ VSCode new .\.eslintrc.cjs
  /*in*******************************************************************************
  /**
   * @file .eslintrc.cjs
   * @fileoverview ESLint ECMAScript/JavaScript代码中识别和报告模式匹配的工具
   * 
   * @OID ESLint
   * @ver 8.36.0
   * @license MIT
   * @intro @en Find and fix problems in your JavaScript code
   * @homepage @en https://eslint.org
   * @homepage @cn http://eslint.cn
   * @github https://github.com/eslint/eslint
   * @doc TODO:
   * @renew wuwenjun55555 20230323
   */

  module.exports = {
    root: true, // 停止向上查找父级目录中的配置文件
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',  // eslint:all；standard（eslint-config-standard）；
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier', // eslint-config-prettier 的缩写
    ],
    parser: 'vue-eslint-parser', // 指定要使用的解析器
    // 给解析器传入一些其他的配置参数
    parserOptions: {
      ecmaVersion: 'latest', // 支持的es版本
      parser: '@typescript-eslint/parser',
      sourceType: 'module', // 模块类型，默认为script，我们设置为module
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'], // eslint-plugin- 可以省略
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  };
  ********************************************************************************/
  ```

---

- ### new .\.eslintignore

  ```ini
  ~ VSCode new .\.eslintignore
  /*in*******************************************************************************
  # @file .eslintrc.cjs
  # @fileoverview ESLint ECMAScript/JavaScript代码中识别和报告模式匹配的工具
  # 
  # @OID ESLint
  # @ver 8.36.0
  # @license MIT
  # @intro @en Find and fix problems in your JavaScript code
  # @homepage @en https://eslint.org
  # @homepage @cn http://eslint.cn
  # @github https://github.com/eslint/eslint
  # @doc TODO:
  # @renew wuwenjun55555 20230323

  **/.git
  **/.svn
  **/.hg

  node_modules
  dist
  ********************************************************************************/
  ```

---

- ### add eslint cmd into package.json

  ```json
  ~ VSCode edit package.json
  /*edit*******************************************************************************
  *  "scripts": {
  +    "lint": "eslint --ext .js,.vue,.ts src --fix",
  ********************************************************************************/
  ```

---

- ### config .\.vscode\settings.json for elint

  ```json
  ~ VSCode new .\.vscode\settings.json
  /*in*******************************************************************************
  {
    // 保存时eslint自动修复错误
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    //保存自动格式化
    "editor.formatOnSave": true
  }
  ********************************************************************************/
  ```

---

- ### bk hope3_006

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_006\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### update this doc（hope3_006）

  更新现今为止的本文档。这一阶段完成了代码检查和格式化工具的安装与配置。

  ```cmd
  ~ VSCode update this file to D:\ASrc\hope3\doc\devlog.md
  ```

---

- ### git commit & push hope3（hope3_006）

  下面命令中 git add . 表示根据ignore的配置添加所有修改过的文件。

  ```cmd
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\github\hope3
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\gitee\hope3
  cd D:\ASrc\github\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.vscode/extensions.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_006: install & config ESlint & Prettier OK"
  /*out*******************************************************************************
  [main a9c2c0e] hope3_006: install & config ESlint & Prettier OK
  11 files changed, 1728 insertions(+), 3 deletions(-)
  create mode 100644 .eslintignore
  create mode 100644 .eslintrc.cjs
  create mode 100644 .nvmrc
  create mode 100644 .prettierignore
  create mode 100644 .prettierrc.cjs
  create mode 100644 .vscode/settings.json
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 23, done.
  Counting objects: 100% (23/23), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (13/13), done.
  Writing objects: 100% (15/15), 33.71 KiB | 3.37 MiB/s, done.
  Total 15 (delta 2), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (2/2), completed with 1 local object.
  To https://github.com/wuwenjun555/hope3
    3aa2b7c..a9c2c0e  main -> main
  ********************************************************************************/
  cd D:\ASrc\gitee\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.vscode/extensions.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_006: install & config ESlint & Prettier OK"
  /*out*******************************************************************************
  [master 41fa4fb] hope3_006: install & config ESlint & Prettier OK
  11 files changed, 1728 insertions(+), 3 deletions(-)
  create mode 100644 .eslintignore
  create mode 100644 .eslintrc.cjs
  create mode 100644 .nvmrc
  create mode 100644 .prettierignore
  create mode 100644 .prettierrc.cjs
  create mode 100644 .vscode/settings.json
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 23, done.
  Counting objects: 100% (23/23), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (13/13), done.
  Writing objects: 100% (15/15), 33.77 KiB | 2.41 MiB/s, done.
  Total 15 (delta 2), reused 0 (delta 0), pack-reused 0
  remote: Powered by GITEE.COM [GNK-6.4]
  To https://gitee.com/wuwenjun55555/hope3
    dc202d9..41fa4fb  master -> master
  ********************************************************************************/
  cd D:\ASrc\hope3
  ```

---

- ### run lint first time

  ```cmd
  pnpm run lint
  /*out*******************************************************************************
  > hope3@0.0.0 lint D:\ASrc\hope3
  > eslint --ext .js,.vue,.ts src --fix
  ********************************************************************************/
  ```

---

- ### bk hope3_007

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_007\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### update this doc（hope3_007）

  更新现今为止的本文档。这一阶段完成了代码检查和格式化工具的实际执行验证。  
  部分代码在lint命令执行后已经按照规则自动修改了。

  ```cmd
  ~ VSCode update this file to D:\ASrc\hope3\doc\devlog.md
  ```

---

- ### git commit & push hope3（hope3_007）

  ```cmd
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\github\hope3
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\gitee\hope3
  cd D:\ASrc\github\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/components/HelloWorld.vue', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_007: pnpm run lint OK"
  /*out*******************************************************************************
  [main cb55f8d] hope3_007: pnpm run lint OK
  3 files changed, 124 insertions(+), 22 deletions(-)
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 15, done.
  Counting objects: 100% (15/15), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (6/6), done.
  Writing objects: 100% (8/8), 1.38 KiB | 470.00 KiB/s, done.
  Total 8 (delta 5), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
  To https://github.com/wuwenjun555/hope3
    a9c2c0e..cb55f8d  main -> main
  ********************************************************************************/
  cd D:\ASrc\gitee\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/components/HelloWorld.vue', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_007: pnpm run lint OK"
  /*out*******************************************************************************
  [master facb152] hope3_007: pnpm run lint OK
  3 files changed, 124 insertions(+), 22 deletions(-)
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 15, done.
  Counting objects: 100% (15/15), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (6/6), done.
  Writing objects: 100% (8/8), 1.38 KiB | 704.00 KiB/s, done.
  Total 8 (delta 5), reused 0 (delta 0), pack-reused 0
  remote: Powered by GITEE.COM [GNK-6.4]
  To https://gitee.com/wuwenjun55555/hope3
    41fa4fb..facb152  master -> master
  ********************************************************************************/
  cd D:\ASrc\hope3
  ```

---

- ### new .\.env

  ```ini
  ~ VSCode new .\.env
  /*in*******************************************************************************
  # .env 所有情况下都会加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  # APP标题
  VITE_APP_TITLE = hope3

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.local

  ```ini
  ~ VSCode new .\.env.local
  /*in*******************************************************************************
  # .env.local 所有情况下都会加载，但会被 git 忽略

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  # APP标题
  VITE_APP_TITLE = hope3（local）

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-local

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.ut

  ```ini
  ~ VSCode new .\.env.ut
  /*in*******************************************************************************
  #.env.ut 只在指定模式【UT（Unit Test（单元测试模式））】下加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  NODE_ENV = ut

  # APP标题
  VITE_APP_TITLE = hope3（ut）

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-ut

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.dev

  ```ini
  ~ VSCode new .\.env.dev
  /*in*******************************************************************************
  #.env.dev 只在指定模式【DEV（development（开发模式））≈ITA】下加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  # NODE_ENV = development
  NODE_ENV = dev

  # APP标题
  VITE_APP_TITLE = hope3（dev）

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-dev

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.it

  ```ini
  ~ VSCode new .\.env.it
  /*in*******************************************************************************
  #.env.it 只在指定模式【IT（Integration Test（集成测试模式））≈ITB】下加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  NODE_ENV = it

  # APP标题
  VITE_APP_TITLE = hope3（it）

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-it

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.st

  ```ini
  ~ VSCode new .\.env.st
  /*in*******************************************************************************
  #.env.st 只在指定模式【ST（System Test（系统测试模式））≈ITC】下加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  NODE_ENV = st

  # APP标题
  VITE_APP_TITLE = hope3（st）

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-st

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.staging

  ```ini
  ~ VSCode new .\.env.staging
  /*in*******************************************************************************
  #.env.staging 只在指定模式【UAT（User Acceptance Test（用户验收测试模式））】下加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  NODE_ENV = staging

  # APP标题
  VITE_APP_TITLE = hope3（staging）

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-staging

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = true

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = false
  ********************************************************************************/
  ```

---

- ### new .\.env.prod

  ```ini
  ~ VSCode new .\.env.prod
  /*in*******************************************************************************
  #.env.prod 只在指定模式【Production（生产模式）】下加载 

  # ★注意事项：
  # 1.因本env文件中所有设定值都是字符串，得到的boolean变量是'true'/'false'，不能直接用于判读。可用VITE_KEY === 'true'判断。
  # 2.对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML，你可以使用 <wbr> 标签，例如：import.meta.<wbr>env.MODE
  # 3.为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  #   例：如下两个变量
  #       VITE_SOME_KEY=123
  #       DB_PASSWORD=foobar
  #   调用结果：
  #       console.log(import.meta.env.VITE_SOME_KEY) // 123
  #       console.log(import.meta.env.DB_PASSWORD) // undefined
  # 4.想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。
  #   例：
  #       KEY=123
  #       NEW_KEY1=test$foo   # test
  #       NEW_KEY2=test\$foo  # test$foo
  #       NEW_KEY3=test$KEY   # test123
  # 5.安全注意事项
  #   5.1.【.env.*.local】文件应是本地的，可包含敏感变量。应该将【.local】添加到【.gitignore】中以避免它们被 git 检入。
  #   5.2.由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，VITE_* 变量应该不包含任何敏感信息。
  # 6.环境加载优先级
  #   6.1.一份用于指定模式的文件（例如【.env.production】）会比通用形式的优先级更高（例如【.env】）。
  #   6.2.【.env】 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
  # 7.以上为部分注意事项，更多详情请参照Vite官方中文文档：
  #   https://cn.vitejs.dev/guide/env-and-mode.html

  # NODE_ENV = production
  NODE_ENV = prod

  # APP标题
  VITE_APP_TITLE = hope3

  # axios 的 baseURL 参数
  VITE_APP_API_BASE_URL = /api-prod

  # 是否在打包时生成 sourcemap
  VITE_BUILD_SOURCEMAP = false

  # 是否在打包时删除 console 代码
  VITE_BUILD_DROP_CONSOLE = true
  ********************************************************************************/
  ```

---

- ### add build:* cmd into .\package.json

  ```cmd
  ~ VSCode edit .\package.json
  /*edit*******************************************************************************
  *    "build": "vue-tsc && vite build",
  +    "build:dev": "vue-tsc && vite build --mode dev",
  +    "build:ut": "vue-tsc && vite build --mode ut",
  +    "build:it": "vue-tsc && vite build --mode it",
  +    "build:st": "vue-tsc && vite build --mode st",
  +    "build:staging": "vue-tsc && vite build --mode staging",
  +    "build:prod": "vue-tsc && vite build --mode prod",
  ********************************************************************************/
  ```

---

- ### add [.env.*] const value into .\src\vite-env.d.ts

  ```cmd
  ~ VSCode edit .\src\vite-env.d.ts
  /*edit*******************************************************************************
  */// <reference types="vite/client" />

  +/// 本文件为代码中获取.env[mode] 文件中以【VITE_】为前缀的用户自定义环境变量的 TypeScript 智能提示。
  +/// 注意：vite2为src/env.d.ts，vite3已改为src/vite-env.d.ts
  +interface ImportMetaEnv {
  +  readonly VITE_APP_TITLE: string
  +  readonly VITE_APP_API_BASE_URL: string
  +  readonly VITE_BUILD_SOURCEMAP: string
  +  // 更多环境变量...
  +}
  +
  +interface ImportMeta {
  +  readonly env: ImportMetaEnv
  +}
  ********************************************************************************/
  ```

---

- ### add [vite-env.d.ts] into .\tsconfig.node.json include segment

  ```json
  ~ VSCode edit .\tsconfig.node.json
  /*edit*******************************************************************************
  -  "include": ["vite.config.ts"]
  +  // 只有同时加入 "src/vite-env.d.ts" 才能使vite.config.ts中能使用src/vite-env.d.ts中的全局类型
  +  "include": ["vite.config.ts", "src/vite-env.d.ts"]
  ********************************************************************************/
  ```

---

- ### bk hope3_008

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_008\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### install @types/node package for project develop

  未添加@types/node类型定义的需要先添加。  
  TODO: 如果不添加会怎样？影响范围？  
  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i @types/node -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +2 -1
  ++-
  Progress: resolved 215, reused 192, downloaded 1, added 2, done

  devDependencies:
  + @types/node 18.15.9

  Done in 13.9s
  ********************************************************************************/
  ```

---

- ### install terser package for project develop

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i terser -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +11 -1
  +++++++++++-
  Progress: resolved 225, reused 202, downloaded 1, added 11, done

  devDependencies:
  + terser 5.16.8

  Done in 10.8s
  ********************************************************************************/
  ```

---

- ### add [loadEnv] into .\vite.config.ts for use [.env.*] value in vite build

  使用环境变量: .\vite.config.ts中通过 loadEnv加载

  ```typescript
  ~ VSCode edit .\vite.config.ts
  /*edit*******************************************************************************
  -import { defineConfig } from 'vite'
  +import { defineConfig, loadEnv } from 'vite'
  -export default defineConfig({
  -  plugins: [vue()],
  -})
  +export default ({ command, mode }) => {
  +  // 取得环境变量
  +  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd())
  +  return defineConfig({
  +    plugins: [vue()],
  +    define: {
  +      'process.env': env,
  +    },
  +    build: {
  +      outDir: 'dist',
  +      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
  +      // minify默认esbuild，esbuild模式下terserOptions将失效
  +      // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
  +      minify: 'terser',
  +      terserOptions: {
  +        compress: {
  +          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
  +          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
  +          drop_debugger: true, // 去除 debugger
  +        },
  +      },
  +      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
  +    },
  +  })
  +}
  ********************************************************************************/
  ```

---

- ### add [dist\] into bk-hope3-exclude.txt

  ```txt
  ~ VSCode edit D:\ASrc\bk\bk-hope3-exclude.txt
  /*edit*******************************************************************************
  *node_modules\ 
  +dist\
  ********************************************************************************/
  ```

---

- ### bk hope3_009

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_009\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### install vite-plugin-html package for project develop

  使用环境变量: .\index.html 中通过vite-plugin-html加载  
  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i vite-plugin-html -D
  /*out*******************************************************************************
   WARN  GET https://registry.npmjs.org/vite-plugin-html error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +36
  ++++++++++++++++++++++++++++++++++++
  Progress: resolved 261, reused 239, downloaded 0, added 36, done

  devDependencies:
  + vite-plugin-html 3.2.0

  Done in 34.1s
  ********************************************************************************/
  ```

---

- ### add [createHtmlPlugin] into vite.config.ts for use [.env.*] value in vite build

  使用环境变量: .\index.html 中通过vite-plugin-html加载

  ```typescript
  ~ VSCode edit .\vite.config.ts
  /*edit*******************************************************************************
  *import vue from '@vitejs/plugin-vue'
  +import { createHtmlPlugin } from 'vite-plugin-html'
  -    plugins: [vue()],
  +    plugins: [vue(), createHtmlPlugin()],
  ********************************************************************************/
  ```

---

- ### use [.env.*] value in .\index.html

  ```html
  ~ VSCode edit .\index.html
  /*edit*******************************************************************************
  -    <title>Vite + Vue + TS</title>
  +  <title>Vite + Vue + TS <%- VITE_APP_TITLE %></title>
  ********************************************************************************/
  ```

---

- ### use [.env.*] value in *.vue typescript segment

  ```vue
  ~ VSCode edit .\src\App.vue
  /*edit*******************************************************************************
  *import HelloWorld from './components/HelloWorld.vue'
  +const appTitle = import.meta.env.VITE_APP_TITLE
  *  <HelloWorld msg="Vite + Vue" />
  +  <h1>{{ appTitle }}</h1>
  ********************************************************************************/
  ```

---

- ### bk hope3_010

```cmd
xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_010\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
```

---

- ### pnpm run dev for try .env

  ```cmd
  pnpm run dev
  /*out*******************************************************************************
  > hope3@0.0.0 dev D:\ASrc\hope3
  > vite

                                                                                                                22:30:57
    VITE v4.2.1  ready in 3470 ms

    ➜  Local:   http://localhost:5173/                                                                          22:30:57
    ➜  Network: use --host to expose                                                                            22:30:57
    ➜  press h to show help                                                                                     22:30:57
  ********************************************************************************/
  ```

---

- ### run project url for try .env

  上一个命令启动了服务后占用了windows命令窗口，无法再入力其他命令。  
  因此用 cmd 再开启一个新窗口，调用浏览器打卡画面，确认.env中定义的值在画面显示正常。  
  跟之前项目代码备份比对一下，代码没有任何变化。  
  以exit命令关闭新打开的windows命令窗口，并回到之前的windows命令窗口用 Ctrl + C 关闭服务。

  ```cmd
  cmd
  start microsoft-edge:http://localhost:5173/
  exit
  Ctrl + C
  ```

---

- ### update this doc（hope3_010）

  更新现今为止的本文档。这一阶段完成了.env全局环境变量的工具安装和实际执行验证。

  ```cmd
  ~ VSCode update this file to D:\ASrc\hope3\doc\devlog.md
  ```

---

- ### git commit & push hope3（hope3_010）

  ```cmd
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\github\hope3
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\gitee\hope3
  cd D:\ASrc\github\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/vite-env.d.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'tsconfig.node.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.dev', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.it', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.prod', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.st', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.staging', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.ut', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_010: config & run .env.* OK"
  /*out*******************************************************************************
  [main 11012d2] hope3_010: config & run .env.* OK
  15 files changed, 1423 insertions(+), 23 deletions(-)
  create mode 100644 .env
  create mode 100644 .env.dev
  create mode 100644 .env.it
  create mode 100644 .env.prod
  create mode 100644 .env.st
  create mode 100644 .env.staging
  create mode 100644 .env.ut
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 30, done.
  Counting objects: 100% (30/30), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (18/18), done.
  Writing objects: 100% (19/19), 14.64 KiB | 2.93 MiB/s, done.
  Total 19 (delta 12), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (12/12), completed with 6 local objects.
  To https://github.com/wuwenjun555/hope3
    cb55f8d..11012d2  main -> main
  ********************************************************************************/
  cd D:\ASrc\gitee\hope3
  git add .
  /*out*******************************************************************************
  warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'pnpm-lock.yaml', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/App.vue', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'src/vite-env.d.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'tsconfig.node.json', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.dev', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.it', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.prod', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.st', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.staging', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of '.env.ut', LF will be replaced by CRLF the next time Git touches it
  ********************************************************************************/
  git commit -m "hope3_010: config & run .env.* OK"
  /*out*******************************************************************************
  [master 7b3132c] hope3_010: config & run .env.* OK
  15 files changed, 1423 insertions(+), 23 deletions(-)
  create mode 100644 .env
  create mode 100644 .env.dev
  create mode 100644 .env.it
  create mode 100644 .env.prod
  create mode 100644 .env.st
  create mode 100644 .env.staging
  create mode 100644 .env.ut
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  Enumerating objects: 30, done.
  Counting objects: 100% (30/30), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (18/18), done.
  Writing objects: 100% (19/19), 14.31 KiB | 3.58 MiB/s, done.
  Total 19 (delta 13), reused 0 (delta 0), pack-reused 0
  remote: Powered by GITEE.COM [GNK-6.4]
  To https://gitee.com/wuwenjun55555/hope3
    facb152..7b3132c  master -> master
  ********************************************************************************/
  cd D:\ASrc\hope3
  ```

---

- ### install less package for project develop

  Vite 提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。  
  没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖。  
  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i less -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +17 -1
  +++++++++++++++++-
  Progress: resolved 277, reused 255, downloaded 0, added 17, done

  devDependencies:
  + less 4.1.3

  Done in 7.3s
  ********************************************************************************/
  ```

---

- ### install scss & sass package for project develop

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i sass -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +9 -1
  +++++++++-
  Progress: resolved 285, reused 262, downloaded 1, added 9, done

  devDependencies:
  + sass 1.60.0

  Done in 7.3s
  ********************************************************************************/
  ```

---

- ### install styl & stylus package for project develop

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这个工具，  
  以及对应着更新了pnpm-lock.yaml。

  ```cmd
  pnpm i stylus -D
  /*out*******************************************************************************
   WARN  deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  Packages: +4 -1
  ++++-
  Progress: resolved 288, reused 266, downloaded 0, added 4, done

  devDependencies:
  + stylus 0.59.0

  Done in 4.1s
  ********************************************************************************/
  ```

---

- ### new .\src\styles\

  因为一个项目中使用多种预编译工具的可能性很低，所以之后以较为轻量的less为主。

  ```cmd
  mkdir D:\ASrc\hope3\src\styles
  ```

---

- ### new .\src\styles\variables.less - 自定义变量

  ```less
  ~ VSCode new .\src\styles\variables.less
  /*in*******************************************************************************
  @font-color: #333;
  @border: 1px solid #d6d6d6;
  ********************************************************************************/
  ```

---

- ### new .\src\styles\common.less - 公共样式

  ```less
  ~ VSCode new .\src\styles\common.less
  /*in*******************************************************************************
  html,
  body {
    /* 保证画面大小始终与浏览器显示区大小一致（=画面显示区大小随着浏览器显示区变化而随时变化） */
    width: 100%;
    height: 100%;

    /* 保证画面与浏览器边框之间无间距 */
    margin: 0;
    
    /* 保证超出浏览器边框的画面内容不显示（不出现滚动条） */
    overflow: hidden;  

    /* 部分Vue项目的字体设置。参照文章：
      https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/ 
        Group1: Mac操作系统UI字体
          -apple-system: targets Safari on Mac OS X and iOS
          BlinkMacSystemFont: targets Chrome on Mac OS X
        Group2: 其他操作系统UI字体
          'Segoe UI': targets Windows and Windows Phone
          'Roboto': targets Android and newer Chrome OS
          'Oxygen': targets KDE
          'Ubuntu': targets Ubuntu
          'Cantarell': targets GNOME
          'Fira Sans': targets Firefox OS
          'Droid Sans': targets older versions of Android
        Group3:
          'Helvetica Neue': targets pre-El Capitan versions of Mac OS X
          sans-serif: the default sans-serif fallback font
    */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    /* 用于webkit引擎(如chrome)中设置字体的抗锯齿或者说光滑度的属性,使用后字体看起来会更清晰舒服。
        none: 无抗锯齿（对低像素的文本比较好）
        subpixel-antialiased: @default 次像素平滑（常见于Mac OS和MacType For Windows） 
        antialiased: 灰度平滑抗锯齿（常用于Android和iOS等移动设备）
    */
    -webkit-font-smoothing: antialiased;

    /* 用于FireFox中设置字体的抗锯齿或者说光滑度的属性,使用后字体看起来会更清晰舒服。
        auto: 浏览器自动选择是否进行字体抗锯齿，通常是做灰度优化。
        grayscale: 强制使用灰度消除锯齿渲染字体。
    */
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    /* 所有元素使用盒子模型
      任何一个画面html元素的表示区域被视为盒子 = 外边距（margin）+ border（边框） + 内边距（padding）+ content（内容）
      content-box: 标准盒子模型的元素宽高 = content（内容）
      border-box: 非标准盒子模型的元素宽高 = border（边框） + 内边距（padding）+ content（内容）
    */
    box-sizing: border-box;
  }

  body {
    /* flex布局，且其中App元素上下居中显示 */
    display: flex;
    place-items: center;
  }

  #app {
    /* App元素左右居中显示 */
    /* 保证App全局高度始终与浏览器显示区高度一致（=画面显示区高度随着浏览器显示区高度变化而随时变化） */
    margin: 0 auto;
    max-width: 1280px;

    /* App全局的字体大小，颜色设定 */
    font-size: 28px;
    color: @font-color;
  }
  ********************************************************************************/
  ```

---

- ### new .\src\styles\index.less

  ```less
  ~ VSCode new .\src\styles\index.less
  /*in*******************************************************************************
  @import './variables.less';
  @import './common.less';
  ********************************************************************************/
  ```

---

- ### edit .\src\main.ts to import

  ```typescript
  ~ VSCode edit .\src\main.ts
  /*edit*******************************************************************************
  -import './style.css'
  +// [DEL]: import './style.css'
  +import '@/styles/index.less'
  ********************************************************************************/
  ```

---

- ### edit .\vite.config.ts - 全局使用自定义变量

  ```typescript
  ~ VSCode edit .\vite.config.ts
  /*edit*******************************************************************************
  *import vue from '@vitejs/plugin-vue'
  +import { resolve } from 'path'
  *import { createHtmlPlugin } from 'vite-plugin-html'
  +
  +const pathResolve = (dir: string) => resolve(__dirname, dir)
  *      'process.env': env,
  *    },
  +    resolve: {
  +      // 这里的alias是路径别名，是运行阶段的替换路径，而tsconfig.json中的paths是编码阶段的提示，
  +      alias: {
  +        '@': pathResolve('src'), // path.resolve中，'./src' 等于 'src'
  +      },
  +    },
  *      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
  *    },
  +    css: {
  +      preprocessorOptions: {
  +        less: {
  +          javascriptEnabled: true,
  +          additionalData: `@import "${pathResolve('src/styles/index.less')}";`,
  +        },
  +      },
  +    },
  ********************************************************************************/
  ```

---

- ### bk hope3_011

  ```cmd
  xcopy D:\ASrc\hope3 D:\ASrc\bk\hope3_011\ /e /exclude:D:\ASrc\bk\bk-hope3-exclude.txt
  ```

---

- ### pnpm run dev for try less

  ```cmd
  pnpm run dev
  /*out*******************************************************************************
  > hope3@0.0.0 dev D:\ASrc\hope3
  > vite

                                                                                                                11:13:43
    VITE v4.2.1  ready in 3797 ms

    ➜  Local:   http://localhost:5173/                                                                          11:13:43
    ➜  Network: use --host to expose                                                                            11:13:43
    ➜  press h to show help                                                                                     11:13:43
  ********************************************************************************/
  ```

---

- ### run project url for try less

  上一个命令启动了服务后占用了windows命令窗口，无法再入力其他命令。  
  因此用 cmd 再开启一个新窗口，调用浏览器打卡画面，确认less定义的值在画面显示正常。  
  跟之前项目代码备份比对一下，代码没有任何变化。  
  以exit命令关闭新打开的windows命令窗口，并回到之前的windows命令窗口用 Ctrl + C 关闭服务。

  ```cmd
  cmd
  start microsoft-edge:http://localhost:5173/
  exit
  Ctrl + C
  ```

---

- ### update this doc（hope3_011）

  更新现今为止的本文档。这一阶段完成了将less引入项目，且执行验证了less中设定样式在画面中实际产生了效果。

  ```cmd
  ~ VSCode update this file to D:\ASrc\hope3\doc\devlog.md
  ```

---

- ### git commit & push hope3（hope3_011）

  ```cmd
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\github\hope3
  ~ WinMerge D:\ASrc\hope3 -> D:\ASrc\gitee\hope3
  cd D:\ASrc\github\hope3
  git add .
  /*out*******************************************************************************
  ********************************************************************************/
  git commit -m "hope3_011: use & run less OK"
  /*out*******************************************************************************
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  ********************************************************************************/
  cd D:\ASrc\gitee\hope3
  git add .
  /*out*******************************************************************************
  ********************************************************************************/
  git commit -m "hope3_011: use & run less OK"
  /*out*******************************************************************************
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  ********************************************************************************/
  cd D:\ASrc\hope3
  ```

---
