'use strict';

/* eslint-env node */

const testInfo = require('ember-cli-test-info');
const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates an instance initializer unit test.',
  locals: function(options) {
    return {
      friendlyTestName: testInfo.name(options.entity.name, 'Unit', 'Instance Initializer'),
      dasherizedModulePrefix: stringUtils.dasherize(options.project.config().modulePrefix)
    };
  }
};
