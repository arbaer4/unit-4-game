$(document).ready(function() {
  var random;

        //generate random number for crystals
        var crystalnum1 = 0;
        var crystalnum2 = 0;
        var crystalnum3 = 0;
        var crystalnum4 = 0;
      
      
      //var for user score
      var counter = 0;
      var wins = 0;
      var losses = 0;
  
    //on click start the game by generating a random number
    function reset(){
      console.log("reset called");
      random = Math.floor(Math.random() * 100) + 19;
        console.log(random);
      
        // place random number in random number div.
        $("#randomnumber").text(random);
  
        
        //generate random number for crystals
        crystalnum1 = Math.floor(Math.random()*12)+1;
        crystalnum2 = Math.floor(Math.random()*12)+1;
        crystalnum3 = Math.floor(Math.random()*12)+1;
        crystalnum4 = Math.floor(Math.random()*12)+1;
      
      
      //var for user score
      counter = 0;
      $("#userTotal").text(counter);
      }


  $("#clicktoplay").on("click", function() {
 
      //generate a random number
      random = Math.floor(Math.random() * 100) + 19;
      console.log(random);
    
      // place random number in random number div.
      $("#randomnumber").text(random);

      
      //generate random number for crystals
      crystalnum1 = Math.floor(Math.random()*12)+1;
      crystalnum2 = Math.floor(Math.random()*12)+1;
      crystalnum3 = Math.floor(Math.random()*12)+1;
      crystalnum4 = Math.floor(Math.random()*12)+1;
    
    
    //var for user score
    counter = 0;
    wins = 0;
    losses = 0;


          

    // $("#wins").text(wins);
    // $("#losses").text(losses);


    function diamond(){
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            console.log(wins); 
            reset();
    }

    function fail(){
            alert("You lose!!");
            losses++;
            $("#losses").text(losses);
            console.log(losses);  
            reset();    
    }

    //incrementing user score by clicking crystals:
   
    $("#crystalone").on("click", function() {
     counter = counter + crystalnum1;
        console.log(crystalnum1);
        console.log(counter);
        //Display new user total 
     $("#userTotal").text(counter);
     //win loss logic
     if (counter === random) {
        diamond();
      }
    else if (counter > random) {
        fail();
      }
    });
   

    $("#crystaltwo").on("click", function() {
        counter = counter + crystalnum2;
            console.log(crystalnum2);
            console.log(counter);
        $("#userTotal").text(counter);
        if (counter === random) {
            diamond();
          }
        else if (counter > random) {
            fail();
          }
       });
       

    $("#crystalthree").on("click", function() {
        counter = counter + crystalnum3;
            console.log(crystalnum3);
            console.log(counter);
        $("#userTotal").text(counter);
        if (counter === random) {
            diamond();
          }
        else if (counter > random) {
            fail();
          }
       });
       
    $("#crystalfour").on("click", function() {
        counter = counter + crystalnum4;
            console.log(crystalnum4);
            console.log(counter);
        $("#userTotal").text(counter);
        if (counter === random) {
            diamond();
          }
        else if (counter > random) {
            fail();
          }
       });



    });
    
    });