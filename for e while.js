

const clickButton = document.querySelector('button')

const contacts = [
    { name: 'Rodolfo', number: '(19)94343-3434' },
    { name: 'Felipe', number: '(19)96969-3434' },
    { name: 'Natasha', number: '(19)99696-3434' },
    { name: 'Lilian', number: '(19)93636-3434' },
    { name: 'Marcos', number: '(19)93232-3434' },
]


function searchName() {
    let p = document.querySelector('p')
    let input = document.querySelector('input').value

    for (let i = 0; i < contacts.length; i++) {
        if (input.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = contacts[i].number

            break
        } else {
            p.innerHTML = 'Contato não encontrado'
        }
    }

}

function searchName2() {
    let h4 = document.querySelector('h4')
    let input = document.querySelector('input').value

    for (const contact of contacts) {
        if (input.toLowerCase() === contact.name.toLowerCase()) {
            h4.innerHTML = contact.number

            break
        } else {
            h4.innerHTML = 'Contato não encontrado'
        }
    }
}

function searchName3() {
    let h3 = document.querySelector('h3')
    let input = document.querySelector('input').value
    let i = 0

    while (i < contacts.length) {
        i++;
        if (input.toLowerCase() === contacts[i].name.toLowerCase()) {
            h3.innerHTML = contacts[i].number
            break
        } else {
            h3.innerHTML = 'Contato não encontrado'
        }
    }


}



clickButton.addEventListener('click', searchName)
clickButton.addEventListener('click', searchName2)
clickButton.addEventListener('click', searchName3)