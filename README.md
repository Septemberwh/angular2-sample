# angular2-sample
This is an example of a angular2

# install
```shell
npm install --save --save-exact @angular/common @angular/core @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic reflect-metadata rxjs zone.js
```
- @angular: 这个必须的，没意见吧？之所以分了多个包，这是最新2.0.1的变化，可以按需引入，增加灵活性
- reflect-metadata: angular2允许开发者使用Decorator，这使得程序具备更好的可读性。无奈Decorator是ES2016里的提案，需要reflect-metadata提供反射API才能使用
- rxjs: 一个Reactive Programming的JavaScript实现。这里对她的依赖是因为angular2支持多种数据更新模式，比如：flux、Rx.js
- zone.js: 用来对异步任务提供Hooks支持，使得在异步任务运行之前/之后做额外操作成为可能。在angular2里的主要应用场景是提高脏检查效率、降低性能损耗。
```shell
npm install --save-dev webpack webpack-dev-server ts-loader typescript typings
```
- webpack: 我们这里使用webpack对源码进行编译、打包，而不是用官网介绍的System.js的运行时加载、解释、执行。合并打包的好处不用我多说吧？减少请求数、uglify、预检查...
- webpack-dev-server: 一个轻量级的，支持webpack编译的静态服务器(调试工具)，本章节我们就用它启动程序
- ts-loader: TypeStrong出品的TypeScript加载器，通过该加载器，TypeScript源码可以顺利被编译成ES5代码
- typescript: angular2官方推荐的开发语言，我们在教程里也将使用该语言进行代码编写
- typings: typescript定义文件管理系统，由于angular2依赖ES2015的诸多特性，譬如：Promise等，所以需要这些API的支持以及typescript定义
```shell
node node_modules/.bin/typings install
```

# run
```shell
npm start
```