// BUTTON EVENTS
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
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    
    // Update burger status to devoured
    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        var newBurgerStatus = {
            devoured: true
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});