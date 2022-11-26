/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro    |      Nome       |    Classe   |              Frases
 da função    |                 |             |
----------------------------------------------------------------------------------
"Arya"        |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
"Brienne"     |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
"Melissandre" |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, ou seja, não faz diferenças entre maiúsculas e minúsculas. Portanto Arya, ArYa e ARYA têm o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // 1. Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    // 2. Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    // 3. Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    // 4. Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    // 5. Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
    // 6. Teste se ao passar um nome que não está na tabela, a função retorna undefined.
  });
  it('01 - Se função não recebe nenhum parâmetro, retorna undefined.', () => { // OK
    expect(getCharacter()).toBeUndefined();
  });
  
  it('02 - Se função retorna o objeto correto para o parâmetro "Arya"', () => { // OK
    expect(getCharacter('arya')).toEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.'],
    })  
  });

  it('03 - Se função retorna o objeto correto para o parâmetro "Brienne"', () => { // OK
    expect(getCharacter('Brienne')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
    })  
  });

  it('04 - Se função retorna o objeto correto para o parâmetro "Melissandre"', () => { // OK
    expect(getCharacter('Melissandre')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
    })
  });
  
  it('05 - Teste se o parâmetro não é Case Sensitive, retorna o mesmo objeto relativo a ele', () => { // OK
    expect(getCharacter('MELISSandre')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
    })
  });

  it('06 - Se ao passar um nome que não está na tabela, a função retorna undefined', () => {
    expect(getCharacter('Patrick Fonseca')).toBeUndefined();
  });
});
