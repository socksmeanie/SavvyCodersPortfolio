$("form").on("submit",(event) => {
  var data = $(event.target).serializeArray();
  var formObject = {};

  event.preventDefault();

  formObject.sellingPoints = [];

  data.forEach( ( field )
  if(field.name === "sellingPoints") {
    formObject.sellingPoints.push(field.value);
  } else {
    formObject[ field.name ]  = field.value;

  } );

  products.[formObject.type].push( formObject );
  appendtoPage( formObject );


});
