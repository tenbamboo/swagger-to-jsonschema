"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var warning = function warning(message) {
  console.log(_chalk["default"].bold.yellow(message));
};
var info = function info(message) {
  console.log(_chalk["default"].bold.white(message));
};
var label = function label(message) {
  console.log(_chalk["default"].bold.cyan(message));
};
var success = function success(message) {
  console.log(_chalk["default"].bold.green(message));
};
var error = function error(message) {
  console.log(_chalk["default"].bold.red(message));
};
var _default = exports["default"] = {
  warning: warning,
  info: info,
  label: label,
  success: success,
  error: error
};