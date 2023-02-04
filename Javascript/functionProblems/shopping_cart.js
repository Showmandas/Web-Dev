let shop=[
    {name:'shirt',price:300},
    {name:'punjabi',price:500},
    {name:'pant',price:250},
    {name:'belt',price:120},
]

function shopping_cart(products){
    let sum=0
    for(let i=0;i<products.length;i++){
        let product=products[i]
        sum = sum + product.price
    }

    return sum

}

var shopping=shopping_cart(shop)
console.log(shopping);