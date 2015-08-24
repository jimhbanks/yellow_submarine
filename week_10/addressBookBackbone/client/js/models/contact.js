var addressBookApp = addressBookApp || {};
addressBookApp.Contact = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/contacts'
  defaults: {
    name: '',
    number: ''
  }
});