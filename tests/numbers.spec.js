/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    // fail('Teste vazio!');
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
    // expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
    // expect(numbers([1, 'a', 3])).toBeFalsy();
    // expect(numbers([' '])).toBeFalsy();
  });

  it('Teste 01 - Se a array aceita apenas NÚMEROS', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });

  it('Teste 02 - Se a array não aceita um "número" em forma de string', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  });

  it('Teste 03 - Se a array não aceita uma "string" e não um número', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  });

  it('Teste 04 - Se a array não aceita uma array vazia', () => {
    expect(numbers([' '])).toBeFalsy();
  });
});
