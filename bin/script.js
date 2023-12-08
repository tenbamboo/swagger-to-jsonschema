#!/usr/bin/env node
const minimist = require('minimist')
const path = require('path')
const log = require('./script/log-util')
const GenerateJsonSchema = require('./script/generate-json-schema')

// 取得命令参数
const argv = minimist(process.argv.slice(2))
// script 参数必须存在
if (argv.script) {
  if (argv.script === 'generate-json-schema') {
    const configFilePath = path.join(process.cwd(), 'swagger-to-jsonschema-config.js')
    // get config
    const config = require(configFilePath)
    log.label('当前配置信息:')
    log.info(configFilePath)
    const scriptInstance = new GenerateJsonSchema(process.cwd(), {
      config
    })
    // 执行脚本
    scriptInstance.run()
  }
}
