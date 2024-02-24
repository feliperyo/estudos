const companies = [
    { name: 'Samsung', marketValue: 50, foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, foundedOn: 1976 },
]

// const NewCompanies = companies.map(item => {
//     item.marketValue = item.marketValue / 10 + item.marketValue
//     return item
// })
//     .filter(item => item.foundedOn < 1990)
//     .reduce((acc, item) => acc + item.marketValue, 0)



// console.log(NewCompanies)

// MESMA COISA QUE

const add10Percent = (item) => {
    item.marketValue = item.marketValue / 10 + item.marketValue
    return item
}
const filterCompanies = (item) => item.foundedOn < 1990

const calculateTotalMarketValue = (acc, item) => acc + item.marketValue

const NewCompanies2 = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(calculateTotalMarketValue,0)



console.log(NewCompanies2)