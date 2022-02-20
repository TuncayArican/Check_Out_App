let minus= document.querySelectorAll(".fa-minus")
let plus= document.querySelectorAll(".fa-plus")
let quantity=document.querySelectorAll("#product-quantity")
let product_line_price=document.querySelectorAll(".product-line-price")
let remove=document.querySelectorAll(".remove-product")
let cart_subtotal=document.querySelectorAll("#cart-subtotal p")[1]
let cart_tax=document.querySelectorAll("#cart-tax p")[1]
let cart_total=document.querySelectorAll("#cart-total p")[1]
let cart_shipping=document.querySelectorAll("#cart-shipping p")[1]
let strong=document.querySelectorAll(".product-price p strong")
let subtotal=0;
let products = document.querySelectorAll(".product")
price()

for (let i = 0; i < quantity.length; i++) {
    minus[i].addEventListener("click", ()=>{
        quantity[i].innerText=Number(quantity[i].innerText)-1;
        if(quantity[i].innerText==0){
        products[i].remove();
        }else {
            product_line_price[i].innerText=(Number(strong[i].innerText)*
            Number(quantity[i].innerText)).toFixed(2)
            }
            price()
})
    plus[i].addEventListener("click", ()=>{
        quantity[i].innerText=Number(quantity[i].innerText)+1;
        product_line_price[i].innerText=(Number(strong[i].innerText)*
        Number(quantity[i].innerText)).toFixed(2)
        price()
})
}
for (let i = 0; i < quantity.length; i++) {
remove[i].addEventListener("click", ()=>{
    products[i].remove();
    delete products[i];
    price()
    console.log(products);
}
) }


function price(){ 
        product_line_price.forEach(e => {
        subtotal+=Number(e.innerText)
        });
        cart_subtotal.innerText=subtotal.toFixed(2)
        cart_tax.innerText=((cart_subtotal.innerText)*0.18).toFixed(2);
        cart_shipping.innerText=15
        cart_total.innerText=(Number(cart_shipping.innerText)+Number(cart_tax.innerText)+Number(cart_subtotal.innerText)).toFixed(2)
        subtotal=0;
};


