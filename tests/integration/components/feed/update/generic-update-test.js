import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('feed/update/generic-update', 'Integration | Component | feed/update/generic update', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed/update/generic-update}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#feed/update/generic-update}}
      template block text
    {{/feed/update/generic-update}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
