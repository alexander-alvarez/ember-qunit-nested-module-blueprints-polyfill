'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;
const modifyPackages = blueprintHelpers.modifyPackages;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;

const fixture = require('../helpers/fixture');

describe('Blueprint: route-test', function() {
  setupTestHooks(this);

  describe('in app', function() {
    beforeEach(function() {
      return emberNew();
    });

    describe('with ember-qunit-nested-module-blueprints-polyfill', function() {

      it('route-test foo', function() {
        return emberGenerateDestroy(['route-test', 'foo'], (_file) => {
          expect(_file('tests/unit/routes/foo-test.js'))
          .to.equal(fixture('route-test/rfc232.js'));
        });
      });
    });

  });

});
