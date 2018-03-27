/* globals */

var i = -1;
var color = [ "red", "blue", "green", "yellow", "red" ];
var fonts = [ "italic", "oblique" ];

/* var color = "red";
/* var $bodybackground = $( "body" ).css( "background-color", color );*/

$( "#toyboxButton" ).on( "click", () => {
    if( i < 3 ){
        console.log( "i was" + i );
        i++;
        console.log( "i is now " + i );
        $( "body" ).css( "background-color", color[i] );
        $( "#toyboxButton" ).text( "Turn me " + color[i + 1] );
    }
    else{
        console.log( "i was " + i );
        i = 0;
        $( "body" ).css( "background-color", color[i] );
        console.log( "i is now " + i );
        $( "#toyboxButton" ).text( "Turn me " + color[i + 1] );
    }
} );


$( "#fontButton" ).on( "click", () => {
    if( i < 3 ){
        console.log( "i was" + i );
        i++;
        console.log( "i is now " + i );
        $( "#fontChangable" ).css( "font-style", fonts[i] );
        $( "#fontButton" ).text( "Turn me " + fonts[i + 1] );
    }
    else{
        console.log( "i was " + i );
        i = 0;
        $( "body" ).css( "background-color", color[i] );
        console.log( "i is now " + i );
        $( "#toyboxButton" ).text( "Turn me " + color[i + 1] );
    }
} );
