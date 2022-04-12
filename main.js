let buttonDraw = document.querySelector("#buttonDraw");
let buttonSort = document.querySelector("#buttonSort");
let inputNumber = document.querySelector("#inputNumber");
let numberCardsArray = [];
let onlyNumber = [];
let symbolCardsArray = [];

function cardGenerator(number, symbol) {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let divTop = document.createElement("div");
    divCard.appendChild(divTop);
    let divCenter = document.createElement("div");
    divCard.appendChild(divCenter);
    let divButtom = document.createElement("div");
    divCard.appendChild(divButtom);

    divCenter.classList.add("center");
    divCenter.innerHTML = number;

    if (symbol == "♠" || symbol == "♣") {
        divTop.classList.add("blackSymbol")
        divTop.classList.add("top")
        divButtom.classList.add("blackSymbol")
        divButtom.classList.add("buttom")
        divTop.innerHTML = symbol;
        divButtom.innerHTML = symbol;
    }
    if (symbol == "♥" || symbol == "♦") {
        divTop.classList.add("redSymbol")
        divTop.classList.add("top")
        divButtom.classList.add("buttom")
        divButtom.classList.add("redSymbol")
        divTop.innerHTML = symbol;
        divButtom.innerHTML = symbol;
    }
    return divCard;

}

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

            let divCard = cardGenerator(numberCardsArray[i], symbolCardsArray[i]);
            unsortedDiv.appendChild(divCard);

        }
    } else {
        alert("Debe ingresar un número entre 1 y 10");
    }

});

buttonSort.addEventListener('click', (e) => {
    let sortedDiv = document.querySelector("#sortedCards");
    let counter = 0;

    //Reemplazo de letras por numeros
    for (let k = 0; k < numberCardsArray.length; k++) {
        onlyNumber[k] = numberCardsArray[k];
        if (numberCardsArray[k] == "J") {
            onlyNumber[k] = 11;
        }
        if (numberCardsArray[k] == "Q") {
            onlyNumber[k] = 12;
        }
        if (numberCardsArray[k] == "K") {
            onlyNumber[k] = 13;
        }
        if (numberCardsArray[k] == "A") {
            onlyNumber[k] = 1;
        }
    }

    // Ordenamiento por seleccion
    for (let i = 0; i < onlyNumber.length; i++) {
        let min = i;
        for (let j = i + 1; j < onlyNumber.length; j++) {
            if (onlyNumber[j] < onlyNumber[min]) {
                min = j;
            }
        }
        if (min != i) {
            let aux1 = numberCardsArray[i];
            numberCardsArray[i] = numberCardsArray[min];
            numberCardsArray[min] = aux1;

            let aux2 = symbolCardsArray[i];
            symbolCardsArray[i] = symbolCardsArray[min];
            symbolCardsArray[min] = aux2;

            let aux3 = onlyNumber[i];
            onlyNumber[i] = onlyNumber[min];
            onlyNumber[min] = aux3;

            let iter = document.createElement("h1");
            iter.innerHTML = counter;
            sortedDiv.appendChild(iter);
            counter++;

            for (let z = 0; z < numberCardsArray.length; z++) {

                let divCard = cardGenerator(numberCardsArray[z], symbolCardsArray[z]);
                sortedDiv.appendChild(divCard);

            }
        }
    }
});
