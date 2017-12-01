/* globals $ */
/* eslint-disable no-use-before-define */

$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $node = $( "#node" );

        $node.html( "<h3>Hello, " + value + "!</h3>" );
    }

);


$( "h1" ).on( "auxclick", ( event ) => event.target.textContent = "I've been aux clicked!" );

$( ".examplelink" ).on( "mouseenter", ( event ) => {
    $( event.target ).css( "background-color", "yellow" );
} );

$( ".examplelink" ).on( "mouseleave", ( event )  => {
    $( event.target ).css( "background-color", "transparent" );
} );
