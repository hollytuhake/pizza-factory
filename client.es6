console.log('sourced');

function Pizza (...toppingsArray){
        if(toppingsArray.length==0){
            this.toppings=['cheese']
        }else{
        this.toppings = toppingsArray;
        }
}

pizza1 = new Pizza('olives', 'sausage');
console.log(pizza1);

pizza2 = new Pizza();
console.log(pizza2);

