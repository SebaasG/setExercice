const texto = "Hola mundo mundo de JavaScript";

function contarPalabrasUnicas(texto){
    const array = texto.split(" ");
    console.log(array)
    const setArray = new Set(array)
    console.log("Hay "+ setArray.size+" Palabras unicas")
}

contarPalabrasUnicas(texto);