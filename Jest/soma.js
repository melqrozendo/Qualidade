function soma(a,b) {
    // comportamento 1
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os parametros precisam ser numeros.');
    }

    // comportamento 2
    return a + b;
}

function sub(a,b) {
    return a - b;
}

// exportando como um objeto
module.exports = { soma, sub };