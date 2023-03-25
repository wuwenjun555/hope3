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

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这4个工具，以及对应着更新了pnpm-lock.yaml。

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

  跟之前项目代码备份比对一下，仅在package.json的devDependencies中追加这4个工具，以及对应着更新了pnpm-lock.yaml。

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
  ********************************************************************************/
  git commit -m "hope3_007: pnpm run lint OK"
  /*out*******************************************************************************
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  ********************************************************************************/
  cd D:\ASrc\gitee\hope3
  git add .
  /*out*******************************************************************************
  ********************************************************************************/
  git commit -m "hope3_007: pnpm run lint OK"
  /*out*******************************************************************************
  ********************************************************************************/
  git push
  /*out*******************************************************************************
  ********************************************************************************/
  cd D:\ASrc\hope3
  ```

---
