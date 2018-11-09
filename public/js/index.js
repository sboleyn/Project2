$(document).ready(function () {
  $("#index-submit").on("click", function (e) {
      e.preventDefault();
      let username = $("#user-name").val().trim();
      $.post("/profile/" + username);
  });
});