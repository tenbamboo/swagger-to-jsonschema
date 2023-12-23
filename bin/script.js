#!/usr/bin/env node
import minimist from 'minimist'
import path from 'path'
import log from './script/log-util.js'
import GenerateJsonSchema from './script/generate-json-schema/index.js'
import fs from 'fs';
import vm from 'vm';
// 取得命令参数
const argv = minimist(process.argv.slice(2))
// script 参数必须存在
if (argv.script) {
  if (argv.script === 'generate-json-schema') {
    const configFilePath = path.join(process.cwd(), '.swagger-to-jsonschema-config');



    const data = fs.readFileSync(configFilePath, 'utf8');

    try {
      const config = JSON.parse(data);
      log.label('当前配置信息:');
      log.info(configFilePath);
      const scriptInstance = new GenerateJsonSchema(process.cwd(), {
        config
      });
      scriptInstance.run();
    } catch (err) {
      console.error('Error reading the config file', err);
    }
    // });

  }
}
