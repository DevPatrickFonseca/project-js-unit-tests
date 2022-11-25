/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    // Teste se circle retorna um objeto.
    // Teste se o objeto retornado possui 3 propriedades.
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    
  });
  it("01 - Verifica se circle retorna undefined, se parâmetro passado não seja um número.", () => {
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle("MIL")).toBeUndefined();
  });

  it("02 - Verifica se circle retorna um objeto.", () => {
    // Teste se circle retorna um objeto.
    const checkIfObject = circle(30);
    expect(typeof checkIfObject).toBe("object");
  });

  it("03 - Verifica se resultado de circle(30) = resultado função.", () => {
    // Vai verificar se o resultado de circle(30) é igual ao resultado da função
    expect(circle(30)).toEqual({radius: 30, area: 2826, circumference: 188.4,});
  });

  it("04 - Verifica se o objeto retornado possui 3 propriedades.", () => {
    // Teste se o objeto retornado possui 3 propriedades.
    expect(Object.keys(circle(1)).length).toStrictEqual(3);
  });

  it("05 - Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined.", () => {
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
  });

  it("06 - Verifica se no objeto retornado, a função retorna uma `key` com `value` = circunferência correta para um círculo de raio 2.", () => {
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    expect(circle(2).circumference).toEqual(2*3.14*2);
  });

  it("07 - Verifica se no objeto retornado, a função retorna uma `key` com `value` = área correta para um círculo de raio 3.", () => {
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    expect(circle(3).area).toEqual(3.14*3*3);
  });

  it("08 - Verifica se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.", () => {
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    expect(Object.values(circle(3))).toEqual([3, (3.14*3*3), (2*3.14*3)]);
  });
});
