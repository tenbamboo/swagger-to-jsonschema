import chalk from 'chalk'

const warning = function (message) {
  console.log(chalk.bold.yellow(message))
}

const info = function (message) {
  console.log(chalk.bold.white(message))
}

const label = function (message) {
  console.log(chalk.bold.cyan(message))
}

const success = function (message) {
  console.log(chalk.bold.green(message))
}

const error = function (message) {
  console.log(chalk.bold.red(message))
}

export default {
  warning,
  info,
  label,
  success,
  error,
}
