import DS from "ember-data";

export default DS.Model.extend({
  link: DS.attr("string"),
  title: DS.attr("string"),
  about: DS.attr("string"),
  public: DS.attr("boolean"),
  created: DS.attr("date", {
    defaultValue() {
      return new Date();
    },
  }),
  user: DS.belongsTo("user"),
});
