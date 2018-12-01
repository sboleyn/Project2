$(document).ready(function () {
    $("#searchMoviesButton").on("click", function(e) {
        e.preventDefault();
        let movie_search = $("#searchBox").val().trim();
        $.post("/moviesearch", movie_search);
    });
    $("#searchFriendsButton").on("click", function(e) {
        e.preventDefault();
        let friend_search = $("#searchBox").val().trim();
        $.post("/friendsearch", friend_search);
    })
    /*
    $(".updateReviewButton").on("click", function(e) {
        e.preventDefault();
        var update_query = {
            id: $(this).data("id"),
            rating: $(this.data)
        }
        let id = $(this).data("id");
        
        $.ajax("/profile" + id, {
            type: "PUT",
            data: 
          }).then(        
        
    }); */
  });