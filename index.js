"use strict";

var request = require('request');
var Execution = global.ExecutionClass;

class checkOnlineService extends Execution {
  constructor(process) {
    super(process);
  }

  exec() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.getValues()
        .then((options) => {

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
                _this.end(endOptions, resolve, reject);
              } else {
                if (options.check_contains) {
                  var re = new RegExp(options.check_contains, 'i');
                  if (re.test(body)) {
                    var endOptions = {
                      end: 'end'
                    };
                    _this.end(endOptions, resolve, reject);
                  } else {
                    var endOptions = {
                      end: 'error',
                      messageLog: `Host ${options.hostname} check_contains "${options.check_contains}" test fail.`,
                      execute_err_return: `Host ${options.hostname} check_contains "${options.check_contains}" test fail.`,
                      execute_return: ''
                    };
                    _this.end(endOptions, resolve, reject);
                  }
                } else {
                  var endOptions = {
                    end: 'end'
                  };
                  _this.end(endOptions, resolve, reject);
                }
              }
            });
        })
        .catch((err) => {
          var endOptions = {
            end: 'error',
            messageLog: `checkOnlineService Error getValues: ${err}`,
            execute_err_return: `checkOnlineService Error getValues ${err}`,
            execute_return: ''
          };
          _this.end(endOptions, resolve, reject);
        });
    });
  }
}

module.exports = checkOnlineService;
