# egg

 livesteamsback

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

###注意
```
由于数据量太大， goods 的第三层删除会超时 导致连接断开报错 但是是成功的
```
###项目结构
```
minishop
├── app
|   ├── router.js   后端路由 就是前端接口中的path
│   ├── controller   控制层  接受输入(从router中跳过来) 控制处理
│   |   └── home.js
│   ├── service   服务层 和控制层一一对应 被调用后去处理数据
│   |   └── user.js
│   ├── middleware 中间件 该项目中没有使用
│   |   
│   └── model mongodb的数据库层 
|   |   └──user  每一层对应一个表 其中描述了表达数据结构
│   |   
│   └── model mongodb的数据库层 
|       └──user  每一层对应一个表 其中描述了表达数据结构
│   |   
│   └── update 上传的文件保存位置
|       
├── config   eggjs 的插件 config 
|   ├── plugin.js
|   ├── config.default.js
├── test   单元测试 该项目没有进行单元测试
|   ├── controller
|   |   └── home.test.js
|   └── service
|       └── user.test.js
└── package.json  项目依赖
```

### 数据库连接
```bash
$  config.default.js 中的mongoose 模块
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
