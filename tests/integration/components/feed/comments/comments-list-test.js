import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('feed/comments/comments-list', 'Integration | Component | feed/comments/comments list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed/comments/comments-list}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#feed/comments/comments-list}}
      template block text
    {{/feed/comments/comments-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
