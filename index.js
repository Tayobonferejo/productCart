const show_pricing = document.querySelectorAll(".shop");

for(let i=0; i<show_pricing.length; i++){
    show_pricing[i].addEventListener("click", (event)=>{
        event.preventDefault();
        // alert("hello world!");
        show_pricing[i].classList.add("close");
        

    })
}