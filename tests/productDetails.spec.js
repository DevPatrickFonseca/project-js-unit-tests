const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });

  it('01 - Se productDetails é uma função.', () => { // OK
    expect(typeof productDetails).toBe('function');
  });

  it('02 - Se o retorno da função productDetails é um array.', () => { // OK
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });

  it('03 - Se o array retornado pela função productDetails contém 2 itens.', () => { // OK
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  });

  it('04 - Se os 2 itens do array retornado pela função productDetails são objetos.', () => { // OK
    expect(typeof (productDetails('Alcool gel', 'Máscara')[0]) === 'object').toBe(true);
    expect(typeof (productDetails('Alcool gel', 'Máscara')[1]) === 'object').toBe(true);
  });

  it('05 - Se passando 2 parâmetros diferentes, esses 2 objetos também são diferentes', () => { // OK
    const products = productDetails('firstProduct', 'secondProduct');
    expect(products[0]).not.toEqual(products[1]);
  });

  it('06 - Se os 2 productIds terminam com 123', () => { // OK
    const productsIds = productDetails('firstProduct', 'secondProduct');

    // Passa pelos valores de cada produto
    for (let i = 0; i < productsIds.length; i += 1) {
      // Verifica o productId de cada produto se tem 123
      expect(productsIds[i].details.productId).toMatch('123');
    }
  });
});
