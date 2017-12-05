/* eslint-disable complexity */
var fizzBuzzResult = "";
var listItems = document.querySelectorAll( "li" );
var listArray = Array.from( listitems );


var generateEvenListItems = function generateEvenListItems( ){
    var evens = document.querySelector( "#evens" );
    var listItemString = " ";

    for( var i = 2; i <= 20; i += 2 ){
        listItemString += "<li>";
        listItemString += i;
        listItemString += "</li>";
    }

    evens.innerHTML = listItemString;
};


generateEvenListItems();


for( var i = 0; i < listItems.length; i++ ){
    listItems[i].textContent = i + 1;
}

var fizzBuzz2 = function fizzBuzz( num ){
    var range = [];

    for( let i = 1; i <= num; i++ ){
        range.push( i );
    }

    var fizzBuzz = range.map( ( x ) => x % 15 === 0 );
    var buzz = range.map( ( x ) => x % 5 === 0 && x % 15 != 0 );
    var fizz = range.map( ( x ) => x % 3 === 0 && x % 15 != 0 );

    fizzBuzzResult = fizzBuzz + "are FizzBuzz! " + fizz + " are Fizz! " + buzz + " are Buzz!";
};

var fizzBuzz2 = function fizzBuzz( num ){
    var range = [];

    for( let i = 1; i <= num; i++ ){
        range.push( i );
    }

    var fizzBuzz = range.map( ( x ) => x % 15 === 0 );
    var buzz = range.map( ( x ) => x % 5 === 0 && x % 15 != 0 );
    var fizz = range.map( ( x ) => x % 3 === 0 && x % 15 != 0 );

    fizzBuzzResult = fizzBuzz + "are FizzBuzz! " + fizz + " are Fizz! " + buzz + " are Buzz!";
};


var FizzBuzz = function FizzBuzz( num ){
    for( let i = 1; i <= num; i++ ){
        if( i % 15 == 0 ){
            fizzBuzzResult += ", " + i + " = FizzBuzz";
        }
        else if( i % 3 == 0 ){
            fizzBuzzResult += ", " + i + " = Fizz";
        }
        else if( i % 5 == 0 ){
            fizzBuzzResult += ", " + i + " = Buzz";
        }
        else{
            fizzBuzzResult += ", " + i + " = neither";
        }
    }
};

FizzBuzz( 100 );

document.querySelector( "#fizzbuzz" ).textContent = fizzBuzzResult;

/* document.querySelector( "#evens" ).innerHTML = "<li>YOLO</li>";*/
