addressBookApp.AddressBookView = Backbone.View.extend({
  el:'#book',
  events: {'submit form#add': 'createContact'},
  initialize: function(){
    this.collection.bind('add remove change', this.render, this);
    this.collection.fetch({
      success: function(collection, response, options) {
      console.log(collection);
      },
      error: function(collection, response, options) {
      console.log('error');
      }
    })
  },

  render: function(){
    console.log('render called')
    //Select node with id of contactList from index.html 
    var contactList = $('#contactList');
    contactList.empty();
    //Loop over each contact object in the collection
    this.collection.each(function(contact){
      //Create a contactView instance for each contact model
      var contactView = new addressBookApp.ContactView({model: contact})
      contactList.append(contactView.render().el);
    });
  },
  addContact: function(name, number){
    //Creating a contact instance
    var contact = new addressBookApp.Contact({name: name, number: number});
    this.collection.create(contact);
    console.log(this.collection.length);
  },
  createContact: function(event){
    //Prevent the form from submitting and the page refreshing
    event.preventDefault();
    var name = this.$('#name');
    var number = this.$('#number');
    this.addContact(name.val(), number.val());
    //Clear the form
    name.val('');
    number.val('');
  }
})