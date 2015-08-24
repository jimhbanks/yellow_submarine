var addressBookApp = addressBookApp || {};
addressBookApp.Contact = Backbone.Model.extend({
  defaults: {
    name: '',
    number: ''
  }
});