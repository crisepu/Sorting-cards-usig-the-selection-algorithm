let buttonDraw = document.querySelector("#buttonDraw");
let buttonSort = document.querySelector("#buttonSort");
let inputNumber = document.querySelector("#inputNumber");
let numberCardsArray = [];
let symbolCardsArray = [];
let cardsArray = [];


buttonDraw.addEventListener('click', (e) => {
    if (inputNumber.value >= 1 && inputNumber.value <= 10) {
        let symbolArray = ["♠", "♣", "♥", "♦"];
        let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        let unsortedDiv = document.querySelector("#unsortedCards");

        for (let i = 0; i < inputNumber.value; i++) {
            let randomNumber = Math.floor((Math.random() * (12 - 0 + 1)) + 0);
            let randomSymbol = Math.floor((Math.random() * (3 - 0 + 1)) + 0);
            numberCardsArray[i] = numberArray[randomNumber];
            symbolCardsArray[i] = symbolArray[randomSymbol];

            let divCard = document.createElement("div");
            divCard.classList.add("card");
            let divTop = document.createElement("div");
            divCard.appendChild(divTop);
            let divCenter = document.createElement("div");
            divCard.appendChild(divCenter);
            let divButtom = document.createElement("div");
            divCard.appendChild(divButtom);

            divCenter.classList.add("center");
            divCenter.innerHTML = numberCardsArray[i];

            if (symbolCardsArray[i] == "♠" || symbolCardsArray[i] == "♣") {
                divTop.classList.add("blackSymbol")
                divTop.classList.add("top")
                divButtom.classList.add("blackSymbol")
                divButtom.classList.add("buttom")
                divTop.innerHTML = symbolCardsArray[i];
                divButtom.innerHTML = symbolCardsArray[i];
            }
            if (symbolCardsArray[i] == "♥" || symbolCardsArray[i] == "♦") {
                divTop.classList.add("redSymbol")
                divTop.classList.add("top")
                divButtom.classList.add("buttom")
                divButtom.classList.add("redSymbol")
                divTop.innerHTML = symbolCardsArray[i];
                divButtom.innerHTML = symbolCardsArray[i];
            }
            unsortedDiv.appendChild(divCard);
            cardsArray[i] = divCard;
        }
    } else {
        alert("Debe ingresar un número entre 1 y 10");
    }

});

buttonSort.addEventListener('click', (e) => {
    let sortedDiv = document.querySelector("#sortedCards");
    let counter = 0;



    for (let i = 0; i < numberCardsArray.length - 2; i++) {
        if (numberCardsArray[i] == "J") {
            numberCardsArray[i] = 11;
        }
        if (numberCardsArray[i] == "Q") {
            numberCardsArray[i] = 12;
        }
        if (numberCardsArray[i] == "K") {
            numberCardsArray[i] = 13;
        }
        if (numberCardsArray[i] == "A") {
            numberCardsArray[i] = 14;
        }

        if (numberCardsArray[i] > numberCardsArray[i + 1]) {
            let aux1 = numberCardsArray[i + 1];
            numberCardsArray[i + 1] = numberCardsArray[i];
            numberCardsArray[i] = aux1;

            let aux2 = cardsArray[i + 1];
            cardsArray[i + 1] = cardsArray[i];
            cardsArray[i] = aux2;

            let iter = document.createElement("h1");
            iter.innerHTML = counter;
            sortedDiv.appendChild(iter);

            counter++;





        }





    }

});
