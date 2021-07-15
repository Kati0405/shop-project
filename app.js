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

//like-clicked
let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach(btn => {
    btn.onclick= function (){
        btn.classList.toggle("like-toggle"); 
    }
})

//scroll

// window.addEventListener("scroll",() => {
//     let scrolled = window.scrollY;
//     let scrollable = document.documentElement.scrollHeight - window.innerHeight;

//     return scrolled === scrollable ? 
//         function openModal() {
//             modal.classList.add("show");
//             modal.classList.remove("hide");
//         }
//     }
// }
// )
