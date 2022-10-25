"use strict";
console.log("accordion.js");

const allTitlesArr = document.querySelectorAll(".accTitle");
const accTextElArr = document.querySelectorAll(".accText");
console.log("allTitlesArr ===", allTitlesArr);

// functions
// vienu metu turetu buti atidarytas tik vienas accordionas
const hideAllOpenAccordionElements = function () {
  // console.log('accTextElArr ===', accTextElArr);
  for (let textEl of accTextElArr) {
    // console.log('textEl ===', textEl);
    // textEl.classList.remove('open');
    textEl.style.height = 0;
  }
};

function accOpenHandler(event) {
  // console.log('click');
  // el ant kurio paspaudziau???
  const currentTitleEl = event.target;
  // KAIP ATSPAUSDINTI event.target ?????
  // console.log(event.target);
  hideAllOpenAccordionElements();
  // parodyti acordiono texta
  // currentTitleEl.nextElementSibling.classList.toggle('open');
  const currAccTextEl = currentTitleEl.nextElementSibling;
  currAccTextEl.style.height = currAccTextEl.scrollHeight + "px";
}

for (let titleEl of allTitlesArr) {
  titleEl.addEventListener("click", accOpenHandler);
}

/// jei yra atidarytas kazkuris accordionas
// tai turiu ji uzdaryti
// ir tada atidaryti ta kuris paspaustas naujai
