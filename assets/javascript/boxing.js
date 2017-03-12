   var opponent = {
       health: 100,
       attack: 5,
       alive: false
   };

   var character = {
       health: 100,
       attack: 20,
       alive: false
   };
   var wins = 0;

   $(document).ready(function() {
       $(".fighterDiv").click(function() {
           if (character.alive === false) {
               $('.userCharacterPlaceholder').remove();
               $(this).removeClass().prependTo('#usersCharacter');

               // turns off the event listner for the picture selected
               $(this).off();
               character.alive = true;
               $('#characterSelector').text("Select Your Opponent");
               $('#usersHealth').text(character.health);
               console.log("This is your character");
           } else if (opponent.alive === false) {
               $('.currentOpponent').remove();

               // places fighter selected on opponent side (left side) of the screen
               $(this).prependTo('#usersOpponent').addClass("currentOpponent");
               $(this).removeClass().prependTo('#usersOpponent')
                   // turns off the event listner for the picture selected
               $(this).off();
               $('#characterSelector').text("Lets get Ready to Rumble");
               console.log("This is your opponent");
               opponent.health = 100;
               $('.opponentsHealth').css("width", opponent.health + "%")
                   // Let get ready to rumble audio
               var rumble = document.createElement('audio');
               rumble.setAttribute('src', 'assets/mp3/get_ready_2_rumble.mp3');
               rumble.play();
               setTimeout(function() {

               })

               setTimeout(function() {
                   opponent.alive = true;
               }, 8000);

               // turns off event listner for clicking the iamges
           } else {

               console.log("Defeat your opponent FIRST")
           }
       });



       // Attack button and conditionals that determine when the game is finished. 
       $('.attack').on('click', function() {
           if (opponent.alive === true && character.alive === true) {
               // Adds extra attack power the users punch. 
               var punch = document.createElement('audio');
               punch.setAttribute('src', 'assets/mp3/PUNCH.mp3');
               punch.play();
               opponent.health = opponent.health - character.attack - bonus();
               character.health = character.health - opponent.attack;

               console.log(opponent.health);
               // Displays the damages done to each character
               $('.opponentsHealth').css("width", opponent.health + "%");
               $('.usersHealth').css("width", character.health + "%");
               if (character.health === 0) {
                   console.log("You Lost");
                   character.alive = false;
                   $(".muhammad_Ali, .mikeTyson, .evanderHolyfield").off();


               } else if (opponent.health <= 0) {
                   if (wins === 0) {
                       opponent.alive = false;
                       wins++;
                       $('#usersOpponent img').remove();
                       $('#characterSelector').text("Select Your Opponent");
                   } else if (wins === 1) {
                       opponent.alive = false;
                       wins++;
                       $('.currentOpponent').remove();
                       console.log("YOU WON!");
                       alert('You Won!');
                   }
               }
           }
       })

       function bonus() {
           return (Math.floor(Math.random() * 10));
       }


   });
