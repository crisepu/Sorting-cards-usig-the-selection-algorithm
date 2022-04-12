let buttonDraw = document.querySelector("#buttonDraw");
let buttonSort = document.querySelector("#buttonSort");
let inputNumber = document.querySelector("#inputNumber");
let numberCardsArray = [];
let onlyNumber = [];
let symbolCardsArray = [];


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

        }
    } else {
        alert("Debe ingresar un número entre 1 y 10");
    }

});




buttonSort.addEventListener('click', (e) => {
    let sortedDiv = document.querySelector("#sortedCards");
    let counter = 0;

    for (let k=0;k<numberCardsArray.length; k++) {
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

    for (let i = 0; i < onlyNumber.length; i++) {
        for(let j=0; j<onlyNumber.length-1;j++){
      
        if (onlyNumber[j] > onlyNumber[j + 1]) {
            let aux1 = numberCardsArray[j + 1];
            numberCardsArray[j + 1] = numberCardsArray[j];
            numberCardsArray[j] = aux1;

            let aux2 = symbolCardsArray[j + 1];
            symbolCardsArray[j + 1] = symbolCardsArray[j];
            symbolCardsArray[j] = aux2;

            let aux3 = onlyNumber[j + 1];
            onlyNumber[j + 1] = onlyNumber[j];
            onlyNumber[j] = aux3;

            let iter = document.createElement("h1");
            iter.innerHTML = counter;
            sortedDiv.appendChild(iter);
            counter = counter +1;

            for (let z = 0; z < numberCardsArray.length; z++) {
                

                let divCard = document.createElement("div");
                divCard.classList.add("card");
                let divTop = document.createElement("div");
                divCard.appendChild(divTop);
                let divCenter = document.createElement("div");
                divCard.appendChild(divCenter);
                let divButtom = document.createElement("div");
                divCard.appendChild(divButtom);

                divCenter.classList.add("center");
                divCenter.innerHTML = numberCardsArray[z];

                if (symbolCardsArray[z] == "♠" || symbolCardsArray[z] == "♣") {
                    divTop.classList.add("blackSymbol")
                    divTop.classList.add("top")
                    divButtom.classList.add("blackSymbol")
                    divButtom.classList.add("buttom")
                    divTop.innerHTML = symbolCardsArray[z];
                    divButtom.innerHTML = symbolCardsArray[z];
                }
                if (symbolCardsArray[z] == "♥" || symbolCardsArray[z] == "♦") {
                    divTop.classList.add("redSymbol")
                    divTop.classList.add("top")
                    divButtom.classList.add("buttom")
                    divButtom.classList.add("redSymbol")
                    divTop.innerHTML = symbolCardsArray[z];
                    divButtom.innerHTML = symbolCardsArray[z];
                }
                sortedDiv.appendChild(divCard);

                





            }

            

        }


       }   }

});
