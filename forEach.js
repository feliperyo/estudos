const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueTotal = 0
let finalValue = 0


cart.forEach(value => {
    finalValueTotal += value
});

function discountValue(value, discount) {
    const result = (value * discount) / 100
    return result
}

cart.forEach(value => {
    if (value > 30) {
        finalValue += value - discountValue(value, 10)
    } else {
        finalValue += value
    }
});

let economizou = Intl.NumberFormat("pt-bt", {
    style: "currency",
    currency: "BRL"
}).format(finalValueTotal - finalValue)


console.log(`O total da compra é R$${finalValueTotal.toFixed(2)}. 
Adicionando o desconto, você paga R$${finalValue.toFixed(2)}
Você economizou R$${economizou}`)

