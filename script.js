var aggravatedImages = [
    "https://media.giphy.com/media/Dw3CPTQpImKfS/giphy.gif", 
    "https://media.giphy.com/media/MxVHrKguywNAA/giphy.gif",
    "https://media.giphy.com/media/l0MYEwLJpJApzhkje/giphy.gif"
    ];

var ecstaticImages = [
    "https://media1.tenor.com/images/eb23df84f92926038d405e0b2e79ad65/tenor.gif?itemid=13775632",
    "https://media.tenor.com/images/83182293dabcea337e25f1ae2dce0c62/tenor.gif",
    "https://media1.tenor.com/images/ca320ca284188df590fb6d412c4aebc1/tenor.gif?itemid=12150053"
    ];

var disgustImages = [   
    "https://media.giphy.com/media/WSO1ZT9sug15C/giphy.gif",
    "https://media.giphy.com/media/l2SqeZdCkoe1UXuuY/giphy.gif",
    "https://media.giphy.com/media/8nmLYpDYSTnOw/giphy.gif"
];

var tiredImages = [
    "https://media.giphy.com/media/lJnAXeJO8tE7E37mxq/giphy.gif",
    "https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif",
    "https://media1.giphy.com/media/iTnVKXAWDvRmw/giphy.gif"];


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
   aggravatedImages.forEach(function(element){
     $(".images").append("<img src="+element+">");
   });
}


function estaticMood(){
     ecstaticImages.forEach(function(element){
     $(".images").append("<img src="+element+">");
   });
}
function disgustMood(){
   disgustImages.forEach(function(element){
     $(".images").append("<img src="+element+">");
   });
}
function tiredMood(){
      tiredImages.forEach(function(element){
     $(".images").append("<img src="+element+">");
   });
}

function changeBackgroundColor(color){
  
    $("body").css("background-color",color);
}

function changeTextColor(color){
}

function displayImages(images){
  
}


