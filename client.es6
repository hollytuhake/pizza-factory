console.log('sourced');
let orderArray = [];
let orderCost = 0
const TAX_RATE = 1.07

function Pizza (...toppingsArray){
        if(toppingsArray.length==0){
            this.toppings=['cheese']
        }else{
        this.toppings = toppingsArray;
        }
    orderArray.push(this);   
}

pizza1 = new Pizza('olives', 'sausage');
console.log(pizza1);

pizza2 = new Pizza();
console.log(pizza2);

console.log(orderArray);

function orderTracker(orderArray){
    for (i=0;i<orderArray.length;i+=1){
        orderCost = (orderCost + 10.99 + .99 * orderArray[i].toppings.length)*TAX_RATE;
    }
    console.log(orderCost);
}

orderTracker(orderArray);
