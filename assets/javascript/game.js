// Javascript for Crystals Game


$(document).ready(function() {

    // declare global variables and set initial wins and losses
    var targetValue;
    var playerTotal;
    var crystalValue = [];
    var wins = 0;
    var losses = 0;
          
    // overall function to control game
    function playGame() {

        // initial values for variables
        crystalValue =[0,0,0,0];
        targetValue = 0;
        playerTotal = 0;

        // write wins and losses onto page
        document.querySelector("#player-wins").innerHTML = wins;
        document.querySelector("#player-losses").innerHTML = losses;

        // function playAgain is called at the end of a game and resets variables and resets values displayed on the page
        function playAgain() {
            playerTotal = 0;
            document.querySelector("#player-total").innerHTML = playerTotal;
            targetValueGenerator();
            document.querySelector("#target-number").innerHTML = targetValue;
            crystalValueGenerator();            
        }        

        // function targetValueGenerator generates a random number between 19 and 120 as a target for the player
        function targetValueGenerator() {
            for (var i = 1; i <= 10; i++) {
                targetValue = Math.floor(Math.random() * 120) + 1;                     
                if (targetValue >= 19) {
                    i = 11;
                }
            } 
        }
        // calls the function to generate target value and displays that value on screen
        targetValueGenerator();        
        document.querySelector("#target-number").innerHTML = targetValue;

        // function crystalValueGenerator generates random values between 1 and 12 for each "crystal" 
        function crystalValueGenerator() {
            for (var j =0; j <= 3; j++) {
                crystalValue[j] = Math.floor(Math.random() * 12) + 1;
            }
        }
        // calls the function to generate "crystal" values
        crystalValueGenerator();
        
        // This function checks to see if the user has won or lost the game with the most current click
        // It also increments the wins or losses variables and updates the screen display of those variables, as appropriate
        // finally, it alerts the win or loss and then calls the playAgain function (see above) 
        function gameLogic() {
            document.querySelector("#player-total").innerHTML = playerTotal;
            if (playerTotal === targetValue) {
                wins++;                
                document.querySelector("#player-wins").innerHTML = wins;
                playerTotal = 0;
                alert("Congratulations, you won!");
                playAgain();
            } 
                else if (playerTotal > targetValue) {
                losses++;                
                document.querySelector("#player-losses").innerHTML = losses;
                playerTotal = 0;
                alert("Sorry, you lost.");
                playAgain();
            }
        }
        
        // makes initial display of player running total (as 0) 
        document.querySelector("#player-total").innerHTML = playerTotal;

        // on click event updates player's running total and calls the gameLogic function
        $("body").on("click", "#c-1", function() {                       
            playerTotal = playerTotal + crystalValue[0];            
            gameLogic();
        }).on("click", "#c-2", function() {            
            playerTotal = playerTotal + crystalValue[1];            
            gameLogic();
        }).on("click", "#c-3", function() {             
            playerTotal = playerTotal + crystalValue[2];            
            gameLogic();
        }).on("click", "#c-4", function() { 
            playerTotal = playerTotal + crystalValue[3];            
            gameLogic();
        });        

    }
    // initializes first game
     playGame();

});





