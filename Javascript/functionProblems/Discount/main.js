let applybtn=document.getElementById('applybtn');

applybtn.addEventListener('click',function(){
    let price=document.getElementById('price').innerText;
    let priceval=parseFloat(price);
    let discval=priceval * 0.3;
    let finalPrice=priceval-discval;
    document.getElementById('pay').innerHTML=finalPrice;

    
})
