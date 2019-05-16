var aggravatedImages = [
    "https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDpJySewuhBEreoxLDBbVofhSkK94WW6T6vxc_to7Eo2QLoy4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOCwTKGvzQe8hnMmkVtjUcMZrf1HFhsbAU8DVyG_K4LnKBXQsmw"
];
var ecstaticImages = ["https://media1.tenor.com/images/eb23df84f92926038d405e0b2e79ad65/tenor.gif?itemid=13775632","https://media.tenor.com/images/83182293dabcea337e25f1ae2dce0c62/tenor.gif","https://media1.tenor.com/images/ca320ca284188df590fb6d412c4aebc1/tenor.gif?itemid=12150053"];

var disgustImages = ["https://media.giphy.com/media/WSO1ZT9sug15C/giphy.gif","https://media.giphy.com/media/l2SqeZdCkoe1UXuuY/giphy.gif","https://media.giphy.com/media/8nmLYpDYSTnOw/giphy.gif"];

var tiredImages = ["https://media.giphy.com/media/lJnAXeJO8tE7E37mxq/giphy.gif","https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif","https://media1.giphy.com/media/iTnVKXAWDvRmw/giphy.gif"];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
 
  if (mood==="aggravated") {
 aggravatedMood();
 changeBackgroundColor("#f88379");
  }
  
 else if (mood==="estatic") {
 estaticMood();
  changeBackgroundColor("#10ff00");
  }
  
 
  else if (mood==="disgust") {
 disgustMood();
 changeBackgroundColor("#164413");
  }

 else if (mood==="tired") {
 tiredMood();
 changeBackgroundColor("#fdfd96");
  }
 
 
});



function aggravatedMood(){
   
}
function estaticMood(){
    
}
function disgustMood(){
 
}
function tiredMood(){
    
}

function changeBackgroundColor(color){
    $("body").css("background-color","#f88379");
    $("body").css("background-color","#10ff00");
    $("body").css("background-color","#164413");
    $("body").css("background-color","#fdfd96");

}

function changeTextColor(color){
}

function displayImages(images){
  
}


