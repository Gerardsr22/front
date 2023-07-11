let modalButtons = document.querySelectorAll(".modal-button");
let overlay =  document.querySelector(".overlay");
let closeButton = document.querySelector(".close-button");
let modal = document.querySelector(".modal")
let chekButton = document.querySelector(".checkout")



let desButton = document.querySelector(".featured-desplegable-visible-button")
let desplegable = document.querySelector(".featured-desplegable")
let desplegableNOV = document.querySelector(".featured-desplegable-novisible")


desButton.addEventListener("click", () => {
    desplegable.classList.toggle("active")
    desplegableNOV.classList.toggle("active")
    desButton.classList.toggle("active")
    
});


modalButtons.forEach(modalButton => {
    modalButton.addEventListener("click", () => {
        overlay.classList.add("active"); 
        modal.classList.add("active");
    });
})

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    
});

closeButton.addEventListener("click", () => {
    overlay.classList.remove("active"); 
    modal.classList.remove("active");
});


