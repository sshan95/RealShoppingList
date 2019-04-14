$(function() {

  //This is to submit an item with another function
  $("#js-shopping-list-form").submit(function(event) {
      event.preventDefault();
      alert("Added Item!");
      addListItem();
  });

  //This is to delete the item
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  //This is to check the item
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  

  function addListItem() {
      let inputValue = $("#shopping-list-entry").val();

      $(".shopping-list").append(`<li>
      <span class="shopping-item">${inputValue}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`)
  };
});

