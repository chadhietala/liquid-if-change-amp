import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('feed/post-meta', 'Integration | Component | feed/post meta', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed/post-meta}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#feed/post-meta}}
      template block text
    {{/feed/post-meta}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
