const PI = 3.14;
let sideA;
let sideB;
let r; // радіус
let h; // висота
let s; // площа
let arrElements = []; // масив елементів
let txt; // довільний текст

/* ----- I2XsG6f ----- */


function squareRectangle(sideA, sideB) {
    return (sideA * sideB);
}

sideA = 10;
sideB = 20;
s = squareRectangle(sideA, sideB);
console.log(s);

/* ----- END I2XsG6f ----- */


/* ----- ETGAxbEn8l ----- */

function squareCircle(r) {
    return (PI * (r * r));
}

r = 10;
s = squareCircle(r);
console.log(s);

/* ----- END ETGAxbEn8l ----- */


/* ----- Mbiz5K4yFe7 ----- */

function squareCylinder(r, h) {
    return (2 * PI * r * (r + h));
}

r = 10;
h = 20;
s = squareCylinder(r, h);
console.log(s);

/* ----- END Mbiz5K4yFe7 ----- */


/* ----- SIdMd0hQ ----- */

function arrayPrint(arrElements) {
    for (const arrElement of arrElements) {
        console.log(arrElement);
    }
}

for (i = 0; i < 10; i++) {
    arrElements[i] = `SIdMd0hQ-${i}`;
}
arrayPrint(arrElements);

/* ----- END SIdMd0hQ ----- */


/* ----- 59g0IsA ----- */

function documentPrintParagraf(txt) {
    document.write(`<div class="test-div">
        <p>${txt}</p>
    </div>`);
}

txt = '59g0IsA';
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

txt = 'hOL6126';
documentPrintUl(txt);

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

txt = '0Kxco1edSN';
let iterator = 3;
documentPrintUlIterator(txt, iterator);

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
        tempVar = `gEFoxMMO-${i}`;
    } else {
        tempVar = true;
    }
    arrElements[i] = tempVar;
}
documentArrayPrint(arrElements);

/* ----- END gEFoxMMO ----- */


/* ----- bovDJDTIjt ----- */

function documentPrintObj(obj) {
    for (const objKey in obj) {
        let objElement = obj[objKey];
        document.write(`<div class="test-div">id = ${objElement.id}, name = ${objElement.name}, age = ${objElement.age}</div>`);
    }
}

users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30}
];
documentPrintObj(users);

/* ----- END bovDJDTIjt ----- */


/* ----- pghbnSB ----- */

let minNumber;

function returnMinNumber(arrElements) {
    for (i = 0; i < arrElements.length; i++) {
        if (i === 0) {
            minNumber = arrElements[i];
        } else if (arrElements[i] < minNumber) {
            minNumber = arrElements[i];
        }
    }
    return minNumber;
}

arrElements = [];
arrElements[0] = 333;
arrElements[1] = 555;
arrElements[2] = 222;
arrElements[3] = 111;
arrElements[4] = 222;
res = returnMinNumber(arrElements);
console.log(res);

/* ----- END pghbnSB ----- */


/* ----- EKRNVPM ----- */

let sum = 0;

function sumArrValues(arrElements) {
    for (i = 0; i < arrElements.length; i++) {
        sum += arrElements[i];
    }
    return sum;
}

arrElements = [];
arrElements[0] = 1;
arrElements[1] = 2;
arrElements[2] = 10;
res = sumArrValues(arrElements);
console.log(res);

/* ----- END EKRNVPM ----- */


/* ----- kpsbSQCt2Lf ----- */

let tempValue;

function swap(arrElements, ind1, ind2) {
    for (i = 0; i < arrElements.length; i++) {
        if (i === ind2) {
            tempValue = arrElements[ind2];
            arrElements[ind2] = arrElements[ind1];
            arrElements[ind1] = tempValue;
        }
    }
    return arrElements;
}

arrElements = [];
arrElements[0] = 11;
arrElements[1] = 22;
arrElements[2] = 33;
arrElements[3] = 44;
let ind1 = 0;
let ind2 = 1;
console.log(arrElements);
res = swap(arrElements, ind1, ind2);
console.log(res);

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
let currencyValues = {};
let exchangeCurrency = 'USD';
currencyValues[0] = {
    currency: 'USD',
    value: 25
};
currencyValues[1] = {
    currency: 'EUR',
    value: 42
};
console.log(currencyValues);
res = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(res);

/* ----- END mkGDenYnNjn ----- */