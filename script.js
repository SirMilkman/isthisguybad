// Press Ctrl/Cmd+Shift+I!


function myFunctionTest() {
  let wawa = Math.floor(cyrb128(document.getElementsByClassName("searchbox")[0].value.toLowerCase())/1073741824)
  //document.getElementsByClassName("googoo")[0].innerHTML = 
  //what is a switch statement :)
  if (wawa === 0){
    document.getElementsByClassName("googoo")[0].innerHTML = "no"
  }else if (wawa === 1){
    document.getElementsByClassName("googoo")[0].innerHTML = "yes"
  }else if (wawa === 2){
    document.getElementsByClassName("googoo")[0].innerHTML = "maybe"
  }else if (wawa === 3){
    document.getElementsByClassName("googoo")[0].innerHTML = "i dunno"    
  }
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        myFunctionTest()
    }
});

function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
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
    return (h1^h2^h3^h4)>>>0;
}