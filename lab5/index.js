function PostTodo() {
  let todo = $("#newValue").val();

  if (todo !== "") {
    $("#item-list").append(GenerateItem(todo));
  }
}

function GenerateItem(name) {
  return `<li class="todo-item">
    <input type="checkbox" name="" id="" />
      ${name}
  </li>`;
}

function ClearAllItems() {
  $("#item-list").find("input").prop("checked", false);
}

function MarkAllItems() {
  $("#item-list").find("input").prop("checked", true);
}

function DeleteAllItems() {
  $("#item-list").remove();
}

$(".post-button").on("click", PostTodo);
$(".clear-button").on("click", ClearAllItems);
$(".mark-button").on("click", MarkAllItems);
$(".delete-button").on("click", DeleteAllItems);
