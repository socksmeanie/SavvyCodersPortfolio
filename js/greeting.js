 var hello = "Hello";
 var originalName = prompt( "what's your name?" );

var checkUserName = function checkUserName( userName ){
  if( !userName || userName === " " ) {
    userName = prompt( "What's your name, for reals?" );
    checkUserName( userName );
  } else {
      originalName = userName;
  }
};

checkUserName( originalName );

document.querySelector( "#node" ).textContent = "Hello, " + originalName;
