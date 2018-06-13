 $(document).ready(function(){
// Jquerry code goes in here
var flag=0;
var player="";
var counter=3;
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sword.wav");
var button=$("<button>");
button.addClass("btn btn-primary");

$("playNow").hide();

$(".image-holder").on("click",function(){
   //Character Selection
   
   player=this.id;
   if(flag==1)
   {
    button.empty();
    button.append("attack!");
    button.attr("id","fight");
    $("#attackbutton").append(button);
    $("#fight").on("click",function(){
        audioElement.play();
       
    })
    counter--;
    if(counter==0) $("#choseOpponents").hide();
    $("#enemy").empty();
    $("#enemy").append("opponent");
    $("#opponent").empty(); 
    if(player==="arjun")
    {
    
    $("#opponent").append($("#arjun"));
   
    }
    if(player==="bhim")
    {
    $("#opponent").append($("#bhim"));
    
    }
    if(player==="duryo")
    {
    $("#opponent").append($("#duryo"));  
   
    }
    if(player==="karna")
    {
    $("#opponent").append($("#karna"));
    }
   }
   if(flag==0)
   {
    flag=1;
    $("#chooseCharacter").empty();
    $("#chooseCharacter").append("Your Character");
    $("#enemies").append("Choose your Opponent")
    if(player==="arjun")
    {
    $("#opponents").append($("#duryo"));
    $("#opponents").append($("#karna"));
    $("#opponents").append($("#bhim"));
      
    }
    if(player==="bhim")
    {
    $("#opponents").append($("#duryo"));
    $("#opponents").append($("#karna"));
    $("#opponents").append($("#arjun"));
    }
    if(player==="duryo")
    {
    $("#opponents").append($("#arjun"));  
    $("#opponents").append($("#karna"));
    $("#opponents").append($("#bhim"));
    }
    if(player==="karna")
    {
    $("#opponents").append($("#duryo"));
    $("#opponents").append($("#arjun"));
    $("#opponents").append($("#bhim"));
    }
   }
   
});






});