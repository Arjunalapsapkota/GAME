 $(document).ready(function(){
// Jquerry code goes in here


$("playNow").hide();

$(".image-holder").on("click",function(){
   var store=this.id;
   $("#chooseCharacter").empty();
   $("#chooseCharacter").append("Your Character");
   
    if(store==="arjun")
    {
      $("#bhim").hide();
      $("#duryo").hide();
      $("#karna").hide();
      
    }
    if(store==="bhim")
    {
        $("#arjun").hide();
        $("#duryo").hide();
        $("#karna").hide();
    }
    if(store==="duryo")
    {
        $("#arjun").hide();
        $("#bhim").hide();
        $("#karna").hide();
    }
    if(store==="karna")
    {
        $("#arjun").hide();
        $("#bhim").hide();
        $("#duryo").hide();
    }
});






});