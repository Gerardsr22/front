let modalButtons = document.querySelectorAll(".modal-button");
let overlay =  document.querySelector(".overlay");
let closeButton = document.querySelector(".close-button");
let modal = document.querySelector(".modal")
let chekButton = document.querySelector(".checkout")



let desButton = document.querySelectorAll(".featured-desplegable-visible-button")

desButton.forEach(desButton => {
    desButton.addEventListener("click", () => {
        desButton.closest('.featured-desplegable').classList.toggle("active")
        desButton.closest('.featured-desplegable').querySelector('.featured-desplegable-novisible').classList.toggle("active")
        desButton.classList.toggle("active")
    }); 
});

let tabButton = document.querySelectorAll(".tabs-uptab-tab")
let tabsInfo = document.querySelectorAll(".tabs-info")

tabButton.forEach(tabButton => {
    tabButton.addEventListener("click", () =>{
        tabButton.classList.toggle("active");
        tabButton.querySelector('.tabs-uptab-tab').classList.toggle("active");
        
        
        tabsInfo.forEach(tabsInfo => {
            console.log(tabButton.dataset.color);
            if(tabButton.dataset.number == tabsInfo.dataset.number) {
                tabsInfo.classList.toggle("active");
            }
        })
    });

})



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


