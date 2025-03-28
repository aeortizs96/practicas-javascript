const book = new Object({title: "1984", author: "George Orwell", isAvalible: false});

console.log(" \n ------------- ");
console.log(typeof book);
console.log(book);

const myBooks = [
    new Object({title: "1984", author: "George Orwell", isAvalible: false}),
    new Object({title: "1984", author: "George Orwell", isAvalible: false}),
    new Object({title: "1984", author: "George Orwell", isAvalible: false})
];

console.log(" \n ------------- ");
console.log(typeof myBooks);
console.log(myBooks);


console.log(" \n ------------- ");
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);


console.log(" \n ------------- ");
let bookJSON2 = JSON.stringify(myBooks);
console.log(typeof bookJSON);
console.log(bookJSON2);


//let dataObject = bookJSON;
let parseObject = JSON.parse(bookJSON);
console.log(" \n ------------- ");
console.log(parseObject);
console.log(parseObject.title);


let parseObject2 = JSON.parse(bookJSON2);
console.log(" \n ------------- ");
console.log(parseObject2);
console.log(Array.isArray(parseObject2));
console.log(parseObject2[0].title);