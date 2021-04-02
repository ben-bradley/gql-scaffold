const uuid = require('uuid');
const chalk = require('chalk');

const chalkLevel = (level) => {
  const levels = {
    debug: 'white',
    error: 'red',
    warn: 'yellow',
    info: 'blue',
    default: 'reset'
  };

  return levels[level] || levels.default;
};

const setupLogger = () => {
  const traceId = uuid.v4();

  const logger = (level, message) => {
    const timestamp = Date.now();

    const payload = [
      `[${chalk.green(timestamp)}]`,
      chalk.yellow(traceId),
      chalk[chalkLevel(level)](level),
      (typeof message === 'object') ? JSON.stringify(message) : message 
    ].join('|');

    console.log(payload);
  };

  return logger;
};

module.exports = setupLogger;
