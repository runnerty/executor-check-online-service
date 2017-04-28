"use strict";

var request = require('request');
var Execution = global.ExecutionClass;

class checkOnlineService extends Execution {
  constructor(process) {
    super(process);
  }

  exec(options) {
    var _this = this;

    request({
        method: options.method || 'GET',
        uri: options.hostname,
        auth: options.auth
      },
      function (err, response, body) {
        if (err) {
          var endOptions = {
            end: 'error',
            messageLog: `Host ${options.hostname} : ${err}`,
            execute_err_return: `Host ${options.hostname} ${err}`,
            execute_return: ''
          };
          _this.end(endOptions);
        } else {
          if (options.check_contains) {
            var re = new RegExp(options.check_contains, 'i');
            if (re.test(body)) {
              var endOptions = {
                end: 'end'
              };
              _this.end(endOptions);
            } else {
              var endOptions = {
                end: 'error',
                messageLog: `Host ${options.hostname} check_contains "${options.check_contains}" test fail.`,
                execute_err_return: `Host ${options.hostname} check_contains "${options.check_contains}" test fail.`,
                execute_return: ''
              };
              _this.end(endOptions);
            }
          } else {
            var endOptions = {
              end: 'end'
            };
            _this.end(endOptions);
          }
        }
      });
  }
}

module.exports = checkOnlineService;
