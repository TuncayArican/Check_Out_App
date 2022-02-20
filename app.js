let minus= document.querySelectorAll(".fa-minus")
let plus= document.querySelectorAll(".fa-plus")
let quantity=document.querySelectorAll("#product-quantity")
let product_line_price=document.querySelectorAll(".product-line-price")
let remove=document.querySelectorAll(".remove-product")
let cart_subtotal=document.querySelectorAll("#cart-subtotal p")
let cart_tax=document.querySelectorAll("#cart-tax p")
let cart_total=document.querySelectorAll("#cart-total p")
let cart_shipping=document.querySelectorAll("#cart-shipping p")
let subtotal=0;
let strong=document.querySelectorAll(".product-price p strong")

for (let i = 0; i < quantity.length; i++) {
    minus[i].addEventListener("click", ()=>{
        quantity[i].innerText=Number(quantity[i].innerText)-1;
        if(quantity[i].innerText==0){
        quantity[i].parentElement.parentElement.parentElement.remove();
        }else {
            product_line_price[i].innerText=Number(strong[i].innerText)*
            Number(quantity[i].innerText)
            }
            price()
})
    plus[i].addEventListener("click", ()=>{
        quantity[i].innerText=Number(quantity[i].innerText)+1;
        product_line_price[i].innerText=Number(strong[i].innerText)*
        Number(quantity[i].innerText)
        price()
})
    remove[i].addEventListener("click", ()=>{
    remove[i].parentElement.parentElement.parentElement.remove();
    price()
})
}
function price(){ 
    for (let i = 0; i < quantity.length; i++){
        subtotal+=Number(product_line_price[i].innerText)
    }
        cart_subtotal[1].innerText=subtotal.toFixed(2)
        cart_tax[1].innerText=((cart_subtotal[1].innerText)*0.18).toFixed(2);
        cart_shipping[1].innerText=15
        cart_total[1].innerText=(Number(cart_shipping[1].innerText)+Number(cart_tax[1].innerText)+Number(cart_subtotal[1].innerText)).toFixed(2)
        subtotal=0;
};

