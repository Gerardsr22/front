let modalButtons = document.querySelectorAll(".modal-button");
let overlay =  document.querySelector(".overlay");
let closeButton = document.querySelector(".close-button");
let modal = document.querySelector(".modal")
let chekButton = document.querySelector(".checkout")

modalButtons.forEach(modalButton => {
    modalButton.addEventListener("click", () => {
        overlay.classList.add("active"); 
        modal.classList.add("active");
    });
})

overlay.addEventListener("click",() => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    
});

closeButton.addEventListener("click", () => {
    overlay.classList.remove("active"); 
    modal.classList.remove("active");
});


