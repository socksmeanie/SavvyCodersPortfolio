/* 1 gallon === 16 cups */
/* women need 3 (8-ounce) cups a day */
/* 16/3 = 5.333 */

/* 2 eggs recommended, 12 eggs a carton, 12/6=6 */
var $user = $( "#user" );

$user.on( "keypress", () => {
    console.log( "key" );
} );

/*
$( "#minderbtn" ).on( "click", () => {
    var gallon = 16;
    var carton = 12;
    var milk = prompt( "How many glasses of milk do you drink daily" );
    var eggs = prompt( "how many eggs do you eat daily" );

    alert( "You need to get a new gallon of milk in " + gallon / milk + " days" );
    alert( "You need to get a new carton of eggs in " + carton / eggs + " days" );
} );*/

$( "#eggForm" ).submit( function( event ){
    var eggs = $( "input#eggs" ).val();
    var milk = $( "input#milk" ).val();
    var eggsFridge = $( "input#eggsFridge" ).val();
    var milkFridge = $( "input#milkFridge" ).val();


    alert( "You need to get a new gallon of milk in " + milkFridge * 16 / milk + " days" );
    alert( "You need to get a new carton of eggs in " + eggsFridge / eggs + " days" );
} );
/* var minder = function( milk,eggs ){
    var gallon = 16;
    var carton = 12;
    var milk = prompt( "How many glasses of milk do you drink daily" );
    var eggs = prompt( "how many eggs do you eat daily" );

    alert( "You need to get a new gallon of milk in " + gallon / milk + " days" );
    alert( "You need to get a new carton of eggs in " + carton / eggs + " days" );
};*/
