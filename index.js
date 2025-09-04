const show_pricing = document.querySelectorAll(".shop"); //  section that shoe the cart icon section 
const priceIncrease = document.querySelectorAll(".quantity");
const counterItem = document.querySelectorAll(".counter");
const increment = document.querySelectorAll(".increaser"); // increasing plus sign
const decrement = document.querySelectorAll(".decreaser"); // decreasing minus sign
const container = document.getElementById("classSection");
const totalItem = document.getElementById("totalItem") // id that output the totol number of individual iten
const carts = Array(show_pricing.length).fill(0);
const priceBlock = document.getElementById("priceSection");
let cartHistory = [];
const priceOfItem = [6.50,7.00,8.00,5.50,4.00,5.00,4.50,4.50];

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
            const multipeItem = document.createElement("p");
            renderCart(i);
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
            renderCart(i);

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
                renderCart(i);
                
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


function renderCart(i) {
    //store this click order
    let totalSum = 0;
    cartHistory.push(i)
    addToCart();
}
function addToCart() {
    priceBlock.innerHTML = "";
    const uniqueOrder = [...new Set(cartHistory)]
    uniqueOrder.forEach((i)=> {
        const subTotal = i * priceOfItem[i];
        const singleItem = document.createElement("div");
        singleItem.className = "item_flex";
        singleItem.innerHTML = `<p>${i} @${priceOfItem[i]}</p> <p>@${carts[i]} </p> <p>@${carts[i]*priceOfItem[i]}</p> <p><a href="#">delete</a></p>`; //table for price list 
        priceBlock.appendChild(singleItem);
    })
}

