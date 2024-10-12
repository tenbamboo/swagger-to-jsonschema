#!/usr/bin/env node
"use strict";

var _minimist = _interopRequireDefault(require("minimist"));
var _path = _interopRequireDefault(require("path"));
var _logUtil = _interopRequireDefault(require("./script/log-util.js"));
var _index = _interopRequireDefault(require("./script/generate-json-schema/index.js"));
var _fs = _interopRequireDefault(require("fs"));
var _vm = _interopRequireDefault(require("vm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// 取得命令参数
var argv = (0, _minimist["default"])(process.argv.slice(2));
// script 参数必须存在
if (argv.script) {
  if (argv.script === 'generate-json-schema') {
    var configFilePath = _path["default"].join(process.cwd(), '.swagger-to-jsonschema-config');
    var data = _fs["default"].readFileSync(configFilePath, 'utf8');
    try {
      var config = JSON.parse(data);
      _logUtil["default"].label('当前配置信息:');
      _logUtil["default"].info(configFilePath);
      var scriptInstance = new _index["default"](process.cwd(), {
        config: config
      });
      scriptInstance.run();
    } catch (err) {
      console.error('Error reading the config file', err);
    }
    // });
  }
}