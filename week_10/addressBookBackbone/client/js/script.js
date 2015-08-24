// var contact1 = new addressBookApp.Contact({name: 'Mathilda Thompson', number: '07867986492'});
// var contact2 = new addressBookApp.Contact({name: 'Alex Thompson', number: '07766690409'});
// var contact3 = new addressBookApp.Contact({name: 'Sam Jones', number: '05847302934'});

addressBookApp.addressBook = new addressBookApp.AddressBook([contact1, contact2, contact3]);

$(document).ready(function(){
  //Creating a new router instance
  var router = new addressBookApp.AppRouter();
  //Watch the url hash fragment for changes
  Backbone.history.start();
});
