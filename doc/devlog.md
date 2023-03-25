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
  git commit -m "hope3_002: pnpm create vite hope3 --template vue-ts OK"
  git push
  cd D:\ASrc\gitee\hope3
  git add .
  git commit -m "hope3_002: pnpm create vite hope3 --template vue-ts OK"
  git push
  cd D:\ASrc\hope3
  ```

---
