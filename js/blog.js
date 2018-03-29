/* globals $ */

var postsRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( "#content" );

postsRequest.then(
    ( posts ) => posts

        .slice(
            0,10
        )

        .map(
            ( post ) => "<div class='blogEntry'> <h2>" + post.title + "</h2>" + "<p>" + post.body + "</p><br> </div> <hr>"
        )
        .forEach(
            ( title ) => $content.append( title )

        )
)
    .catch(
        () => $content.text( "There was an error!" )
    );


// posts.then(data => data.filter(post => post.id === 1).forEach(console.log) )
