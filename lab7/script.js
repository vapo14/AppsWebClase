$(document).ready(function () {
  // Start your code from here
  let temas = [
    "metroid",
    "videogames",
    "music",
    "programming",
    "pc master race",
    "xbox",
    "edm",
    "drums",
  ];

  const baseURL = "https://api.giphy.com/v1/gifs/search";

  const api_key = "NhTWgOcYM8Olcwx7gCfNTId6Gj0WNidH";

  const addButton = (tema) => {
    $("#animal-buttons").append(
      $(buttonElement(tema)).on("click", () => {
        $.ajax({
          url: baseURL,
          data: {
            api_key,
            q: tema,
            rating: "r",
            offset: 0,
            limit: 10,
          },
          success: (data) => {
            $("#animals").empty();
            for (const gif of data.data) {
              $("#animals").append(
                $(
                  GIFElement(
                    gif.rating,
                    gif.images.fixed_height.url,
                    gif.images.fixed_height_still.url
                  )
                ).on("click", "img", (e) => {
                  let img = $(e.target);
                  let isMoving = img.attr("data-is-moving") === "true";
                  if (isMoving) {
                    img.attr("src", img.attr("data-still-uri"));
                    img.attr("data-is-moving", "false");
                  } else {
                    img.attr("src", img.attr("data-move-uri"));
                    img.attr("data-is-moving", "true");
                  }
                })
              );
            }
          },
          error: (err) => {
            console.error("error occured while fetching: ", tema, err);
          },
        });
      })
    );
  };

  const addTopic = (e) => {
    e.preventDefault();
    addButton($("#animal-input").val());
  };

  $("#animal-form").on("submit", addTopic);

  const buttonElement = (name) => {
    return `<button> ${name} </button>`;
  };

  const GIFElement = (rating, move, still) => {
    return `<div class="animal-item">
    <p>${rating} </p>
    <img src="${still} alt="some gif" data-still-uri=${still} data-move-uri=${move} data-is-moving=false /> </div> `;
  };

  for (const tema of temas) {
    addButton(tema);
  }
});
