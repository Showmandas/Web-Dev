const totalCost = (products) => {

    let danoCost=products[0].price;
    let taazaCost=products[1].price;
    let freshCost=products[2].price;
  
    let cost= danoCost + taazaCost + freshCost;
    return cost;
      
  
  };
  
  var Costtotal=[
    { name: "Dano Milk", price: 500 },
     { name: "Taaza Tea", price: 200},
      { name: 'Fresh Sugar', price:300}
    ];
  console.log(totalCost(Costtotal));
  