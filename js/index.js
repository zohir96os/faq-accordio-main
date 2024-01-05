//Get elements
let btns = document.querySelectorAll(".container h3 i");
let description = document.querySelectorAll(".container p");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    this.classList.toggle("fa-plus-circle");
    this.classList.toggle("fa-minus-circle");
    description[i].classList.toggle("show-content");
  });
});
