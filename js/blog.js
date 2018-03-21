/* globals $ */

var postsRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( "#content" );

postsRequest.then(
    ( posts ) => posts
        .map(
            ( post ) => "<h2>" + post.title + "</h2>" + "<p>" + post.body + "</p>"
            /* ( post ) => "<p>" + post.body + "</p>"*/
        )
        .forEach(
            ( title ) => $content.append( title )
            /* ( body ) => $content.append( body )*/
        )
)
    .catch(
        () => $content.text( "There was an error!" )
    );


// posts.then(data => data.filter(post => post.id === 1).forEach(console.log) )
