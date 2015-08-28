$( document ).ready(function() {
  console.log( 'ready!' );

$(".insta, .kraks, .goodworld").hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);

$(".insta, .kraks, .goodworld").click(function(){
  window.location = './pages/' + ($(this).attr("class").split(' ')[0]) + '.html'
});



});