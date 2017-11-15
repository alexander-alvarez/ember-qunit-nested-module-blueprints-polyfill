# ember-qunit-nested-module-blueprints-polyfill

This addon provides blueprint overrides for non-acceptance tests in the style of
"Q-unit nested modules" or "simple q-unit" as described in the RFC https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md

This is a pollyfill for applications wanting to leverage these blueprints in apps
using `ember-qunit@^4.1.1` who aren't on an ember source version supporting the new blueprints.   

## Overrides
- `component-test`
- more..

## Installation

* `git clone <repository-url>` this repository
* `cd ember-qunit-nested-module-blueprints-polyfill`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
