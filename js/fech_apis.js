

/* INICIO GALERIA DE RECETAS IMPORTADAS DESDE UNA API */
/* Galeria de recetas comida */

function invocarApiComidas() { // boton "Receta de comida al azar"
          const json =
                    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                              .then(response => response.json())
                              .then(meals => dibujarDatos_comidas(meals));
          console.log(json); 
}

// objetoCompleto.atributo
// objetoCompleto.atributo.map(x => Filas(x));
//   función map, agarra un objeto y a cada elemento le aplica una funcion determinada, obteniendo un nuevo objeto.
// const nuevoObjeto = objetoCompleto.atributo.map(x => Filas(x));


function dibujarDatos_comidas(json) { // boton "Receta de comida al azar"
          const filas_comidas = json.meals.map(x => Fila_comidas(x));
          document.getElementById('contenedor-comida').innerHTML = filas_comidas.join(' ');
}


// impresión en html - template String
//obj = nombre del parametro, que es el objeto que recibe la función
function Fila_comidas(obj) {
          return `
          <div class="receta-img">
        <img src='${obj.strMealThumb}' alt="" >
      </div>
      <div class="receta-titulo-texto">
        <h2>${obj.strMeal}</h2>
        <p>${obj.strInstructions}'</p>
        </div>
      `
}

function invocarApiBebidas() { // boton "Cóctel de bebida al azar"
          const json =
                    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                              .then(response => response.json())
                              .then(drinks => dibujarDatos_bebidas(drinks));
          console.log(json);
}
function dibujarDatos_bebidas(json) {
          const filas_bebidas = json.drinks.map(x => Fila_bebidas(x));
          document.getElementById('contenedor-bebidas').innerHTML = filas_bebidas.join(' ');
}


// impresión en html - template String
//obj = nombre del parametro, que es el objeto que recibe la función
function Fila_bebidas(obj) {
          return `
          <div class="receta-img">
          <img src=${obj.strDrinkThumb} alt="" >
        </div>
        <div class="coctel-titulo-texto">
          <h2>${obj.strDrink}</h2>
          <p>${obj.strInstructions}</p>
        </div>
      `
}