function appendNewItem(data){
 $('<li class="'+ (data.done == 't' ? "completed" : "") + '">'+
   '<input class="toggle" type="checkbox" data-id="'+ data.id +'" '+ (data.done == 't' ? 'checked="checked"' : "") + '>'+
   '<label>'+ data.item +'</label>'+
   '<button class="destroy" data-id="'+ data.id +'"></button>'+
   '</li>').prependTo("#todo-list")
}


function getItems(){
 // console.log('getItems');
 //ajax request to retrieve all the items from the database
 $.ajax({
   type: 'GET',
   url: '/items',
   dataType: 'json'
 }).done(function(data){
   $.each(data, function(index, item){
     appendNewItem(item);
   })
 })
}

function createItem(){
  var item = $('new-todo').val();
  $.ajax({
    type: 'POST',
    url: '/items',
    dataType: 'json',
    data: {new: itemData }
  }).done(function(data){
    appendNewItem(data);
    $('#new-do').val('');
  })
}

function changeItemStatus(){
  var $this = $(this);
  var itemId = $(this).data('id');
  var isDone = $(this).is(":checked");
  $.ajax({
    type: "PUT",
    url: "/items/" + itemId,
    data: {done: isDone},
    dataType: 'json'
  }).done(function(data){
    $(this).parent().toggleClass('completed');
  })
}

function destroy(){
  var item = $('delete').val();
  // var $this = $(':dbutton')
  binding.pry
  debugger;
  $.ajax({
    type: 'DELETE',
    url: "/items/" + itemId,
    dataType: 'json'
})

}

$(document).ready(function(){
 getItems();
 $('new-todo').on('keypress', function(event){
  // if we press enter we will create a new item
  if(event.which === 13){
    createItem();
   }
 })

 // we need to use event delegtion here because li toggle is not on the page when it loads therefor 
 // we have to attach the event listerner to the #todo-list 
$('#todo-list').on('change', '.toggle', changeItemStatus);

})








