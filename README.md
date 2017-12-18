# ember-qunit-nested-module-blueprints-polyfill

This addon provides blueprint overrides for non-acceptance tests in the style of
"Q-unit nested modules" or "simple q-unit" as described in the [RFC-232] and [RFC-268].

This is a pollyfill for applications wanting to leverage these blueprints in apps
using `ember-qunit@^4.2.0` who aren't on an ember source version supporting the new blueprints.

## Installation

`ember install ember-qunit-nested-module-blueprints-polyfill`

## Overrides
- `acceptance-test`
- `component-test`
- `controller-test`
- `helper-test`
- `initializer-test`
- `instance-initializer-test`
- `mixin-test`
- `route-test`
- `service-test`
- `util-test`

## Development

* `git clone git@github.com:alexander-alvarez/ember-qunit-nested-module-blueprints-polyfill.git`
* `cd ember-qunit-nested-module-blueprints-polyfill`

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


[RFC-232]: https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md
[RFC-268]: https://github.com/emberjs/rfcs/blob/master/text/0268-acceptance-testing-refactor.md
