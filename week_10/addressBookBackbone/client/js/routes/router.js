addressBookApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function(){
    var addressBookView = new addressBookApp.AddressBookView({collection: addressBookApp.addressBook});
    addressBookView.render();
  }
})