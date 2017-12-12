'use strict';

/* eslint-env node */

const testInfo = require('ember-cli-test-info');

module.exports = {
  description: 'Generates a service unit test.',
  locals: function(options) {
    return {
      friendlyTestDescription: testInfo.description(options.entity.name, 'Unit', 'Service')
    };
  },
};
