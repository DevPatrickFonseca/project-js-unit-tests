const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {

  const myRestaurant = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9}});
  
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.

    // 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.

    // 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'.

    // 4: Faça a implementação do item 4 do README no arquivo src/restaurant.js.

    // 5: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.

    // 6: Faça a implementação do item 6 do README no arquivo src/restaurant.js.
    
    // 7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro
    // - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
    // - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
    // Ex: obj.order('coxinha') --> ['coxinha']
    // Ex: obj.order('picanha') --> Exibe "Item indisponível"

    // 8: Faça a implementação do item 8 do README no arquivo src/restaurant.js.

    // 9: Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.

    // 10: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.

    // 11: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.

    // 12: Faça a implementação do item 12 do README no arquivo src/restaurant.js.

  });
  it('01 - Se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função', () => { // OK
    // Passo 01 - Se dados são objeto
    expect(typeof myRestaurant).toBe('object');
    // Passo 02 - Se a função tem a propriedade fetchMenu
    expect(myRestaurant).toHaveProperty('fetchMenu');
  });

  it('02 - Se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função "objetoRetornado.fetchMenu()"', () => { // OK
    expect(myRestaurant.fetchMenu()).toEqual({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9}});
  });

  it('03 - Se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`', () => { // OK
    expect(myRestaurant.fetchMenu()).toHaveProperty('food');
    expect(myRestaurant.fetchMenu()).toHaveProperty('drink');
  });

  it('04 - Se fez a implementação do item 4 do README no arquivo src/restaurant.js', () => { // OK 
    const myRestaurant = createMenu();

    expect(typeof myRestaurant.fetchMenu).toBe('function');
  });
  
  it('05 - Se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio', () => { // OK
    expect(myRestaurant.consumption).toEqual([]);
  });
  
  it('06 - Se fez a implementação do item 6 do README no arquivo src/restaurant.js', () => { // OK
    expect(myRestaurant).toHaveProperty('consumption');
  });

  it('07 - Se ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro é retornado', () => { // OK
    // 01 - Chama função order "keyOrder"
    myRestaurant.order('coxinha');
    expect(myRestaurant.consumption).toContain('coxinha');
    // 02 - O que retorna de Order
    const itemTest = myRestaurant.order('pinga');
    expect(itemTest).toBe('Item indisponível');
  });

  it('08 - Se fez a implementação do item 8 do README no arquivo src/restaurant.js', () => { // OK
    expect(typeof myRestaurant.order).toBe('function');
  });

  it('09 - Se ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos', () => { // OK
    myRestaurant.order('sopa');
    myRestaurant.order('picanha');
    myRestaurant.order('agua');
    expect(myRestaurant.consumption).toContain('coxinha');
    expect(myRestaurant.consumption).toContain('sopa');
    expect(myRestaurant.consumption).not.toContain('picanha');
    expect(myRestaurant.consumption).toContain('agua');
  });
  
  it('10 - Se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`', () => { // OK
    myRestaurant.order('coxinha'); // Adicionei mais um pedido
    expect(myRestaurant.consumption).toEqual(['coxinha', 'sopa', 'agua', 'coxinha']);
  });

  it('11 - Se ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`', () => { // OK
    const payment = myRestaurant.pay();

    expect(payment).toBe(23.76);
  });

  it('12 - Se fez a implementação do item 12 do README no arquivo src/restaurant.js', () => { // OK
    expect(typeof myRestaurant.pay).toBe('function');
  }); 
});
