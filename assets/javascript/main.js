

    $(document).ready(function(){
    // Jquerry code goes in here
    var flag=0;
    var flago=0;
    var player="";
    var opponent="";
    var counter=3;
    var pcount=0;
    var count=5;
    var ocount=0;
    var power=120;
    var playerPower=120
    var opponentPower=120;
    var number=0;

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sword.wav");
var button=$("<button>");
button.addClass("btn btn-primary");
$("playNow").hide();

/* Attack function goes below */
/* Function defination goes here */
var randomNumber= function() 
    {
    return (Math.floor(Math.random()*10 +1))*3;
    }

var playerSword= function()
    {   
        number=randomNumber();   
        while (number<count)
        {
        number=randomNumber();
        }
        count=number;
        return number;       
    }

var opponentSword= function()
    {
        return 15;
    }

function attackFunction()
    {
        pcount=playerSword();
        ocount=opponentSword();
        console.log(pcount);
        playerPower=playerPower-ocount;
        console.log('player power: ',playerPower);
        opponentPower=opponentPower-pcount;
        console.log('Opponent power: ',opponentPower);
        var p="#hp"+player;
        var o="#hp"+opponent;
        $(p).empty();
        $(p).append(playerPower);
        $(o).empty();
        $(o).append(opponentPower);


    }


/* ####################################   */



$(".wrapper").on("click",function(){
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
