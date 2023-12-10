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
