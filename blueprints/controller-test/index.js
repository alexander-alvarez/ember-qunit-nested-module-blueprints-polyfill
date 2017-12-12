'use strict';

/* eslint-env node */

const stringUtil = require('ember-cli-string-utils');
const testInfo = require('ember-cli-test-info');


module.exports = {
  description: 'Generates a controller unit test.',
  fileMapTokens: function() {
    return {
      __testType__: function() {
        return 'unit'
      },
      __path__: function() {
        return 'controllers';
      }
    };
  },
  locals: function(options) {
    let dasherizedModuleName = stringUtil.dasherize(options.entity.name);
    let controllerPathName = dasherizedModuleName;
    return {
      controllerPathName: controllerPathName,
      friendlyTestDescription: testInfo.description(options.entity.name, 'Unit', 'Controller')
    };
  }
};
