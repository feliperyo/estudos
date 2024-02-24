const list = [
    { name: 'Rodolfo', vip: 'true' },
    { name: 'Natasha', vip: 'true' },
    { name: 'Iara', vip: 'false' },
    { name: 'Felipe', vip: 'true' },
    { name: 'Ana', vip: 'false' },
    { name: 'Pedro', vip: 'false' },
    { name: 'Guilherme', vip: 'true' },
    { name: 'Lilian', vip: 'true' },
    { name: 'Marcos', vip: 'true' },
    { name: 'Filipe', vip: 'false' }
]

const vip = list.map((item, index) => {

    if (item.vip === 'true') {
        item.vip = "black"
    } else {
        item.vip = "blue"
    }

    const newItem = `${index + 1}) ${item.name}: ${item.vip}`
    return newItem
})
console.log(vip)


const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Natasha', testGrade: 9 },
    { name: 'Iara', testGrade: 5 },
    { name: 'Felipe', testGrade: 7 },
    { name: 'Ana', testGrade: 4 },
    { name: 'Pedro', testGrade: 2 },
    { name: 'Guilherme', testGrade: 1 },
    { name: 'Lilian', testGrade: 10 },
    { name: 'Marcos', testGrade: 8 },
    { name: 'Filipe', testGrade: 3 }
]

const result = students.map((item, index) => {
    if (item.testGrade > 5) {
        testGrade = "Aprovado(a)"
    } else if (item.testGrade === 5) {
        testGrade = "Recuperação"
    } else {
        testGrade = "Reprovado(a)"
    }

    const aprove = `${index}) ${item.name}: ${testGrade}`
    return aprove

})
console.log(result)