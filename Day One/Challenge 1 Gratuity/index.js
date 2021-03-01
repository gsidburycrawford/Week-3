var billAmount = 88;
function gratutity() {
    return (billAmount * 0.2);
}

function totalWithGrat(subTotal) {
     return subTotal + gratutity();
}

console.log('Your total including gratuity is:' + totalWithGrat(billAmount));