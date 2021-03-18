'use strict';

const axios = require('axios');
const ms = require('ms');
const Executor = require('@runnerty/module-core').Executor;

class checkOnlineService extends Executor {
  constructor(process) {
    super(process);
  }

  async exec(options) {
    let endOptions = {
      end: 'end'
    };
    try {
      const values = {
        method: options.method || 'GET',
        url: options.hostname,
        auth: options.auth,
        headers: options.headers
      };
      if (options.timeout) values.timeout = ms(options.timeout);
      const response = await axios(values);

      if (options.check_contains) {
        const re = new RegExp(options.check_contains, 'i');
        if (re.test(response.data)) {
          this.end(endOptions);
        } else {
          endOptions = {
            end: 'error',
            messageLog: `Host ${options.hostname} check_contains "${options.check_contains}" test fail.`,
            err_output: `Host ${options.hostname} check_contains "${options.check_contains}" test fail.`,
            msg_output: ''
          };
          this.end(endOptions);
        }
      } else {
        this.end(endOptions);
      }
    } catch (err) {
      endOptions.end = 'error';
      endOptions.messageLog = `Host ${options.hostname} : ${err.message}`;
      endOptions.err_output = `Host ${options.hostname} : ${err.message}`;
      this.end(endOptions);
    }
  }
}

module.exports = checkOnlineService;
