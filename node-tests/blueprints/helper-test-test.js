'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;
const modifyPackages = blueprintHelpers.modifyPackages;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;

const fixture = require('../helpers/fixture');

describe('Blueprint: helper-test', function() {
  setupTestHooks(this);

  describe('in app', function() {
    beforeEach(function() {
      return emberNew();
    });

    describe('with ember-qunit-nested-module-blueprints-polyfill', function() {

      it('helper-test foo/bar-baz', function() {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz'], _file => {
          expect(_file('tests/integration/helpers/foo/bar-baz-test.js'))
          .to.equal(fixture('helper-test/rfc232.js'));
        });
      });

      it('helper-test foo/bar-baz --unit', function() {
        return emberGenerateDestroy(['helper-test', 'foo/bar-baz', '--unit'], _file => {
          expect(_file('tests/unit/helpers/foo/bar-baz-test.js'))
          .to.equal(fixture('helper-test/rfc232-unit.js'));
        });
      });
    });
  });
});
