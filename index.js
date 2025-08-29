const show_pricing = document.querySelectorAll(".shop");
const priceIncrease = document.querySelectorAll(".quantity");
const counterItem = document.querySelectorAll(".counter");
const increment = document.querySelectorAll(".increaser");
const decrement = document.querySelectorAll(".decreaser");
const container = document.getElementById("classSection");
const totalItem = document.getElementById("totalItem")

const carts = Array(show_pricing.length).fill(0);



show_pricing.forEach(function(item, i)
{
    item.addEventListener("click", (event) => {
        event.preventDefault();
        item.classList.add("close");
        if(priceIncrease[i] && counterItem[i]) {
            priceIncrease[i].classList.remove("close");
            carts[i]++;
            counterItem[i].innerText = carts[i];
            console.log(carts);

        }

    });
    if (increment[i]){
         increment[i].addEventListener("click" ,function(event){
            event.preventDefault();
            carts[i]++;
            counterItem[i].innerText = carts[i];
            console.log(carts);

         })
    }

    if(decrement[i]){

        decrement[i].addEventListener("click" , function(event){
        event.preventDefault();

            if (carts[i] === 1) {
                priceIncrease[i].classList.add("close");
                item.classList.remove("close");
            }

            if(carts[i] > 0) {
                carts[i]--;
                counterItem[i].innerText = carts[i];
                console.log(carts);
                
            }

        })
    }

    

})
