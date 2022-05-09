const log4js = require("log4js");


log4js.configure({
    appenders: {
        myconsole: { type: "console" },
        myfile: { type: "file", filename: "info.log" },
    },
    categories: {
        default: { appenders: ["myconsole"], level: "trace" },
        console: { appenders: ["myconsole"], level: "debug" },
        file: { appenders: ["myfile"], level: "warn" },
        all: { appenders: ["myconsole", "myfile"], level: "error" },
    },
});
const logger = log4js.getLogger('console');

module.exports = { logger }