function appendNewItem(data){
  $('<li class="'+ (data.done == 't' ? "completed" : "") + '">'+
    '<input type="checkbox" data-id="'+ data.id +'" '+ (data.done == 't' ? 'checked="checked"' : "") + '>'+
    '<label>'+ data.title +'</label>'+
    '<button class="destroy" data-id="'+ data.id +'"></button>'+
    '</li>').prependTo("#todo-list")
}

function getVideo(){
  $.ajax({
    type: 'GET',
    url: '/videos',
    data: {title: title, description: description, url: url, genre: genre},
    dataType: 'json'
    }).done(function(data){
      $.each(data, function(index, item){
      appendNewItem(item);
   })
  )
 })
}


function createVideo(){
    var title = $('#title').val();
    var description = $('#description').val();
    var url = $('#url').val();
    var genre =$('#genre').val();
   $.ajax({
    type: 'POST',
    url: '/videos',
    data: {title: title, description: description, url: url, genre: genre},
    dataType: 'json'
   }).done(function(data){
    appendNewItem;
 })
}






// $('.submit').on('click', createVideo)