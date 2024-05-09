console.log("hello world!");

const myName = 'Please have mercy 🥺';
const h1 = document.querySelector(".heading-primary")

console.log(myName);
console.log(h1);



h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = 'lightgray';
  h1.style.padding = "4rem";
})

const yearEL = document.querySelector('.year');
constCurrentYear = new Date ().getFullYear();
console.log(constCurrentYear);
yearEL.textContent = constCurrentYear;

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

