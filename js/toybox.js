/* globals */

var i = -1;
var color = [ "red", "blue", "green", "yellow", "darkslategray" ];
var bgArray = [ "url(../media/1.png)","url(../media/2.png)","url(../media/3.png)","url(../media/4.png)","url(../media/5.png)","url(../media/6.png)","url(../media/7.png)" ];
var bgArrayColor = [ "lavender","lavender","#111111","lavender","#111111","lavender","#111111" ];
var fonts = [ "'Arial #111111', Gadget, sans-serif", "Impact, Charcoal, sans-serif","Verdana, Geneva, sans-serif","Tahoma, Geneva, sans-serif","'Open Sans', sans-serif;" ];
var fontsname = [ "Arial","Impact","Verdana","Tahoma","Open Sans" ];
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
        $( "body" ).css( "background-color", "darkslategray" );
        console.log( "i is now " + i );
        $( "#toyboxButton" ).text( "Turn me " + color[i + 1] );
    }
} );


$( "#fontButton" ).on( "click", () => {
    if( i < 3 ){
        console.log( "i was" + i );
        i++;
        console.log( "i is now " + i );
        $( ".header" ).css( "font-family", fonts[i] );
        $( "#fontButton" ).text( "Turn me " + fontsname[i + 1] );
    }
    else{
        console.log( "i was " + i );
        i = 0;
        $( ".header" ).css( "font-family", "'Open Sans', sans-serif" );
        console.log( "i is now " + i );
        $( "#fontButton" ).text( "Turn me " + fontsname[i + 1] );
    }
} );

$( "#bgBbutton" ).on( "click", () => {
    switchBG();
} );

function switchBG(){
    if( i < 6 ){
        console.log( "i was" + i );
        i++;
        console.log( "i is now " + i );
        $( "body" ).css( "background", bgArray[i] );
        $( "body" ).css( "color", bgArrayColor[i] );
    }
    else{
        console.log( "i was " + i );
        i = 0;
        $( "body" ).css( "background", bgArray[i] );
        $( "body" ).css( "color", bgArrayColor[i] );
        console.log( "i is now " + i );
    }
}

setInterval( switchBG, 10000 );
