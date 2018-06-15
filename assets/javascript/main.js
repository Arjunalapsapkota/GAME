 $(document).ready(function(){
// Jquerry code goes in here
var flag=0;
var player="";
var opponent="";
var counter=3;
var count=0;
var power=120;
var playerPower=120
var opponentPower=120;                                  // 120 HP for all characters
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sword.wav");
var button=$("<button>");
button.addClass("btn btn-primary");
$("playNow").hide();

/* Attack function goes below */
/* Function defination goes here */


function attackFunction(){
    var randomNumber= function(){return Math.floor(Math.random()*4 +1);}
    console.log(randomNumber());
    var call=0;
    
    
    var number=randomNumber();
    var playerSword= function()
    {
        while (call<=number)
        {
            call=randomNumber();
        }
        return call*5;
         
    }
    var opponentSword= function(){}
    playerPower=playerPower-opponentSword();
    console.log(playerPower);
    opponentSword=opponentPower-playerSword();
    
}


/* ####################################   */



$(".image-holder").on("click",function(){
   //Character Selection
   
   
   if(flag==1)
   {
    opponent=this.id;
    button.empty();
    button.append("attack!");
    button.attr("id","fight");
    $("#attackbutton").append(button);
    $("#fight").on("click",function()           //starts the attack on the press of a button
    {
        audioElement.play();
        attackFunction();
        
    })
    counter--;
    
    if(counter==0)                              //selects the opponent
    {
        $("#choseOpponents").hide();
    }
    $("#enemy").empty();
    $("#enemy").append("opponent");
    $("#opponent").empty(); 
    var string="#"+opponent;
    $("#opponent").append($(string));
   }
   if(flag==0)                                 //Selects the character
   {
    player=this.id;
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



// if(true)    code that selects the opponent
//         {
//         if(opponent==="arjun")
//         { 
//         $("#opponent").append($("#arjun"));
//         }
//         if(opponent==="bhim")
//         {
//         $("#opponent").append($("#bhim"));
        
//         }
//         if(opponent==="duryo")
//         {
//         $("#opponent").append($("#duryo"));  
       
//         }
//         if(opponent==="karna")
//         {
//         $("#opponent").append($("#karna"));
//         }
//         }