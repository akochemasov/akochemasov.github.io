const result = document.getElementById('result');

var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";

var grammarRu =
  "#JSGF V1.0; grammar colors; public <color> = красный | синий ;";

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
// speechRecognitionList.addFromString(grammarRu, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = "en-US";
// recognition.lang = "ru-RU";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

//var diagnostic = document.querySelector('.output');
var bg = document.querySelector("html");

document.body.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = function (event) {
  console.log("result", event);
  var color = event.results[0][0].transcript;
  console.log(color);
  //diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
  result.innerHTML = color;
};

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
console.log("start", recognition);

function getLocalStream() {
  navigator.mediaDevices.getUserMedia({audio: true})
    .then( stream => {
      console.log('You let me use your mic!');
    }).catch( err => {
      console.log('No mic for you!', err);
    });
}

getLocalStream();