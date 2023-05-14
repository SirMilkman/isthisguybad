js
const googoo = document.getElementsByClassName("googoo")[0];

function one() {
  setTimeout(two, 700);
  googoo.innerHTML = "GENERATING.";
}
function two() {
  setTimeout(three, 700);
}
function three() {
  setTimeout(four, 700);
  googoo.innerHTML = "GENERATING...";
}
function four() {
  setTimeout(five, 700);
  googoo.innerHTML = "GENERATING.";
}
function five() {
  setTimeout(siz, 700);
  googoo.innerHTML = "GENERATING..";
}
function siz() {
  setTimeout(myGreeting, 700);
  googoo.innerHTML = "GENERATING...";
}

function myGreeting() {
  let wawa = Math.floor(
    cyrb128(
      document.getElementsByClassName("searchbox")[0].value.toLowerCase()
    ) / 1073741824
  );
  const Wawatext = document
    .getElementsByClassName("searchbox")[0]
    .value.toLowerCase();
  var elements = document.getElementsByClassName("googoo")[0];

  if (Wawatext != "") {
    if (wawa === 0) {
      googoo.innerHTML = "they're cool";
    } else if (wawa === 1) {
      googoo.innerHTML = "oh wow they suck";
    } else if (wawa === 2) {
      googoo.innerHTML = "maybe? idk";
    } else if (wawa === 3) {
      googoo.innerHTML = "i dunno lol";
    }
  }
   if (Wawatext === "waporwave"){
     setText("seeded randomization mechanic and other fancy stuff")
    
  }
  if (Wawatext === "asdf"){
     setText("lol lmao i type this everytime i test")
    
  }
  if (Wawatext === "Luigi"){
     setText("Lets a go")
    
  }
  if (Wawatext === "sirmilkman"){
     setText("css styling - basically made the site nice")
    
  }
  if (Wawatext === "jetveam"){
     setText("made search bar scale with window + lots of other stuff")
    
  }
  if (Wawatext === "jeff bezos"){
     setText("yeah... no")
    
  }
  if (Wawatext === "skooka"){
     setText("they were in call when we made this")
    
  }
  if (Wawatext === "timmy"){
     setText("he was in call when we made this")
    
  }
  if (Wawatext === "hitler"){
     setText("really..?")
    
  }
  if (Wawatext === "me"){
     setText("you're great :)")
    
  }
  if (Wawatext === "mario"){
     setText("wahoo")
    
  }
  if (Wawatext === "jontron"){
     setText("we didnt ever find out lol")
    
  }
  if (Wawatext === "you"){
     setText("im the best B)")
    
  }
  if (Wawatext === "chatgpt"){
     setText("beep boop")
    
  }
  if (Wawatext === "ashk"){
     setText("special case for ash k")
    
  }
  if (Wawatext === "test"){
     setText("you found the test message")
    
  }
  if (Wawatext === "github"){
     setText("fine jetveam i will host this on github")
    
  }
  if (Wawatext === "elon musk"){
     setText("evil to the max")
    
  }
  if (Wawatext === "satan"){
     setText("copy text from elon musk")
    
  }
}

function setText(_txt) {
  googoo.innerHTML = _txt;
}

function myFunctionTest() {
  googoo.innerHTML = "GENERATING";
  setTimeout(one, 700);
  //googoo.innerHTML =
  //what is a switch statement :)
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    myFunctionTest();
  }
});

function cyrb128(str) {
  let h1 = 1779033703,
    h2 = 3144134277,
    h3 = 1013904242,
    h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  return (h1 ^ h2 ^ h3 ^ h4) >>> 0;
}
