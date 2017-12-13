'use strict';

/* eslint-env node */

const testInfo = require('ember-cli-test-info');
const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates a helper integration test or a unit test.',

  availableOptions: [
    {
      name: 'test-type',
      type: ['integration', 'unit'],
      default: 'integration',
      aliases: [
        { 'i': 'integration' },
        { 'u': 'unit' },
        { 'integration': 'integration' },
        { 'unit': 'unit' }
      ]
    }
  ],

  fileMapTokens: function() {
    return {
      __testType__: function(options) {
        return options.locals.testType || 'integration';
      },
      __path__: function(options) {
        return 'helpers';
      }
    };
  },

  locals: function(options) {
    let testType = options.testType || 'integration';
    let testName = testType === 'integration' ? 'Integration' : 'Unit';
    let friendlyTestName = testInfo.name(options.entity.name, testName, 'Helper');

    return {
      friendlyTestName: friendlyTestName,
      dasherizedModulePrefix: stringUtils.dasherize(options.project.config().modulePrefix),
      testType: testType
    };
  }
};

