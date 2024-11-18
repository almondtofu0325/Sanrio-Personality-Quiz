document.addEventListener('DOMContentLoaded', postData);
const data = document.location.search;
const params = new URLSearchParams(data)

const name = params.get('fname');
const stress = params.get('stress');
const friend = params.get('friend');
const style = params.get('style');
const morning = params.get('morning');
const pet = params.get('pet');
const season = params.get('season');
const activity = params.get('activity');
const trait = params.get('trait');

var hk = 0;
var melo = 0;
var cinna = 0;
var kuro = 0;

var greatest = 0;

let character;
let image;


// 1. stress
if (stress == "read") {
    cinna++;
    console.log("read")
} 
if (stress == "call") {
    hk++;
    console.log("call")
} 
if (stress == "fun") {
    kuro++;
    console.log("fun")
} 
if (stress == "walk") {
    melo++;
    console.log("walk")
} 

// 2. friend
if (friend == "advice") {
    hk++;
    console.log("advice")
}
if (friend == "adventure") {
    kuro++;
    console.log("adventure")
} 
if (friend == "gift") {
    melo++;
    console.log("gift")
} 
if (friend == "listen") {
    cinna++;
    console.log("listen")
}

// 3. style
if (style == "cute") {
    melo++;
    console.log("cute")
} 
if (style == "bright") {
    hk++;
    console.log("bright")
} 
if (style == "unique") {
    kuro++;
    console.log("unique")
} 
if (style == "cozy") {
    cinna++;
    console.log("cozy")
}

// 4. morning
if (morning == "okay") {
    melo++;
    console.log("okay")
}
if (morning == "meh") {
    cinna++;
    console.log("meh")
}
if (morning == "hate") {
    kuro++;
    console.log("hate")
} 
if (morning == "ready") {
    hk++;
    console.log("ready")
}

// 5. pet
if (pet == "puppy") {
    hk++;
    console.log("puppy")
}
if (pet == "bunny") {
    melo++;
    console.log("bunny")
}
if (pet == "kitten") {
    cinna++;
    console.log("kitten")
} 
if (pet == "turtle") {
    kuro++;
    console.log("turtle")
}

// 6. season
if (season == "spring") {
    melo++;
    console.log("spring")
}
if (season == "summer") {
    cinna++;
    console.log("summer")
}
if (season == "autumn") {
    hk++;
    console.log("autumn")
} 
if (season == "winter") {
    kuro++;
    console.log("winter")
}


// 7. activity
if (activity == "picnic") {
    melo++;
    cinna++;
    console.log("picnic")
} 
if (activity == "shopping") {
    hk++;
    cinna++;
    console.log("shopping")
} 
if (activity == "scrolling") {
    melo++;
    kuro++;
    console.log("scrolling")
} 
if (activity == "park") {
    hk++;
    kuro++;
    console.log("park")
}

// 8. trait
if (trait == "playful") {
    hk++;
    kuro++;
    console.log("playful")
} 
if (trait == "calm") {
    melo++;
    cinna++;
    console.log("calm")
} 
if (trait == "sweet") {
    melo++;
    cinna++;
    console.log("sweet")
} 
if (trait == "confident") {
    hk++;
    kuro++;
    console.log("confident")
}

if (hk > cinna && hk > melo && hk > kuro) {
    character = 'Hello Kitty';
    image = 'images\hellokitty.png';
} 
else if (melo > cinna && melo > hk && melo > kuro) {
    character = 'My Melody';
    image = 'images\melo.png';

} 
else if (cinna > hk && cinna > melo && cinna > kuro) {
    character = 'Cinnamoroll';
    image = 'images\cinnamoroll.png';

} 
else if (kuro > cinna && kuro > melo && kuro > hk) {
    character = 'Kuromi';
    image = 'images\kuro.png';

}

else if (hk == melo) {
    character = 'both Hello Kitty and My Melody!';
} 
else if (hk == cinna) {
    character = 'both Hello Kitty and Cinnamoroll!';
} 
else if (hk == kuro) {
    character = 'both Hello Kitty and Kuromi!';
} 

else if (melo == cinna) {
    character = 'both My Melody and Cinnamoroll!';
} 
else if (melo == kuro) {
    character = 'both My Melody and Kuromi!';
} 

else if (cinna == kuro) {
    character = 'both Cinnamoroll and Kuromi!';
} 

function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<p class="resulting">${name}, you are ${character}!</p>`;
}

