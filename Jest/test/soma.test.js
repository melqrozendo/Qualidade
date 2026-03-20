// Buscando soma e sub de dentro do objeto exportado
const { soma, sub } = require('../soma');

// criando um teste e uma descrição
test('Soma 1 + 2 o resultado tem que ser 3', function() {
    // expectativa + medoto .toBe
    expect(soma(1, 2)).toBe(3);
});

describe('soma.js', () => {
    it('Deve retornar 5 quando somar 2 + 3', () => {
        expect(soma(2, 3)).toBe(5);
    });

    it('Deve retornar -1 quando somar -2 + 1', () => {
        expect(soma(-2, 1)).toBe(-1);
    });

    it('Deve retornar erro se algum parâmetro não for do tipo número', () => {
        expect(() => soma(2, '3')).toThrow('Os parametros precisam ser numeros');
        expect(() => soma('a', {})).toThrow();
        expect(() => soma(null, undefined)).toThrow();
    });
})

test('Subtração de 4 - 2 o resultado tem que ser 2', function() {
    expect(sub(4,2)).toBe(2);
});

