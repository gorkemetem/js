let cart = [
    {id:1, pruductName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, pruductName:"Bardak", quantity:2, unitPrice:30},
    {id:3, pruductName:"Kalem", quantity:1, unitPrice:20},
    {id:4, pruductName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, pruductName:"Kitap", quantity:3, unitPrice:30},
    {id:6, pruductName:"Pot", quantity:5, unitPrice:150},
]

cart.map(product=>{
    console.log(product.pruductName + " : " + product.unitPrice * product.quantity)
})

let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity, 0)
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)






function addToCart(sepet) {
    sepet.push({id:7, pruductName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)


let sayi = 10
function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)

