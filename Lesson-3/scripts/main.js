let i;
let counterIteration;

/* ----- y7crMeFwHcS ----- */

counterIteration = 10;
document.write(`<div class="d-flex">`);
for (i = 1; i <= counterIteration; i++) {
    document.write(`<div class="test-div">дів</div>`);
}
document.write(`</div>`);

/* ----- END y7crMeFwHcS ----- */



/* ----- TYj7ncx ----- */

counterIteration = 10;
document.write(`<div class="d-flex">`);
for (i = 1; i <= counterIteration; i++) {
    document.write(`<div class="test-div">дів-${i}</div>`);
}
document.write(`</div>`);

/* ----- END TYj7ncx ----- */



/* ----- uzkt71dp ----- */

i = 1;
counterIteration = 20;
document.write(`<div class="d-flex">`);
while (i <= counterIteration) {
    document.write(`<h1 class="test-div">h1</h1>`);
    i++;
}
document.write(`</div>`);

/* ----- END uzkt71dp ----- */



/* ----- OeT7t3uUMFi ----- */

i = 1;
counterIteration = 20;
document.write(`<div class="d-flex">`);
while (i <= counterIteration) {
    document.write(`<h1 class="test-div">h-${i}</h1>`);
    i++;
}
document.write(`</div>`);

/* ----- END OeT7t3uUMFi ----- */



/* ----- vLSZKMlO ----- */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);

/* ----- END vLSZKMlO ----- */



/* ----- Hdjws7E ----- */

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://kanctorg.kiev.ua/image/cache/catalog/lv.79648-800x800.png'
    },
];

document.write(`<div class="d-flex">`);
for (i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>
    `);
}
document.write(`</div>`);

/* ----- END Hdjws7E ----- */



/* ----- 4WrHwFTEop0 ----- */

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<div class="d-flex">`);
for (let user of users) {
    if (user.status) {
        document.write(`
            <div class="test-div green">
                ${user.name}
            </div>
        `);
    }
}
document.write(`</div>`);

document.write(`<div class="d-flex">`);
for (let user of users) {
    if (!user.status) {
        document.write(`
            <div class="test-div red">
                ${user.name}
            </div>
        `);
    }
}
document.write(`</div>`);

document.write(`<div class="d-flex">`);
for (let user of users) {
    if (user.age > 30) {
        document.write(`
            <div class="test-div blue">
                ${user.name}
            </div>
        `);
    }
}
document.write(`</div>`);

/* ----- END 4WrHwFTEop0 ----- */