/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸
*/

const pizzas = [
    {
      id: 1,
      nombre: "Especial",
      precio: 1500,
      ingredientes: ["Muzzarela", "Aceitunas","Jamon"],
    },
    {
      id: 2,
      nombre: "Napolitana",
      precio: 1200,
      ingredientes: ["Muzzarela", "Tomate", "Salame"],
    },
    {
      id: 3,
      nombre: "Margarita",
      precio: 1800,
      ingredientes: ["Muzzarela", "Aceite de Oliva", "Albahaca"],
    },
    {
      id: 4,
      nombre: "Jamon",
      precio: 1700,
      ingredientes: ["Muzzarela", "Jamon", "Morron"],
    },
    {
      id: 5,
      nombre: "Muzzarela",
      precio: 1000,
      ingredientes: ["Muzzarela", "Queso",]
    },
    {
      id: 6,
      nombre: "Anchoas",
      precio: 2000,
      ingredientes: ["Muzzarela","Tomate","Anchoas","Jamon"],
    },
    {
        id: 7,
        nombre: "MiniPizza",
        precio: 500,
        ingredientes: ["Muzzarela","Tomate",],
      },
  ];
  
  // a) Las pizzas que tengan un id impar.

  const pizzasImpares = () => 
   pizzas.forEach((numeroimpar) => {
    if (numeroimpar.id % 2 != 0)
    console.log(`Las Pizzas Con Id's Impares Son: ${numeroimpar.nombre} `)
   }
    );
  
  pizzasImpares();
  
  
  // b)¿Hay alguna pizza que valga menos de $600?
  const pizzasMenoresA600 = () => {
    if(pizzas.some((pizza) => pizza.precio < 600)) {
      return "Hay pizzas que valen menos de $600 "
    } else {
      return "No hay pizzas con un valor menor a $600"
    }
  }
  
  console.log(pizzasMenoresA600());
  
  //c) Los nombres de todos las pizzas.
  const nombrePizzas = pizzas.map(({ nombre }) => nombre);
  console.log(`Los Nombres De Las Pizzas Son: ${nombrePizzas}`);
  
  //d)Los precios de las pizzas.
  const precioPizzas = pizzas.map(({ precio }) => precio);
  console.log(`Los Precios De La Pizzas Son:$ ${precioPizzas}`);
  
  //e) El nombre de cada pizza con su respectivo precio.
  const imprimirNombreYPrecioPizza= () => 
   pizzas.forEach((pizza) => 
    console.log(`La Pizza ${pizza.nombre} Cuesta $${pizza.precio} `)
    );
  
  imprimirNombreYPrecioPizza();