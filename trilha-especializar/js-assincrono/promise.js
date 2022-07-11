let aceitar = false

console.log(('Pedir Uber'));

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Pedido aceito!')
    }
    return reject('Pedido Negado!')
})

console.log('aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))
