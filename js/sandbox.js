/* globals $ */
var $output = $( "#output" );
var $subtitle = $( "<p>hi - world</p>" );

$output
    .html( "<h3>Hello Again, World!</h3>" )
    .css( {
        "color": "blue",
        "font-size": "200%",
        "margin-left": "300px"
    } )
    .append( $subtitle )
    .css( { "font-style": "italic" } )
    .fadeOut( 3000 )
    .fadeIn()
    .animate( {
        "margin-top": "200%"
    }, { "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( { "color": "black" } );
        }
    } );
