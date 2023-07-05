let module = document.getElementbyId("module");

if(module){
    module.addEventListener("click", () => {

        module.classList.toggle("active"); 
    });
}

alert('funciona pero tu codigo no');