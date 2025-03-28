const blank = {};
console.log("Blank Type:", typeof blank);
console.log("Blank Value:", blank);


const book = {
    title: "1994",
    author: "George Orwell",
    isAvalible: false,

    checkIn: function(){ this.isAvalible = true;},
    checkOn: function(){ this.isAvalible = false;}


}
console.log("Book Type:", typeof book);
console.log("Book value:", book);


const bookConst = new Object();
bookConst.title = "1888";
bookConst.author = "George 1";
bookConst.isAvalible = false;

bookConst.checkIn = function(){ this.isAvalible=true; console.log("Ejecutando el metodo Checkin") }
bookConst.checkOn = function(){ this.isAvalible=false; console.log("Ejecutando el metodo Checkon") }

console.log(bookConst.checkIn);
console.log(bookConst["checkIn"]);

bookConst.checkIn();
bookConst.checkOn();

