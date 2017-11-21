/* eslint-disable complexity */
var fizzBuzzResult = "";

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
