import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("users-list", "Integration | Component | users list", {
  integration: true,
});

test("it renders", function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-list}}`);

  assert.equal(this.$().text().trim(), "");

  // Template block usage:
  this.render(hbs`
    {{#users-list}}
      template block text
    {{/users-list}}
  `);

  assert.equal(this.$().text().trim(), "template block text");
});

test("verify that the image class is the correct value", function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-list}} fake-url sample-email`);

  assert.equal(this.$("img").attr("class"), "avatar");

  // Template block usage:
  this.render(hbs`
    {{#users-list fake-url sample-email}}
      template block text
    {{/users-list}}
  `);

  assert.equal(this.$("img").attr("class"), "avatar");
});
