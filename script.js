const userGuess = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit");
const usersWord = document.getElementById("scrambled-word");
const info = document.getElementById("info");
const levelOutput = document.getElementById("level");
const scoreOutput = document.getElementById("score");
const attemptsOutput = document.getElementById("attempts");
const gameContainer = document.getElementById("game-container");
const guessContainer = document.getElementById("guess-container");
const rules = document.getElementById("rules");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");

let level = 1;
let score = 0;
let word;
let attempts = 0;
let correct = 0;

const lvlOneWords = [
  "aim",
  "ace",
  "bed",
  "bee",
  "buy",
  "can",
  "cow",
  "cod",
  "cur",
  "did",
  "duo",
  "die",
  "dry",
  "dug",
  "elf",
  "egg",
  "elk",
  "fat",
  "fix",
  "fin",
  "few",
  "gym",
  "guy",
  "goo",
  "hen",
  "hag",
  "hic",
  "hut",
  "ill",
  "ice",
  "imp",
  "ink",
  "ivy",
  "jet",
  "job",
  "jaw",
  "jab",
  "keg",
  "kid",
  "lip",
  "leg",
  "lad",
  "let",
  "led",
  "law",
  "lid",
  "mut",
  "mat",
  "mud",
  "mid",
  "nit",
  "nog",
  "now",
  "oil",
  "owl",
  "oar",
  "off",
  "oat",
  "one",
  "pry",
  "pal",
  "peg",
  "pea",
  "pen",
  "pus",
  "rad",
  "rem",
  "rig",
  "rob",
  "saw",
  "sob",
  "sec",
  "shy",
  "sex",
  "sly",
  "tan",
  "the",
  "tic",
  "try",
  "cop",
  "uke",
  "ugh",
  "ups",
  "vat",
  "van",
  "vet",
  "woo",
  "wow",
  "wry",
  "wok",
  "yah",
  "yak",
  "yay",
  "you",
  "yep",
  "zit",
  "zap",
  "zig",
  "zag",
  "zip"
];

const lvlTwoWords = [
  "able",
  "aced",
  "acid",
  "ally",
  "also",
  "arcs",
  "area",
  "arch",
  "aunt",
  "axis",
  "baby",
  "back",
  "ball",
  "babe",
  "bass",
  "bell",
  "bets",
  "bind",
  "bios",
  "book",
  "cabs",
  "case",
  "chef",
  "curl",
  "chat",
  "chap",
  "chin",
  "chum",
  "chop",
  "coal",
  "dabs",
  "dame",
  "damp",
  "dart",
  "dash",
  "dark",
  "deck",
  "deep",
  "diva",
  "dice",
  "easy",
  "ends",
  "epic",
  "etch",
  "evil",
  "expo",
  "exam",
  "face",
  "fact",
  "fail",
  "fair",
  "fall",
  "farm",
  "fave",
  "fart",
  "gain",
  "gays",
  "gets",
  "germ",
  "glad",
  "hams",
  "hats",
  "haze",
  "help",
  "head",
  "hers",
  "hike",
  "jabs",
  "junk",
  "jury",
  "kept",
  "keys",
  "kilt",
  "kiss",
  "lads",
  "lamp",
  "lean",
  "less",
  "mark",
  "mile",
  "mine",
  "name",
  "nuns",
  "obit",
  "obey",
  "pack",
  "pane",
  "palm",
  "pals",
  "raid",
  "reek",
  "rift",
  "repo",
  "sees",
  "seem",
  "self",
  "slip",
  "thin",
  "tied",
  "toes",
  "tofu",
  "tree",
  "ugly",
  "unto",
  "used",
  "vans",
  "visa",
  "wack",
  "wade",
  "wait",
  "wasp",
];

const lvlThreeWords = [
  
];

const lvlFourWords = [
 
];

const lvlFiveWords = [
  
];

const lvlSixWords = [
  
];

const lvlSevenWords = [

];

const lvlEightWords = [

];

function reset() {
  level = 1;
  score = 0;
  correct = 0;
  attempts = 0;
  word = "";
  updateBoard();
  info.innerHTML = "";
  userGuess.value = "";
}

function randomWord(lvl) {
  word = lvl[Math.floor(Math.random() * lvl.length + 1) - 1];
  return word;
}

function scrambleWord(word) {
  let letters = word.split("");
  let currentIndex = letters.length,
    temporaryValue,
    randomIndex;

 
  while (0 !== currentIndex) {
   
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    
    temporaryValue = letters[currentIndex];
    letters[currentIndex] = letters[randomIndex];
    letters[randomIndex] = temporaryValue;
  }

  return letters.join(" ");
}
function updateBoard() {
  scoreOutput.innerHTML = score;
  levelOutput.innerHTML = level;
  attemptsOutput.innerHTML = attempts;
}

function checkAnswer(guess) {
  console.log(`Correct: ${correct}`);
  if (correct == 3) {
    level += 1;
    correct = 0;
  }

  if (attempts == 3) {
    guessContainer.classList.toggle("hidden");
    info.innerHTML =
      "<p class='retry'>Sorry. You are out of chances. <button id='retry-button'>Retry</button> </p>";
    reset();
  }

  if (guess === word) {
    info.innerHTML = "<span class='correct'>CORRECT</span>";
    score += 1;
    correct += 1;
    attempts = 0;
    setLevel();
  } else {
    info.innerHTML = "<span class='incorrect'>Bzzzt! That's not right!</span>";
    score -= 1;
    attempts += 1;
  }

  updateBoard();
}

function setLevel() {
  if (level == 1) {
    randomWord(lvlOneWords);
  } else if (level == 2) {
    randomWord(lvlTwoWords);
  } else if (level == 3) {
    randomWord(lvlThreeWords);
  } else if (level == 4) {
    randomWord(lvlFourWords);
  } else if (level == 5) {
    randomWord(lvlFiveWords);
  } else if (level == 6) {
    randomWord(lvlSixWords);
  } else if (level == 7) {
    randomWord(lvlSevenWords);
  } else if (level == 8) {
    randomWord(lvlEightWords);
  } else if (level == 9) {
    info.innerHTML =
      "<span class='win'>You Win! Great job! </br> You can reset or keep playing.</span>";
  }

  console.log(`Word: ${word}`);
  usersWord.innerHTML = scrambleWord(word);
}

playBtn.addEventListener("click", function(e) {
  rules.classList.toggle("hidden");
  gameContainer.classList.remove("hidden");
});

submitBtn.addEventListener("click", function(e) {
  checkAnswer(userGuess.value.toLowerCase());
  userGuess.value = "";
});

window.addEventListener(
  "keypress",
  function(e) {
    if (e.keyCode == 13) {
      checkAnswer(userGuess.value.toLowerCase());
      userGuess.value = "";
    }
  },
  false
);

resetBtn.addEventListener("click", function(e) {
  reset();
  setLevel();
  guessContainer.classList.remove("hidden");
  userGuess.value = "";
});

setLevel();