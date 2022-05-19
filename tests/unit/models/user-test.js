import { moduleForModel, test } from "ember-qunit";

moduleForModel("user", "Unit | Model | user", {
  // Specify the other units that are required for this test.
  needs: ["model:bookmark"],
});

test("validate fullName", function (assert) {
  let model = this.subject({ firstName: "Foo", lastName: "Bar" });

  assert.equal(model.get("fullName"), "Foo Bar", "valid fullName");
});
