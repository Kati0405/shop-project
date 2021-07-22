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
// let quantityInputs = document.querySelectorAll(".products-quantity input");

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



// quantityInputs.forEach(function(productsQuantity){
//     let inc = productsQuantity.nextElementSibling,
//         dec = productsQuantity.previousElementSibling;

//     inc.addEventListener("click", function() {
//         let currentCount = +productsQuantity.value;
//         currentCount +=1
//         productsQuantity.value = currentCount;
//         if (currentCount >= 5) {
//             inc.disabled = true;
//         } else {
//             dec.disabled = false; 
//         }
//     })
//     dec.addEventListener("click", function() {
//         let currentCount = +productsQuantity.value;
//     currentCount -=1
//     productsQuantity.value = currentCount;
//     if (currentCount <= 1) {
//         dec.disabled = true;
//     } else {
//         inc.disabled = false;
//     }
//     })

//     function toggleButtonsState(count) {
//   decrementBtns.disabled = count <= 1;
//   incrementBtns.disabled = count >= 5;
// }
// incrementBtns.addEventListener("click", function () {
//   let currentCount = +quantityInputs.value;
//   let nextCount = currentCount + 1;
//   quantityInputs.value = nextCount;
//   toggleButtonsState(nextCount);
// });
// decrementBtns.addEventListener("click", function () {
//   let currentCount = +quantityInputs.value;
//   let nextCount = currentCount - 1;
//   quantityInputs.value = nextCount;
//   toggleButtonsState(nextCount);
// });

// })

// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let quantityInputs = document.querySelectorAll(".products-quantity input")[0];
// let currentCount = +quantityInputs.value;

// function toggleButtonsState(count) {
//   decrementBtns.disabled = count <= 1;
//   incrementBtns.disabled = count >= 5;
// }
// toggleButtonsState(currentCount);

// incrementBtns.addEventListener("click", function () {
//     let currentCount = +quantityInputs.value;
//     let nextCount = currentCount + 1;
//     quantityInputs.value = nextCount;
//     toggleButtonsState(nextCount);
//   });
//   decrementBtns.addEventListener("click", function () {
//     let currentCount = +quantityInputs.value;
//     let nextCount = currentCount - 1;
//     quantityInputs.value = nextCount;
//     toggleButtonsState(nextCount);
//   });


  let decrementBtns = document.querySelectorAll(".decrement-button");
  let incrementBtns = document.querySelectorAll(".increment-button");
  let quantityInputs = document.querySelectorAll(".products-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField
    };

this.toggleButtonsState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 5;
  };

  this.toggleButtonsState();

  this.increment = function () {

    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount + 1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonsState(nextCount);
  };

  this.decrement = function () {
    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount - 1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonsState(nextCount);
};

this.domRefs.incrementBtn.addEventListener(
    "click", 
    this.increment.bind(this)
    );

this.domRefs.decrementBtn.addEventListener(
    "click", 
    this.decrement.bind(this)
    );
}

// let counter = new Counter(incrementBtns, decrementBtns, quantityInputs);
// console.log(counter);




let counter = [];

quantityInputs.forEach((quantity, i) => {
    counter[i] = new Counter(incrementBtns[i], decrementBtns[i], quantity)
});

