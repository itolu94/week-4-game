   var character = false;
   var opponent = false;
   var usersHealth = 100;
   var usersAttack = 10;
   var userAlive = false; 
   var opponentshealth = 100;
   var opponentAlive = false;



   $(document).ready(function() {
       $(".muhammad_Ali, .mikeTyson, .evanderHolyfield").click(function() {
           if (character === false) {
               $('.userCharacterPlaceholder').remove();
               $(this).appendTo('#usersCharacter')
               $(this).off();
               character = true;
               $('#characterSelector').text("Select Your Opponent")
               console.log("This is your character");
           } else if (opponent === false) {
               $('.userOpponentPlaceholder').remove();
               $(this).appendTo('#usersOpponent')
               $(this).off();
               opponent = true;
               opponentAlive = true; 
               opponentshealth = 100 
               $('#characterSelector').text("Lets get Ready to Rumble")
               console.log("This is your opponent");
               // turns off event listner for clicking the iamges
           } else {

               console.log("Defeat your opponent FIRST")
           }
       });


       $('.attack').on('click', function() {
           if (opponentAlive === true) {
               opponentshealth = opponentshealth - usersAttack;
               console.log(opponentshealth);
               if (opponentshealth <= 0) {
                   opponent = false;
                   opponentAlive = false;
                   $('#usersOpponent').remove();
                   $('#characterSelector').text("Select Your Opponent");
               }
           }
       })


   });
