$(document).ready(function(){
  $('input').keyup(function(event){
    if(event.keyCode == 13){
      $('.enter').click();
    }
  });
 $('.enter').click(function(){
   var srcv = $('#search').val();//variable get the input value
   /*statement to check empty input*/
   if(srcv==""){
     alert("enter something to search");
   }else{
     style();
     $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+srcv+'&format=json&limit=20&callback=?', function(json){
       /*for loop to display the content of the json object*/
      $('.content').html("");//clears any previuos content

       for (i = 0; i < 20; i++) {
                    $('.content').append("<p id = 'para'><a href ='" + json[3][i] + "'target='_blank'>" + json[1][i] + "</a><br>" + json[2][i] + "</p>");
                }

       /* $.each(json[1],function(i,v){
              $('.content').append("<p><a href ='"+json[3][i]+"'target='_blank'>"+v+"</a>"+json[2][i]+"</p>");

        });*/
 });
 
   }
});
 });
 /*function to change the css*/
function style(){
  $('#wikilogo').css("height", "30px");
  $('.container').css({
                      "margin-top":"15px",
                      
                      "height": "auto",
                      "background-color":"lightgrey"});
  $('input').css("width", "70%");
  $(".btn").css("display", "none");
  $('img,a').removeClass("senter r");
  $('p').css("width", "60%");
}