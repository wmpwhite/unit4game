// Javascript for Crystals Game


$(document).ready(function() {

    var targetValue;
    var playerTotal;
    var crystalValue = [];
    var wins = 0;
    var losses = 0;
          

    function playGame() {

        crystalValue =[0,0,0,0];
        targetValue = 0;
        playerTotal = 0;

        document.querySelector("#player-wins").innerHTML = wins;
        document.querySelector("#player-losses").innerHTML = losses;        

        function playAgain() {
            playerTotal = 0;
            document.querySelector("#player-total").innerHTML = playerTotal;
            targetValueGenerator();
            document.querySelector("#target-number").innerHTML = targetValue;
            crystalValueGenerator();            
        }        

        function targetValueGenerator() {
            for (var i = 1; i <= 10; i++) {
                targetValue = Math.floor(Math.random() * 120) + 1;                     
                if (targetValue >= 19) {
                    i = 11;
                }
            } 
        }

        targetValueGenerator();        
        document.querySelector("#target-number").innerHTML = targetValue;

        function crystalValueGenerator() {
            for (var j =0; j <= 3; j++) {
                crystalValue[j] = Math.floor(Math.random() * 12) + 1;
            }
        }

        crystalValueGenerator();
        
        
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
        
        document.querySelector("#player-total").innerHTML = playerTotal;


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

     playGame();

});





