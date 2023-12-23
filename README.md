# Swagger To Jsonschema

通过Swagger工具暴露接口来转换成Jsonschema

## 快速开始

1. 安装

```bash

pnpm i swagger-to-jsonschema -D

```

2. 在`package.json`中的`scripts`中增加相关执行脚本

```base
swagger-to-jsonschema --script generate-json-schema
```

3. 在项目根路径下创建`swagger-to-jsonschema-config.js`文件,文件相关配置请查看本项目中的`swagger-to-jsonschema-config.js`

## 属性说明

```javascript
{
  jsonSchema: {
    schemaInput: {
      swaggerUrls: {
        claim: {
          url: 'http://10.199.134.149:9900/claim/v3/api-docs?group=claim',
          name: '报账单服务'
        },
        // admin: {
        //   url: 'http://10.199.134.149:9600/v3/api-docs?group=%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E9%85%8D%E7%BD%AE',
        //   name: '公共服务'
        // },
        // image: {
        //   url: 'http://10.199.134.149:9400/image/v3/api-docs',
        //   name: '电子影像'
        // },
        oper: {
          url: 'http://10.199.134.149:9300/operating/v3/api-docs?group=OPERATING-DEFAULT',
          name: '运营服务'
        },
      }
    },
    // schema文件输出的路径
    schemaOutput: './jsonschema',
    // typescript interface输出的路径
    interfaceOutput: './interface',
    setting: {
      // 将api整理到一起，生成Yapi等工具所用，将同一实例内的api归类到一起，以用于yapi等工具不支持三级目录的情况
      isOutputApiManagementFile: false,
      // 当后端属性中的title为空时是否处理
      isTitleNullCompletionByPropKey: false,
      // 是否生成typescript中使用的interface信息
      isGenerateInterfaceByTypescript: true,
    }
  }
}
```
