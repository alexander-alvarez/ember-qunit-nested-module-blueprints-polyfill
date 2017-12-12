'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;
const modifyPackages = blueprintHelpers.modifyPackages;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;

const fixture = require('../helpers/fixture');

describe('Blueprint: component-test', function() {
  setupTestHooks(this);

  describe('in app', function() {
    beforeEach(function() {
      return emberNew();
    });

    describe('with ember-qunit-nested-module-blueprints-polyfill', function() {

      it('component-test x-foo', function() {
        return emberGenerateDestroy(['component-test', 'x-foo'], _file => {
          expect(_file('tests/integration/components/x-foo-test.js'))
          .to.equal(fixture('component-test/rfc232.js'));
        });
      });

      it('component-test x-foo --unit', function() {
        return emberGenerateDestroy(['component-test', 'x-foo', '--unit'], _file => {
          expect(_file('tests/unit/components/x-foo-test.js'))
          .to.equal(fixture('component-test/rfc232-unit.js'));
        });
      });
    });

  });
});
