// npm i --save-dev @umijs/openapi  安装umi
// 根据后端提供的api接口文档自动生成代码

import { generateService } from '@umijs/openapi'

generateService({
  requestLibPath: "import request from '@/request'",  // 请求库的导入路径
  schemaPath: 'http://localhost:8888/api/v2/api-docs',// 后端提供的api接口文档地址
  serversPath: './src', // 生成的代码存放路径
})
