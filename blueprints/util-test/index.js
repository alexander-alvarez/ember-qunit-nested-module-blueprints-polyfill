'use strict';

/* eslint-env node */

const testInfo = require('ember-cli-test-info');
const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates a util unit test.',
  locals: function(options) {
    return {
      friendlyTestName: testInfo.name(options.entity.name, 'Unit', 'Utility'),
      dasherizedModulePrefix: stringUtils.dasherize(options.project.config().modulePrefix)
    };
  }
};
