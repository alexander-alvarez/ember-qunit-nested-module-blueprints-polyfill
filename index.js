/* eslint-env node */
'use strict';
let VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-qunit-nested-module-blueprints-polyfill',
  isEnabled() {
    let checker = new VersionChecker(this);
    let dep = checker.forEmber();
    let deprecated = dep.gte('3.0.0');
    if (deprecated) {
      this.ui.writeError('ember-qunit-nested-module-blueprints-polyfill is no longer needed in Ember 3.0. ');
      this.ui.writeError('Please remove ember-qunit-nested-module-blueprints-polyfill from your package.json.');
      this.ui.writeError('See the following for more info:\n');
      this.ui.writeError('https://github.com/alexander-alvarez/ember-qunit-nested-module-blueprints-polyfill/issues/13');
    }
    return !deprecated;
  }
};
