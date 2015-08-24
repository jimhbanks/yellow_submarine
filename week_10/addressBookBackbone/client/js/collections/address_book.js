addressBookApp.AddressBook = Backbone.Collection.extend({
  url: 'http://localhost:3000/contacts'
  model: addressBookApp.Contact
})