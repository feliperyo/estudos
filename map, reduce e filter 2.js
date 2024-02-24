const companies = [
    { name: 'Samsung', marketValue: 50, foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, foundedOn: 1976 },
]

const sub10Percent = item => {
    item.marketValue = item.marketValue - item.marketValue / 10
    return item
}

const foundedYear=item => item.foundedOn > 1980

const TotalValue=(acc, item) => acc + item.marketValue


const NewCompanies = companies
    .map(sub10Percent)
    .filter(foundedYear)
    .reduce(TotalValue, 0)

console.log(NewCompanies)