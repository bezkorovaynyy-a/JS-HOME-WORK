let ii; // індексна змінна для циклів

/* ----- WpkK0ZH1 ----- */

let arrOutNumber = [];
for (ii = 0; ii <= 4; ii++) {
    arrOutNumber[ii] = ii;
}
console.log(arrOutNumber);

let arrOutString = [];
for (ii = 0; ii <= 4; ii++) {
    arrOutString[ii] = `${ii}`;
}
console.log(arrOutString);

let arrOutMix = [];
for (ii = 1; ii <= 5; ii++) {
    if (ii % 4 === 0) {
        arrOutMix[ii - 1] = false;
    } else if (ii % 3 === 0) {
        arrOutMix[ii - 1] = `${ii}`;
    } else if (ii % 2 === 0) {
        arrOutMix[ii - 1] = true;
    } else {
        arrOutMix[ii - 1] = ii;
    }
}
console.log(arrOutMix);

/* ----- END WpkK0ZH1 ----- */


/* ----- 4aDbSgh ----- */

let arrOut = [];
arrOut[0] = 0;
arrOut[1] = 'one';
arrOut[2] = true;
arrOut[3] = 3;
arrOut[4] = 'false';
console.log(arrOut);

/* ----- END 4aDbSgh ----- */


/* ----- qLQLJSeN7i ----- */

let arrIn = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
ii = 0;
while (ii < arrIn.length) {
    console.log(`${ii} = ${arrIn[ii]}`);
    ii++;
}
console.log(``);
for (ii = 0; ii < arrIn.length; ii++) {
    console.log(`${ii} = ${arrIn[ii]}`);
}
console.log(``);
ii = 0;
while (ii < arrIn.length) {
    if (ii % 2 !== 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
    ii++;
}
console.log(``);
for (ii = 0; ii < arrIn.length; ii++) {
    if (ii % 2 !== 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
}
console.log(``);
ii = 0;
while (ii < arrIn.length) {
    if (arrIn[ii] % 2 === 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
    ii++;
}
console.log(``);
for (ii = 0; ii < arrIn.length; ii++) {
    if (arrIn[ii] % 2 === 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
}
console.log(``);
for (ii = 0; ii < arrIn.length; ii++) {
    if (arrIn[ii] % 3 === 0) {
        arrIn[ii] = 'okten';
    }
}
console.log(arrIn);
console.log(``);
for (ii = (arrIn.length - 1); ii >= 0; ii--) {
    console.log(`${ii} = ${arrIn[ii]}`);
}
console.log(``);

/* reverse */
console.log(`reverse`);
console.log(``);
arrIn = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

ii = arrIn.length - 1;
while (ii >= 0) {
    console.log(`${ii} = ${arrIn[ii]}`);
    ii--;
}
console.log(``);
for (ii = (arrIn.length - 1); ii >= 0; ii--) {
    console.log(`${ii} = ${arrIn[ii]}`);
}
console.log(``);
ii = arrIn.length - 1;
while (ii >= 0) {
    if (ii % 2 !== 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
    ii--;
}
console.log(``);
for (ii = (arrIn.length - 1); ii >= 0; ii--) {
    if (ii % 2 !== 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
}
console.log(``);
ii = arrIn.length - 1;
while (ii >= 0) {
    if (arrIn[ii] % 2 === 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
    ii--;
}
console.log(``);
for (ii = (arrIn.length - 1); ii >= 0; ii--) {
    if (arrIn[ii] % 2 === 0) {
        console.log(`${ii} = ${arrIn[ii]}`);
    }
}
console.log(``);
for (ii = (arrIn.length - 1); ii >= 0; ii--) {
    if (arrIn[ii] % 3 === 0) {
        arrIn[ii] = 'okten';
    }
}
console.log(arrIn);

/* ----- END qLQLJSeN7i ----- */


/* ----- yHAwJOyiC ----- */

arrOut = [];
counterIteration = 10;
for (ii = 0; ii < counterIteration; ii++) {
    arrOut[ii] = ii;
    console.log(arrOut[ii]);
}

/* ----- END yHAwJOyiC ----- */


/* ----- GamKju89ob ----- */

arrOut = [];
counterIteration = 10;
for (ii = 0; ii < counterIteration; ii++) {
    arrOut[ii] = `i${ii}`;
    console.log(arrOut[ii]);
}

/* ----- END GamKju89ob ----- */


/* ----- Bm76xmg ----- */

arrOut = [];
counterIteration = 9;
for (ii = 0; ii <= counterIteration; ii++) {
    if (ii % 4 === 0) {
        arrOut[ii] = false;
    } else if (ii % 3 === 0) {
        arrOut[ii] = `i-${ii}`;
    } else if (ii % 2 === 0) {
        arrOut[ii] = true;
    } else {
        arrOut[ii] = ii;
    }
    console.log(arrOut[ii]);
}
console.log(arrOut);

/* ----- END Bm76xmg ----- */


/* ----- u3vmD0YJXh ----- */

for (ii = 0; ii < arrOut.length; ii++) {
    if (typeof arrOut[ii] === "boolean") {
        console.log(arrOut[ii]);
    }
}

/* ----- END u3vmD0YJXh ----- */


/* ----- 9stMq2ou ----- */

for (ii = 0; ii < arrOut.length; ii++) {
    if (typeof arrOut[ii] === "number") {
        console.log(arrOut[ii]);
    }
}

/* ----- END 9stMq2ou ----- */


/* ----- mK4pmM4 ----- */

for (ii = 0; ii < arrOut.length; ii++) {
    if (typeof arrOut[ii] === "string") {
        console.log(arrOut[ii]);
    }
}

/* ----- END mK4pmM4 ----- */