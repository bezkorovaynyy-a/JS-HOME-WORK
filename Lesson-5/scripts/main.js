const PI = 3.14;
let sideA;
let sideB;
let r; // радіус
let h; // висота
let arrElements = []; // масив елементів
let txt; // довільний текст

/* ----- I2XsG6f ----- */

sideA = 10;
sideB = 20;

let squareRectangle = (sideA, sideB) => console.log(sideA * sideB)
squareRectangle(sideA, sideB);

/* ----- END I2XsG6f ----- */


/* ----- ETGAxbEn8l ----- */

r = 10;

let squareCircle = (r) => console.log((PI * (r * r)))
squareCircle(r);

/* ----- END ETGAxbEn8l ----- */


/* ----- Mbiz5K4yFe7 ----- */

r = 10;
h = 20;

let squareCylinder = (r, h) => console.log((2 * PI * r * (r + h)))
squareCylinder(r, h);

/* ----- END Mbiz5K4yFe7 ----- */


/* ----- SIdMd0hQ ----- */

function arrayPrint(arrElements) {
    for (const arrElement of arrElements) {
        console.log(arrElement);
    }
}
for (i = 0; i < 10; i++) {
    arrElements[i] = `Стрілочна функція-SIdMd0hQ-${i}`;
}

let arrowSquareCylinder = () => arrayPrint(arrElements)
arrowSquareCylinder();

/* ----- END SIdMd0hQ ----- */


/* ----- 59g0IsA ----- */

txt = 'Стрілочна функція-59g0IsA';

let documentPrintParagraf = (txt) => document.write(`<div class="test-div"><p>${txt}</p></div>`)
documentPrintParagraf(txt);

/* ----- END 59g0IsA ----- */


/* ----- hOL6126 ----- */

function documentPrintUl(txt) {
    document.write(`<div class="test-div"><ul>`);
    for (i = 0; i < 3; i++) {
        document.write(`
            <li>${txt}</li>
        `);
    }
    document.write(`</ul></div>`);
}
txt = 'Стрілочна функція-hOL6126';

let arrowDocumentPrintUl = () => documentPrintUl(txt)
arrowDocumentPrintUl();

/* ----- END hOL6126 ----- */


/* ----- 0Kxco1edSN ----- */

function documentPrintUlIterator(txt, iterator) {
    document.write(`<div class="test-div"><ul>`);
    for (i = 0; i < iterator; i++) {
        document.write(`
            <li>${txt}</li>
        `);
    }
    document.write(`</ul></div>`);
}
txt = 'Стрілочна функція-0Kxco1edSN';
let iterator = 3;

let arrowDocumentPrintUlIterator = () => documentPrintUlIterator(txt, iterator)
arrowDocumentPrintUlIterator();

/* ----- END 0Kxco1edSN ----- */


/* ----- gEFoxMMO ----- */

function documentArrayPrint(arrElements) {
    document.write(`<div class="test-div"><ul>`);
    for (let arrElement of arrElements) {
        document.write(`
            <li>${arrElement}</li>
        `);
    }
    document.write(`</ul></div>`);
}
let tempVar;
for (i = 0; i < 9; i++) {
    if (i % 3) {
        tempVar = i;
    } else if (i % 2) {
        tempVar = `Стрілочна функція-gEFoxMMO-${i}`;
    } else {
        tempVar = true;
    }
    arrElements[i] = tempVar;
}

let arrowDocumentArrayPrint = () => documentArrayPrint(arrElements)
arrowDocumentArrayPrint();

/* ----- END gEFoxMMO ----- */


/* ----- bovDJDTIjt ----- */

function documentPrintObj(obj) {
    for (const objKey in obj) {
        let objElement = obj[objKey];
        document.write(`<div class="test-div">Стрілочна функція: id = ${objElement.id}, name = ${objElement.name}, age = ${objElement.age}</div>`);
    }
}
users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30}
];

let arrowDocumentPrintObj = () => documentPrintObj(users)
arrowDocumentPrintObj();

/* ----- END bovDJDTIjt ----- */


/* ----- pghbnSB ----- */

function returnMinNumber(arrElementsNum) {
    for (i = 0; i < arrElementsNum.length; i++) {
        if (i === 0) {
            minNumber = arrElementsNum[i];
        } else if (arrElementsNum[i] < minNumber) {
            minNumber = arrElementsNum[i];
        }
    }
    return minNumber;
}
let minNumber;
let arrElementsNum = [];
arrElementsNum[0] = 333;
arrElementsNum[1] = 555;
arrElementsNum[2] = 222;
arrElementsNum[3] = 111;
arrElementsNum[4] = 222;

let arrowReturnMinNumber = () => returnMinNumber(arrElements)
console.log(arrowReturnMinNumber());

/* ----- END pghbnSB ----- */


/* ----- EKRNVPM ----- */

function sumArrValues(arrElements) {
    for (i = 0; i < arrElements.length; i++) {
        sum += arrElements[i];
    }
    return sum;
}
let sum = 0;
arrElements = [];
arrElements[0] = 1;
arrElements[1] = 2;
arrElements[2] = 10;

let arrowSumArrValues = () => sumArrValues(arrElements)
console.log(arrowSumArrValues());

/* ----- END EKRNVPM ----- */


/* ----- kpsbSQCt2Lf ----- */

let resOne;
let resTwo;
function swap(arrElements, ind1, ind2) {
    resOne = arrElements[ind2];
    resTwo = arrElements[ind1];
    arrElements[ind2] = resTwo;
    arrElements[ind1] = resOne;
    return arrElements;
}
arrElements = [];
arrElements[0] = 11;
arrElements[1] = 22;
arrElements[2] = 33;
arrElements[3] = 44;
let ind1 = 2;
let ind2 = 0;
console.log(arrElements);

let arrowSwap = () => swap(arrElements, ind1, ind2)
console.log(arrowSwap());

/* ----- END kpsbSQCt2Lf ----- */


/* ----- mkGDenYnNjn ----- */

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let keyObj in currencyValues) {
        let elemCurrency = currencyValues[keyObj];
        if (elemCurrency.currency === exchangeCurrency) {
            return sumUAH / elemCurrency.value;
        }
    }
}
let sumUAH = 10000;
let currencyValues = [];
let exchangeCurrency = 'USD';
currencyValues[0] = {
    currency: 'USD',
    value: 40
};
currencyValues[1] = {
    currency: 'EUR',
    value: 42
};
console.log(currencyValues);

let arrowExchange = () => exchange(sumUAH, currencyValues, exchangeCurrency)
console.log(arrowExchange());

/* ----- END mkGDenYnNjn ----- */