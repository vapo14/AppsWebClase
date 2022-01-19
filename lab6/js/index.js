$(".agregar").on("click", (e) => {
  e.preventDefault();
  let newText = $("#newText").val();
  if (newText !== "") {
    // let newItem = $(".Lista").append(itemHTML(newText));
    // newItem.show("slow");
    $(itemHTML(newText)).appendTo(".Lista").show("slide");
  }
});

$(".Lista").on("click", ".checar", function (event) {
  event.preventDefault();
  $(this).siblings("p").toggleClass("checked");
});

$(".Lista").on("click", ".del", function (event) {
  event.preventDefault();
  $(this).parent().hide("slide");
  setTimeout(() => {
    // dejar que corra la animacion, luego borrar el elemento
    $(this).parent().remove();
  }, 1000);
});

const itemHTML = (name) => {
  return `<li class="list-item">
  <p>${name}</p>
  <button class="checar">Check</button>
  <button class="del">Delete</button>
</li>`;
};
