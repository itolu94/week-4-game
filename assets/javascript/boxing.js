   var opponent = {
       health: 100,
       attack: 15,
       alive: false
   };

   var character = {
       health: 100,
       attack: 10,
       bonus: 0,
       alive: false
   };
   var wins = 0;
   var attackBonus;
   var dialoge = {
       attack: ["Powerful right hook", "Nice body shots", "Hes starting to stumble!", "Hes got him on the ropes", "I dont know if he can take another hit", "He looks unbeatable.  "],
       ko: "He is out cold!",
       champ: "Your new Heavy Weight Champion!",

   };

   $(document).ready(function() {
       $(".fighterDiv").click(function() {
           if (character.alive === false) {
               // Removes the placeholder image on th left side of the screen
               $('.userCharacterPlaceholder').remove();
               // remove all css classes associated with the image and then appends it the left
               $(this).removeClass().prependTo('#usersCharacter');

               // turns off the event listner for the picture selected
               $(this).off();
               character.alive = true;
               $('#characterSelector').text("Select Your Opponent");
           } else if (opponent.alive === false) {
               $('.currentOpponent').remove();
               // places fighter selected on opponent side (right side) of the screen
               $(this).removeClass().prependTo('#usersOpponent')
                   // turns off the event listner for the picture selected
               $(this).off();
               $('#characterSelector').text("Lets get Ready to Rumble");
               opponent.health = 100;
               $('.opponentsHealth').css("width", opponent.health + "%")
                   // Let get ready to rumble audio
               var rumble = document.createElement('audio');
               rumble.setAttribute('src', 'assets/mp3/get_ready_2_rumble.mp3');
               rumble.play();
               // timeout so that audio can play before the conditions for the attack botton are both true
               setTimeout(function() {

               })

               setTimeout(function() {
                   opponent.alive = true;
               }, 8000);
           }
       });



       // Attack button and conditionals that determine when the game is finished. 
       $('.attack').on('click', function() {
               // Determins if both players are alive(Health > 0)
               if (opponent.alive === true && character.alive === true) {

                   // Plays punch audio
                   var punch = document.createElement('audio');
                   punch.setAttribute('src', 'assets/mp3/PUNCH.mp3');
                   punch.play();
                   // Damange done to each opponent is determiend
                   opponent.health = opponent.health - character.attack - bonus();
                   character.health = character.health - opponent.attack;
                   dialogeBox();
                   // Displays the damages done to each character
                   $('.opponentsHealth').css("width", opponent.health + "%");
                   $('.usersHealth').css("width", character.health + "%");
                   if (character.health <= 0) {
                       character.alive = false;
                       $('#dialogeBox').text(dialoge.ko);
                       $(".fighterDiv").off();


                   } else if (opponent.health <= 0) {
                       if (wins === 0) {
                           opponent.alive = false;
                           wins++;
                           $('#dialogeBox').text(dialoge.ko);
                           $('#usersOpponent img').remove();
                           $('#characterSelector').text("Select Your Opponent");
                       } else if (wins === 1) {
                           opponent.alive = false;
                           wins++;
                           $('#dialogeBox').text(dialoge.champ)
                           $('#usersOpponent img').remove()
                           alert('You Won!');
                       }
                   }
               }
           })


       $('.reset').click(function() {
       	location.reload();
       })
           // Adds extra attack power the users punch. 
       function bonus() {
				character.bonus = character.bonus + 10;
				return (character.bonus);
       }

       function dialogeBox() {
           $('#dialogeBox').text(dialoge.attack[Math.floor(Math.random() * dialoge.attack.length)]);
       }

   });
