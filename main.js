let buttonDraw = document.querySelector("#buttonDraw");
let buttonSort = document.querySelector("#buttonSort");
let inputNumber = document.querySelector("#inputNumber");
let numberCardsArray = new Array();
let symbolCardsArray = new Array();

buttonDraw.addEventListener('click', (e) => {
    if (inputNumber.value >= 1 && inputNumber.value <= 10) {
        let symbolArray = ["♠", "♣", "♥", "♦"];
        let numberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let unsortedDiv = document.querySelector("#unsortedCards");
        
        for (let i=0; i<inputNumber.value; i++) {
            let randomNumber = Math.floor((Math.random() * (12 - 0 + 1)) + 0);
            let randomSymbol = Math.floor((Math.random() * (3 - 0 + 1)) + 0);
            numberCardsArray[i] = numberArray[randomNumber];
            symbolCardsArray[i] = symbolArray[randomSymbol];
          


        }




    } else {
        alert("Debe ingresar un número entre 1 y 10");
    }

});


