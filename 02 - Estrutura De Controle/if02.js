function teste1(num) {
    if (num > 5) {
        console.log('num é maior que 5')
    }
    console.log('fim')
}

teste1(6)
teste1(4)

function teste2(num) {
    if (num > 5) {
        console.log('num é maior que 5')
        console.log('é grande')
    }
}

teste2(6)
teste2(4)

function teste3(num) {
    if (num > 5) {
        console.log('num é maior que 5')
        console.log('é grande')
    } else {
        console.log('num é menor que 5')
    }
}

teste3(6)
teste3(4)

function teste4(num) {
    if (num > 5) {
        console.log('num é maior que 5')
        console.log('é grande')
    } else if (num > 3) {
        console.log('num é maior que 3')
    } else {
        console.log('num é menor que 3')
    }
}

teste4(6)
teste4(4)
teste4(2)