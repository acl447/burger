// Make sure I wait to attach handlers until the DOM is fully loaded.
$(function () {

    $(".changeDevour").on("click", function (event) {


        let id = $(this).data("id");

        let newDevour = $(this).data("newdevour");

        let newDevourState = {

            devoured: newDevour
        };

        //Send the PUT request

        $.ajax("/api/burgers" + id, {

            type: "PUT",
            data: newDevourState
        }).then(
            function () {

                console.log("changed devoured to", newDevour);
                //Reload the page to get the updated list
                location.reload();
            }

        );
    });


    $("#submit").on("click", function (event) {

        event.preventDefault();

        let newBurger = {

            name: ("#burgerInput").val().trim()
        };

        //Send the POST request.
        $.ajax("/api/burgers", {

            type: "POST",
            data: newBurger

        })
            .then(
                function () {

                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }



            )


    })
});