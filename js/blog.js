/* globals $ */

var postsRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( "#content" );

postsRequest.then(
    ( posts ) => posts
        .map(
            ( post ) => "<p>" + post.title + "</p>"
        )
        .forEach(
            ( title ) => $content.append( title )
        )
)
    .catch(
        () => $content.text( "There was an error!" )
    );


// posts.then(data => data.filter(post => post.id === 1).forEach(console.log) )
