//add to cart
let productsCountEl = document.getElementById('products-count');
let addToCartBtns = document.querySelectorAll('.btn-add-to-cart');
for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click",function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

//modal

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

// moreDetailsBtns.forEach(btn => {
//     btn.addEventListener("click", function(){
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//     })
// })

// closeBtn.addEventListener("click", function(){
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// })

moreDetailsBtns.forEach(btn => {
    btn.addEventListener("click", openModal)
})

closeBtn.addEventListener("click", closeModal)
        
        function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }


        function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        }

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
       closeModal() 
    }
})

//like-clicked (several methods)

let likeBtns = document.querySelectorAll(".like");

// likeBtns.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = "red";
//   })
// );

//1

// likeBtns.forEach((item) =>
// item.addEventListener("click", function() {
//     if (item.classList.contains("liked")) {
//         item.classList.remove("liked");
//     } else {
//         item.classList.add("liked")
//     }
// })
// );

// 2
likeBtns.forEach((item) =>
item.addEventListener("click", function() {
    item.classList.toggle("liked")
})
);

// 3
// likeBtns.forEach(btn => {
//     btn.onclick= function (){
//         btn.classList.toggle("liked"); 
//     }
// })

// show modal by scroll

function showModalByScroll() {
    if (window.pageYOffset > document.body.scrollHeight/2){
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}
window.addEventListener("scroll", showModalByScroll);
    
//slick slider

$(".slider-block").slick({
dots: true
});
    
// change product quantity 

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInputs = document.querySelectorAll(".products-quantity input");

// function addMoreProducts(inc, dec, input) { 
//     let currentCount = +input.value;
//     currentCount +=1
//     quantityInputs.value = currentCount;
//     if (currentCount >= 5) {
//        inc.disabled = true;
//     } else {
//         dec.disabled = false; 
//     }
// }

// function addLessProducts(inc, dec, input) {
//     let currentCount = +input.value;
//     currentCount -=1
//     quantityInputs.value = currentCount;
//     if (currentCount <= 1) {
//         dec.disabled = true;
//     } else {
//         inc.disabled = false;
//     }
// }

// incrementBtns.addEventListener("click", addMoreProducts);
// decrementBtns.addEventListener("click", addLessProducts);



quantityInputs.forEach(function(productsQuantity){
    let inc = productsQuantity.nextElementSibling,
        dec = productsQuantity.previousElementSibling;

    inc.addEventListener("click", function() {
        let currentCount = +productsQuantity.value;
        currentCount +=1
        productsQuantity.value = currentCount;
        if (currentCount >= 5) {
            inc.disabled = true;
        } else {
            dec.disabled = false; 
        }
    })
    dec.addEventListener("click", function() {
        let currentCount = +productsQuantity.value;
    currentCount -=1
    productsQuantity.value = currentCount;
    if (currentCount <= 1) {
        dec.disabled = true;
    } else {
        inc.disabled = false;
    }
    })

})



