let i;// індексна змінна для циклів
let counterIteration;// змінна для кількості ітерацій циклів

/* ----- WpkK0ZH1 ----- */

counterIteration = 4;
let arrOutNumber = [];
for (i = 0; i <= counterIteration; i++) {
    arrOutNumber[i] = i;
}
console.log(arrOutNumber);

counterIteration = 4;
let arrOutString = [];
for (i = 0; i <= counterIteration; i++) {
    arrOutString[i] = `${i}`;
}
console.log(arrOutString);

counterIteration = 5;
let arrOutMix = [];
for (i = 1; i <= counterIteration; i++) {
    if (i % 4 === 0) {
        arrOutMix[i - 1] = false;
    } else if (i % 3 === 0) {
        arrOutMix[i - 1] = `${i}`;
    } else if (i % 2 === 0) {
        arrOutMix[i - 1] = true;
    } else {
        arrOutMix[i - 1] = i;
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
i = 0;
while (i < arrIn.length) {
    console.log(`${i} = ${arrIn[i]}`);
    i++;
}
console.log(``);
for (i = 0; i < arrIn.length; i++) {
    console.log(`${i} = ${arrIn[i]}`);
}
console.log(``);
i = 0;
while (i < arrIn.length) {
    if (i % 2 !== 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
    i++;
}
console.log(``);
for (i = 0; i < arrIn.length; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
}
console.log(``);
i = 0;
while (i < arrIn.length) {
    if (arrIn[i] % 2 === 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
    i++;
}
console.log(``);
for (i = 0; i < arrIn.length; i++) {
    if (arrIn[i] % 2 === 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
}
console.log(``);
for (i = 0; i < arrIn.length; i++) {
    if (arrIn[i] % 3 === 0) {
        arrIn[i] = 'okten';
    }
}
console.log(arrIn);
console.log(``);
for (i = (arrIn.length - 1); i >= 0; i--) {
    console.log(`${i} = ${arrIn[i]}`);
}
console.log(``);

/* reverse */
console.log(`reverse`);
console.log(``);
arrIn = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

i = arrIn.length - 1;
while (i >= 0) {
    console.log(`${i} = ${arrIn[i]}`);
    i--;
}
console.log(``);
for (i = (arrIn.length - 1); i >= 0; i--) {
    console.log(`${i} = ${arrIn[i]}`);
}
console.log(``);
i = arrIn.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
    i--;
}
console.log(``);
for (i = (arrIn.length - 1); i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
}
console.log(``);
i = arrIn.length - 1;
while (i >= 0) {
    if (arrIn[i] % 2 === 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
    i--;
}
console.log(``);
for (i = (arrIn.length - 1); i >= 0; i--) {
    if (arrIn[i] % 2 === 0) {
        console.log(`${i} = ${arrIn[i]}`);
    }
}
console.log(``);
for (i = (arrIn.length - 1); i >= 0; i--) {
    if (arrIn[i] % 3 === 0) {
        arrIn[i] = 'okten';
    }
}
console.log(arrIn);

/* ----- END qLQLJSeN7i ----- */


/* ----- yHAwJOyiC ----- */

arrOut = [];
counterIteration = 10;
for (i = 0; i < counterIteration; i++) {
    arrOut[i] = i;
    console.log(arrOut[i]);
}

/* ----- END yHAwJOyiC ----- */


/* ----- GamKju89ob ----- */

arrOut = [];
counterIteration = 10;
for (i = 0; i < counterIteration; i++) {
    arrOut[i] = `i${i}`;
    console.log(arrOut[i]);
}

/* ----- END GamKju89ob ----- */


/* ----- Bm76xmg ----- */

arrOut = [];
counterIteration = 9;
for (i = 0; i <= counterIteration; i++) {
    if (i % 4 === 0) {
        arrOut[i] = false;
    } else if (i % 3 === 0) {
        arrOut[i] = `i-${i}`;
    } else if (i % 2 === 0) {
        arrOut[i] = true;
    } else {
        arrOut[i] = i;
    }
    console.log(arrOut[i]);
}
console.log(arrOut);

/* ----- END Bm76xmg ----- */


/* ----- u3vmD0YJXh ----- */

for (i = 0; i < arrOut.length; i++) {
    if (typeof arrOut[i] === "boolean") {
        console.log(arrOut[i]);
    }
}

/* ----- END u3vmD0YJXh ----- */


/* ----- 9stMq2ou ----- */

for (i = 0; i < arrOut.length; i++) {
    if (typeof arrOut[i] === "number") {
        console.log(arrOut[i]);
    }
}

/* ----- END 9stMq2ou ----- */


/* ----- mK4pmM4 ----- */

for (i = 0; i < arrOut.length; i++) {
    if (typeof arrOut[i] === "string") {
        console.log(arrOut[i]);
    }
}

/* ----- END mK4pmM4 ----- */