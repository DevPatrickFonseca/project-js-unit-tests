/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => { 
  // Verifica valores vazio
  if (array.length < 1) return undefined;

  let result = 0;

  // Verifica valores não numéricos
  for (let i1 = 0; i1 < array.length; i1 += 1) {
    if (typeof array[i1] !== 'number') return undefined;
    result += array[i1];
  }

  // Soma valores e arredonda soma
  result = Math.round(result / array.length);

  return result;
};

module.exports = average;
