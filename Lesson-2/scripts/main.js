/* ----- 67kfznmiMl ----- */

let arr = [
    -20.5,
    -10
    - 5,
    0,
    '',
    null,
    'asd',
    'qwe',
    3.14,
    456
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

/* ----- END 67kfznmiMl ----- */



/* ----- LARqoUj5I ----- */

let arrBookOne = {
    title: 'Book One',
    pageCount: '11',
    genre: 'History'
}
let arrBookTwo = {
    title: 'Book Two',
    pageCount: '22',
    genre: 'Melodrama'
}
let arrBookThree = {
    title: 'Book Three',
    pageCount: '33',
    genre: 'Comedy'
}

/* ----- END LARqoUj5I ----- */



/* ----- sA3Gg1sCp ----- */

arrBookOne.authors = [
    {
        name: 'Author One One',
        age: '12'
    }
    ,
    {
        name: 'Author One Two',
        age: '23'
    }
]
arrBookTwo.authors = [
    {
        name: 'Author Two One',
        age: '34'
    },
    {
        name: 'Author Two Two',
        age: '45'
    }
]
arrBookThree.authors = [
    {
        name: 'Author Three One',
        age: '56'
    },
    {
        name: 'Author Three Two',
        age: '65'
    }
]

/* ----- END sA3Gg1sCp ----- */



/* ----- jCHFnEbdmFd ----- */

let users = [
    {
        name: 'Name 1',
        username: 'User Name 1',
        password: 'password_1'
    },
    {
        name: 'Name 2',
        username: 'User Name 2',
        password: 'password_2'
    },
    {
        name: 'Name 3',
        username: 'User Name 3',
        password: 'password_3'
    },
    {
        name: 'Name 4',
        username: 'User Name 4',
        password: 'password_4'
    },
    {
        name: 'Name 5',
        username: 'User Name 5',
        password: 'password_5'
    },
    {
        name: 'Name 6',
        username: 'User Name 6',
        password: 'password_6'
    },
    {
        name: 'Name 7',
        username: 'User Name 7',
        password: 'password_7'
    },
    {
        name: 'Name 8',
        username: 'User Name 8',
        password: 'password_8'
    },
    {
        name: 'Name 9',
        username: 'User Name 9',
        password: 'password_9'
    },
    {
        name: 'Name 10',
        username: 'User Name 10',
        password: 'password_10'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

/* ----- END jCHFnEbdmFd ----- */



/* ----- coYydZuaeEB ----- */

let arrDayTemperature = {
    morning: [
        6,
        0,
        1,
        2,
        3,
        4,
        5
    ],
    day: [
        16,
        10,
        11,
        12,
        13,
        14,
        15
    ],
    evening: [
        11,
        5,
        6,
        7,
        8,
        9,
        10
    ]
}
let arrWeekTemperature = [
    {
        morning: 6,
        day: 16,
        evening: 11
    },
    {
        morning: 0,
        day: 10,
        evening: 5
    },
    {
        morning: 1,
        day: 11,
        evening: 6
    },
    {
        morning: 2,
        day: 12,
        evening: 7
    },
    {
        morning: 3,
        day: 13,
        evening: 8
    },
    {
        morning: 4,
        day: 14,
        evening: 9
    },
    {
        morning: 5,
        day: 15,
        evening: 10
    }
]
console.log(arrDayTemperature); // додано, щоб не писало що не використана змінна
console.log(arrWeekTemperature); // додано, щоб не писало що не використана змінна

/* ----- END coYydZuaeEB ----- */



/* ----- bAUsaq6LI ----- */

let x = 5;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
x = 1;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
x = 0;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
x = -3;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}

/* ----- END bAUsaq6LI ----- */



/* ----- 3ckURgvs ----- */

let time = 13;
if (time <= 0 || time > 59){
    console.log(`Хвилини вказано не вірно`);
}
else if (time > 0 && time < 15) {
    console.log('Перша чверть години');
}
else if (time >= 15 && time < 30) {
    console.log('Друга чверть години');
}
else if (time >= 30 && time < 45) {
    console.log('Третя чверть години');
}
else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть години');
}

/* ----- END 3ckURgvs ----- */



/* ----- UMoNq4biWGe ----- */

let day = 13;
if (day < 1 || day > 31) {
    console.log(`День місяця вказано не вірно`);
}
else if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
}
else if (day > 10 && day <= 20) {
    console.log('Друга декада місяця');
}
else if (day > 20 && day <= 31) {
    console.log('Третя декада місяця');
}

/* ----- END UMoNq4biWGe ----- */



/* ----- KzrtqyQ ----- */

let dayWeek = '5';
// dayWeek = prompt('Введіть порядковий номер дня в тижні');
switch (dayWeek) {
    case '1':
        console.log('В понеділок у вас Monday');
        break;
    case '2':
        console.log('У вівторок у вас Tuesday');
        break;
    case '3':
        console.log('В середу у вас Wednesday');
        break;
    case '4':
        console.log('В четвер у вас Thursday');
        break;
    case '5':
        console.log(`У п'ятницю у вас Friday`);
        break;
    case '6':
        console.log('В суботу у вас Saturday');
        break;
    case '7':
        console.log('У неділю у вас Sunday');
        break;
}

/* ----- END KzrtqyQ ----- */



/* ----- uwsz1RnTQJ1 ----- */

let numberFirst = 5;
let numberSecond = 13;
// numberFirst = prompt('Введіть перше число');
// numberSecond = prompt('Введіть друге число');
if (numberFirst === numberSecond) {
    console.log('Введені числа дорівнюють одне одному');
}
else if (numberFirst > numberSecond) {
    console.log('Перше число більше за друге');
}
else if (numberFirst < numberSecond) {
    console.log('Перше число менше за друге');
}

/* ----- END uwsz1RnTQJ1 ----- */



/* ----- iBvqtjEm ----- */

x = 'null'; // '13' 13 0 undefined null 'undefined' 'null' 'false'
if (!x || x === 'undefined' || x === 'null' || x === 'false') {
    x = 'default';
    console.log(x);
}
else {
    console.log('good');
}

/* ----- END iBvqtjEm ----- */



/* ----- awLXL6TBzg ----- */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let minMonthNeed = 5;
if (coursesAndDurationArray[0].monthDuration > minMonthNeed) {
    console.log(`${coursesAndDurationArray[0].title} - Супер`);
}
if (coursesAndDurationArray[1].monthDuration > minMonthNeed) {
    console.log(`${coursesAndDurationArray[1].title} - Супер`);
}
if (coursesAndDurationArray[2].monthDuration > minMonthNeed) {
    console.log(`${coursesAndDurationArray[2].title} - Супер`);
}
if (coursesAndDurationArray[0].monthDuration > minMonthNeed) {
    console.log(`${coursesAndDurationArray[3].title} - Супер`);
}
if (coursesAndDurationArray[4].monthDuration > minMonthNeed) {
    console.log(`${coursesAndDurationArray[4].title} - Супер`);
}
if (coursesAndDurationArray[5].monthDuration > minMonthNeed) {
    console.log(`${coursesAndDurationArray[5].title} - Супер`);
}

/* ----- END awLXL6TBzg ----- */