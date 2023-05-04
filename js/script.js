
window.addEventListener("scroll",()=>{
    if(scrollY>180){
        document.querySelector(".dis").classList.add("active");
    }else{
        document.querySelector(".dis").classList.remove("active");
    }
})