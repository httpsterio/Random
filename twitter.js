// TWITTER IMPLEMENTATION
var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});

//RANDOMIZER FUNCTION
function randomInt(max) {
  return Math.floor(Math.random() * max.length);
}

// DICTIONARY
var who = ["I'm", "Haukka is", "We're", "Mjölligaming is "];
var verb = [
  "pwning",
  "killing",
  "owning",
  "butchering",
  "wiping",
  "moppin da floor",
  "exterminatin",
  "cleaning",
];
var whom = [
  "noobs",
  "wankers",
  "idiots",
  "suckers",
  "swedes",
  "nubs",
  "ubernoobs",
  "newbies",
  "new beginners",
  "n00bz",
  "newbz",
  "6k MMR noobs",
];
var hero = [
  "Brisselbeck",
  "Spechtre",
  "Omnni",
  "Jouni",
  "Erfshekker",
  "Kotol",
  "Facefull Void",
  "Goblin Techies",
];
var hashtag = [
  "#haukkagaming",
  "#mjölligaming",
  "#winning",
  "#choochoo",
  "#noboilleturpaan",
  "#killallmen",
  "#dendipls",
];

// STRINGBUILD VARS
var randWho = who[randomInt(who)];
var randVerb = verb[randomInt(verb)];
var randWhom = whom[randomInt(whom)];
var randHero = hero[randomInt(hero)];
var randHashtag = hashtag[randomInt(hashtag)];

// STRING BUILD
function tweet() {
  return (
    randWho +
    " " +
    randVerb +
    " " +
    randWhom +
    " with " +
    randHero +
    ". " +
    randHashtag
  );
}

// STRING TO TWITTER POST
client.post("statuses/update", { status: tweet() }, function (
  error,
  tweet,
  response
) {
  if (!error) {
    console.log(tweet);
  }
});
