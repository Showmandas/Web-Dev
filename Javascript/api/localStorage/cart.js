const addItem=()=>{
    const device=document.getElementById('device').value;
    const quantity=document.getElementById('quantity').value;
    device.innerHTML='';
    quantity.innerHTML='';
    console.log(device,quantity);
    saveToLocalStorage(device,quantity)
}


getValueFromInput=()=>{
    let cart={}
    const stored=localStorage.getItem('cart');
    if(stored){
        cart=JSON.parse(stored)
    }
    return cart;
}

saveToLocalStorage=(product,quantity)=>{
    const cart=getValueFromInput();
    cart[product]=quantity;
    const cartstr=JSON.stringify(cart);
    // console.log(cart);
    localStorage.setItem('cart',cartstr);

}