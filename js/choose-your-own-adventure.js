var story = {
    "start": {
        "text": "The year is 1973. You're a hard-boiled PI with a wise-cracking partner, Burt. One day, you remember you haven't had a client in days. Or, actually, ever. Maybe you could go out and look for trouble? Then again, maybe Burt's got something to say.",
        "choices": [ "Go out", "Speak to Burt" ]
    },
    "Speak to Burt": {
        "text": "You face your partner. 'Hey Burt, ol' buddy,' you say. 'We need customers.' Burt looks up at you with his basset hound eyes. 'Bow wow.' He states. You laugh at your partner's wit, then consider what to do.",
        "choices": [ "Pet Burt", "Make a Phone Call" ]
    },
    "Go out": {
        "text": "You try jiggling the handle, but can't seem to get out! Burt whines. You look around the room. There's a mop, and Burt. Hmm.",
        "choices": [ "Use the Mop", "Burt" ]
    },
    "Pet Burt": {
        "text": "You scratch him behind the ears. 'Woof.' Burt says, as he wags his tail. You chuckle. Is nothing sacred to your wiseacre partner? Oh! Also you die."
    },
    "Make a Phone Call": {
        "text": "You reach for your phone, but don't see anything. Hm. You study your surroundings more carefully. Hm. Looks like your office is a mop closet. Weird, 12 years on the job, and you never quite noticed you've been trapped in a room with no food. You die.",
    },
    "Use the Mop": {
        "text": "You bang on the door repeatedly. Eventually, you hear voices. Villains, perhaps? The door opens, and as you're blinded by light, you hear a voice. 'Holy crap, there's some person and a dog in here! What on earth are you doing here?!' You are promptly kicked out of JC Penny."
    },
    "Burt": {
        "text": "You pick up your partner and rub his dog face (nobody ever said Burt was a looker) on the door until it's opened. By some teenager. 'Mr. D'Marco?' She nervously stammers. 'Why is there a lunatic and a dog in the mop closet?' 'Say what?' You ask. Eventually you strike up a deal with the JC Penny: you're allowed to stay in the closet (the stench you left made it unusable, anyway), and in return, you prowl the store at night, to scare away intruders with your unsettling..ness. You agree, then promptly die of starvation because you haven't eaten for the entire time you've been in there."
    }
};


var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var isValidChoice = false;
    var choice;

    if( choices ){
        if( choice == choices[1]){
          isValidChoice = true;
        }


        for(var i = 0; i < choices.length; i++) {
          isValidChoice = choice == choices[i];
        }


        if( isValidChoice ){
            runStory( choice );
        }
        else{
            runStory( branch );
        }
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
};

runStory( "start" );
