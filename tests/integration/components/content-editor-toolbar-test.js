import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-editor-toolbar', 'Integration | Component | content editor toolbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{content-editor-toolbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#content-editor-toolbar}}
      template block text
    {{/content-editor-toolbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
