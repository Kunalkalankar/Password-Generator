let inputSlider = document.getElementById("inputslider");
let sliderValue = document.getElementById("slidervalue");
let passBox = document.getElementById("passbox");
let lowerCase = document.getElementById("lowercase");
let upperCase = document.getElementById("uppercase");
let Numbers = document.getElementById("numbers");
let Symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allLowerCase = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allCharacters = "~!@#$%^&*";

function generatePassword() {
  let genpas = "";
  let allChars = "";

  allChars += lowerCase.checked ? allLowerCase : "";
  allChars += upperCase.checked ? allUpperCase : "";
  allChars += Numbers.checked ? allNumbers : "";
  allChars += Symbols.checked ? allCharacters : "";

  let i = 1;
  while (i <= inputSlider.value) {
    genpas += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genpas;
}

copyIcon.addEventListener("click", () => {
  if (passBox.value != 0 || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 2000);
  }
});
