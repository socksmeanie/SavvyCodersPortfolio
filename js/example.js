var story = {
    "start": "You walk into a dark forest at night. Would you like to stop and make camp, or continue towards the sound of running water?",
    "camp": "You pick a flat spot and lie down for the night. Everything is cool until morning, and you go home.",
    "wander": "You sally forth into the forest, wandering listlessly as you search for the water's source. Suddenly, you are accosted by a creature of the night! Do you fight or flee?",
    "fight": "You're obviously eaten by the mysterious creature. As you're consumed, you think of all the times you skipped leg day.",
    "flee": "You run away from the creature of the night as quickly as you can, until the sun rises in the morning. You have manage to lose your pursuer and, in some small way, the inhibitions you had built up during your time away from nature. You resolve to return to face once more the primal fears at the core of your humanity."
};

var choice = prompt( story.start );
var output = document.querySelector( "#output" );

if( choice === "camp" ){
    output.textContent = story.camp;
}
else if( choice === "wander" ){
    choice = prompt( story.wander );

    if( choice === "fight" || choice === "flee" ){
        output.textContent = story[choice];
    }
    else{
        output.textContent = "you didn't choose a real option!";
    }
}
else{
    output.textContent = "you didn't choose a real option!";
}
