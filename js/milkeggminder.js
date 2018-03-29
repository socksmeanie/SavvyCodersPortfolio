/* 1 gallon === 16 cups */
/* women need 3 (8-ounce) cups a day */
/* 16/3 = 5.333 */

/* 2 eggs recommended, 12 eggs a carton, 12/6=6 */
/* var $user = $( "#user" );

$user.on( "keypress", () => {
    console.log( "key" );
} ); */

$( "#eggForm" ).submit( function( event ){
    var eggs = $( "input#eggs" ).val();
    var milk = $( "input#milk" ).val();
    var eggsFridge = $( "input#eggsFridge" ).val();
    var milkFridge = $( "input#milkFridge" ).val();


    $( "#milkOutput" ).html( "<p> You need to get a new gallon of milk in " + Math.round( milkFridge * 16 / milk ) + " days" + "<br>" +

       "You need to get a new carton of eggs in " + Math.round( eggsFridge / eggs ) + " days </p>" );
} );

/* https://www.allrecipes.com/recipe/220520/classic-hash-browns/*/
