$(document).ready(function() {
  //ScrollFunction
  $("li").click(function(event) {
    event.preventDefault();
    const section = $(this)
      .text()
      .toLowerCase();
    const info = $(this);

    $.scrollTo(document.getElementById(section), 800);
  });

  //Nav opener
  $(function() {
    $(".toggleNav").on("click", function() {
      $("nav ul").toggleClass("open");
    });
  });
});
