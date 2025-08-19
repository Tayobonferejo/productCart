const show_pricing = document.querySelectorAll(".shop");
const priceIncrease = document.querySelectorAll(".quantity")
const counterItem = document.querySelectorAll(".counter");

const carts = [0, 0 , 0 , 0 , 0, 0, 0]


for(let i=0; i<show_pricing.length; i++){
    show_pricing[i].addEventListener("click", (event)=>{
        event.preventDefault();
        // alert("hello world!");
        show_pricing[i].classList.add("close");
        priceIncrease[i].classList.remove("close");
        carts[i]++;
        counterItem[i].innerText = carts[i];
        console.log(carts[i]);
        
    })
}

