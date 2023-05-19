/* const sliderRange = document.querySelector("#myRange");
const sliderBack = document.querySelector(".slider");
const sliderThumb = window.getComputedStyle(sliderBack, '::-webkit-slider-thumb');

function setWidth(){
        const value = sliderRange.value;
          sliderThumb.style.width = `${value}px`;
          console.log(sliderThumb);

    
}

sliderRange.addEventListener("input", setWidth);
 */

 //?sliderThumb.addEventListener("resize", setWidth);
/*  NB resize  event is  typically used for windows or element resizing and not in tracking  changes to the size of a specific element */
//!const sliderThumb = document.querySelector(".slider::-webkit-slider-thumb"); in this context the element will not be found due to pseudo selector to solve this issue: const sliderThumb = window.getComputedStyle(sliderBack, '::-webkit-slider-thumb');
const updateEl = document.querySelector(".design");
const btnEl = document.querySelector("#checkbox");
const trialEl = document.querySelector(".ctn");
const errorMessage = document.querySelector(".error");
errorMessage.style.color = "red";

let buttonclicked = false;
function toggleDiscount(){
 
    if (buttonclicked === false) {
        updateEl.textContent = "35% discount";
        buttonclicked = true;
      } else {
        updateEl.textContent = "25% discount";
        buttonclicked = false;
      }
}
btnEl.addEventListener("click", toggleDiscount);


