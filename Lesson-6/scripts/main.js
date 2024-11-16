let someString;
let someArr;

/* ----- dFeorS3m7u ----- */

someString = 'hello world';
document.write(`dFeorS3m7u<div class="test-div">'${someString}' length = ${someString.length}</div>`);
someString = 'lorem ipsum';
document.write(`<div class="test-div">'${someString}' length = ${someString.length}</div>`);
someString = 'javascript is cool';
document.write(`<div class="test-div">'${someString}' length = ${someString.length}</div>`);

/* ----- END dFeorS3m7u ----- */


/* ----- 8lld9HMxXWB ----- */

someString = 'hello world';
document.write(`8lld9HMxXWB<div class="test-div">'${someString}' => '${someString.toUpperCase()}'</div>`);
someString = 'lorem ipsum';
document.write(`<div class="test-div">'${someString}' => '${someString.toUpperCase()}'</div>`);
someString = 'javascript is cool';
document.write(`<div class="test-div">'${someString}' => '${someString.toUpperCase()}'</div>`);

/* ----- END 8lld9HMxXWB ----- */


/* ----- ClDsAm7xba7 ----- */

someString = 'HELLO WORLD';
document.write(`ClDsAm7xba7<div class="test-div">'${someString}' => '${someString.toLowerCase()}'</div>`);
someString = 'LOREM IPSUM';
document.write(`<div class="test-div">'${someString}' => '${someString.toLowerCase()}'</div>`);
someString = 'JAVASCRIPT IS COOL';
document.write(`<div class="test-div">'${someString}' => '${someString.toLowerCase()}'</div>`);

/* ----- END ClDsAm7xba7 ----- */


/* ----- 0b89BkYZwu ----- */

someString = ' dirty string   ';
document.write(`0b89BkYZwu<div class="test-div">'${someString}' => '${someString.trim()}'</div>`);

/* ----- END 0b89BkYZwu ----- */


/* ----- bfoJuse4ZzP ----- */

someString = 'Ревуть воли як ясла повні';
console.log('bfoJuse4ZzP');
console.log(someString);
console.log(someString.split(' '));

/* ----- END bfoJuse4ZzP ----- */


/* ----- Rbr5kEQ ----- */

someArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log('Rbr5kEQ');
console.log(someArr);
console.log(someArr.map(a => `${a}`));

/* ----- END Rbr5kEQ ----- */


/* ----- 5hqyKTfmc ----- */

someArr = [11, 21, 3];
console.log('5hqyKTfmc');
console.log(someArr);

function sortNums(array, direction) {
    console.log(direction);
    if (direction === 'ascending') {
        console.log(array.sort((a, b) => a - b));
    } else if (direction === 'descending') {
        console.log(array.sort((a, b) => b - a));
    }
}

someString = 'ascending';
sortNums(someArr, someString);
someString = 'descending';
sortNums(someArr, someString);

/* ----- END 5hqyKTfmc ----- */


/* ----- yo06d74c1C ----- */

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log('yo06d74c1C');
const resultArray = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = ++index;
        return value;
    });
console.log(resultArray);

/* ----- END yo06d74c1C ----- */


/* ----- bolvdlhP ----- */

console.log('bolvdlhP');
const cardValues = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardSuits = ['diamond', 'heart', 'spade', 'club'];
const cardColors = ['red', 'black'];
const cards = [];
for (const value of cardValues) {
    for (const suit of cardSuits) {
        const card = {value: value, suit: suit};
        if (suit === 'diamond' || suit === 'heart') {
            card.color = cardColors[0];
        } else if (suit === 'spade' || suit === 'club') {
            card.color = cardColors[1];
        }
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(card => card.value === 'A' && card.suit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.suit === 'diamond'));
console.log(cards.filter(card => card.suit === 'club' && (card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9')));
// чи можна було б ось так скоротити код пошуку 'clubs' більше '9' ? Результат такий же отримуємо.
console.log(cards.filter(card => card.suit === 'club' && (Number(card.value) > 9 || isNaN(card.value))));

/* ----- END bolvdlhP ----- */


/* ----- EP5I1UUzAX ----- */

console.log('EP5I1UUzAX');
const reduce = cards.reduce((accum, card) => {
    switch (card.suit) {
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'spade':
            accum.spades.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);

/* ----- END EP5I1UUzAX ----- */


/* ----- 4LJn7zBx ----- */

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesSass = coursesArray.filter(course => {
    return course.modules.includes('sass');
});
console.log(coursesSass);

const coursesDockers = coursesArray.filter(course => {
    return course.modules.includes('docker');
});
console.log(coursesDockers);

// це тренувальний
const coursesSassDockers = coursesArray.reduce((accum, course) => {
    if (course.modules.includes('sass')) {
        accum.sasses.push(course);
    }
    if (course.modules.includes('docker')) {
        accum.dockers.push(course);
    }
    return accum;
}, {
    sasses: [],
    dockers: []
});
console.log(coursesSassDockers);

/* ----- END 4LJn7zBx ----- */