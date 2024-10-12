"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _child_process = _interopRequireDefault(require("child_process"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * 设置显示在控制台上的命令样式
 */
function commandStyle(val) {
  return _chalk["default"].underline.gray(val);
}

/**
 * 执行命令并取得命令输出结果
 */
var getOutput = function getOutput(cmd) {
  var out = _child_process["default"].execSync(cmd).toString();
  return out.trim().replace('\n', '').replace('\r\n', '');
};

/**
 * 执行指定命令
 */
var cmd = function cmd(_cmd) {
  console.log(commandStyle("exec command: ".concat(_cmd)));
  return getOutput(_cmd);
};
var _default = exports["default"] = {
  cmd: cmd,
  getOutput: getOutput
};