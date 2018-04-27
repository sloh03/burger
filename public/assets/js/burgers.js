$(function() {
        
    // Display new burger on submit
    $(".create-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
            devoured: false
        };
        $('#burger-input').val('');
        console.log(newBurger);

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    
    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("Updated burger status");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});