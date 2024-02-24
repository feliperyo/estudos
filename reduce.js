const cart = [
    { productName: 'Abóbora', valuePerkg: 5, kg: 1 },
    { productName: 'Pepino', valuePerkg: 3.55, kg: 1.3 },
    { productName: 'Limão', valuePerkg: 1.2, kg: 2 },
    { productName: 'Abacate', valuePerkg: 5.4, kg: 1.67 },
    { productName: 'Morango', valuePerkg: 11.9, kg: 3 },
]

const totalValue = cart.reduce((acc, value) => {


    let mult = value.valuePerkg * value.kg
    return acc + mult

}, 0)

console.log(`A sua compra ficou no total de R$${totalValue.toFixed(2)}`)