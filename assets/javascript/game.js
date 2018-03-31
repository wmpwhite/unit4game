// Javascript for Crystals Game


// generate random number for guess

$(document).ready(function() {

  

    function playGame() {

        var targetValue = 0;
        var crystalValue =[0,0,0,0];
        var playerTotal = 0;
        var wins = 0;
        var losses = 0;

        function targetValueGenerator() {
            for (var i = 1; i <= 10; i++) {
                targetValue = Math.floor(Math.random() * 120) + 1;
                console.log("targetValue = " + targetValue);     
                if (targetValue >= 19) {
                    i = 11;
                }
            } 
        }
        targetValueGenerator();
        console.log("targetValue = " + targetValue);

        document.querySelector("#target-number").innerHTML = targetValue;

        function crystalValueGenerator() {
            for (var j =0; j <= 3; j++) {
                crystalValue[j] = Math.floor(Math.random() * 12) + 1;
            }
        }

        crystalValueGenerator();
        console.log(crystalValue[0]);
        console.log(crystalValue[1]);
        console.log(crystalValue[2]);
        console.log(crystalValue[3]);





        $("body").on("click", "#c-1", function() {
            playerTotal = playerTotal + crystalValue[0];
        }).on("click", "#c-2", function() {
            playerTotal = playerTotal + crystalValue[1];
        }).on("click", "#c-3", function() {
            playerTotal = playerTotal + crystalValue[2];
        }).on("click", "#c-4", function() {
            playerTotal = playerTotal + crystalValue[3];
        });

        document.querySelector("#player-total").innerHTML = playerTotal;

        if (playerTotal === targetValue) {
            wins++;
            document.querySelector("#player-wins").innerHTML = wins;
            alert("Congratulations, you won!");
        } 
            else if (playerTotal > targetValue) {
            losses++;
            document.querySelector("#player-losses").innerHTML = losses;
            alert("Sorry, you lost.");
        }
    }

playGame();

});





