var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

console.log(outputDiv)
console.log(txtInput)

var serverURL = "	https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error logged : " + error);
}


function clickHandler() {
    inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler)

}



btnTranslate.addEventListener("click", clickHandler);
