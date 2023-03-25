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
