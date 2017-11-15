import { module, test } from 'qunit';
import { <% if (testType === 'integration' ) { %> setupRenderingTest <% } else if(testType === 'unit') { %>  setupTest <% } %> } from 'ember-qunit';

module('<%= friendlyTestDescription %>', function(hooks) {
<% if (testType === 'integration' ) { %>  setupRenderingTest(hooks); <% } else if(testType === 'unit') { %>  setupTest(hooks); <% } %>

  // use hooks.before/after/beforeEach/afterEach for test setup

  test('it renders', async function(assert) {<% if (testType === 'integration' ) { %>
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await this.render(hbs`{{<%= componentPathName %>}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    await this.render(hbs`
      {{#<%= componentPathName %>}}
        template block text
      {{/<%= componentPathName %>}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');<% } else if(testType === 'unit') { %>
    // Creates the component instance
    let Factory = this.owner.factoryFor('component:<%= componentPathName %>');
    let subject = Factory.create({});
    assert.ok(subject);<% } %>
  });
});
