$(document).ready(function(){

    $(".submit-btn").on("click", function(event){
        event.preventDefault();

        var answers = [];

        for(var i = 1; i <= 10; i++){
            answers.push( parseInt( $('#q' + i).val() ) );
        }

        $.ajax({
            type: "POST",
            url: "/api/friends",
            data: { scores: answers },
            success: function(response) {
              console.log(response)
              $(".modal-title").text("Result");
              $("#result-name").text(response.name);
              $("#result-img").attr("src", response.photo);
            }
        });

    });
});