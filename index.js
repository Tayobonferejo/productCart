const show_pricing = document.querySelectorAll(".shop"); //  section that shoe the cart icon section 
const priceIncrease = document.querySelectorAll(".quantity");
const counterItem = document.querySelectorAll(".counter");
const increment = document.querySelectorAll(".increaser"); // increasing plus sign
const decrement = document.querySelectorAll(".decreaser"); // decreasing minus sign
const container = document.getElementById("classSection");
const totalItem = document.getElementById("totalItem") // id that output the totol number of individual iten
const carts = Array(show_pricing.length).fill(0);
const priceBlock = document.getElementById("priceSection")


// add event listener to chnange the  cart section to the increase and decrease section


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
            totalItem.innerText = calculateSum(carts);

            const singleItem = document.createElement("p");
            const multipeItem = document.createElement("p");
            
            singleItem.innerHTML = `${[i]} is ${carts[i]}`;
            priceBlock.appendChild(singleItem);
            console.log(priceBlock);

        }

    });


    if (increment[i]){
         increment[i].addEventListener("click" ,function(event){
            event.preventDefault();
            carts[i]++;
            counterItem[i].innerText = carts[i];
            console.log(carts);
            totalItem.innerText = calculateSum(carts);

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
                totalItem.innerText = calculateSum(carts);
                
            }

        })
    }

})

// this section of code add the total number of item in each individual cart to an element with in the dom

function calculateSum(carts) {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
        sum += carts[i]
    }
    console.log(`Current sum: ${sum}`);
    return sum;
}
