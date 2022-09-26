import emojis from './emojis.json' assert {type: 'json'};

let input = document.querySelector("#input");
let output_field = document.querySelector("#output-field");
let output = document.querySelector("#output");
let copy = document.querySelector("#copy");

copy.addEventListener("click", function () {
  output.select();
  document.execCommand("copy");
  output_field.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    output_field.classList.remove("active");
  }, 2500);
});

function emojify() {
  output.value = autoReplace(input.value, emojis);
}

function autoReplace(text, correction) {
  const reg = new RegExp(Object.keys(emojis).join("|"), "g");
  return text.replace(reg, (matched) => emojis[matched]);
}
