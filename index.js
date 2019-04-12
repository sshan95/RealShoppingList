$(function() {

  //This is to submit an item with another function
  $("#js-shopping-list-form").submit(function(event) {
      event.preventDefault();
      alert("Added Item!");
      addListItem();
  });

  //This is to check the item
  $(".shopping-item-toggle").on("click", function() {
   $(this).closest("li").toggleClass(".shopping-item shopping-item__checked");
});

  //This is to delete the item
   $(".shopping-item-delete").on("click", function() {
    $(this).closest("li").remove();
})
  

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

