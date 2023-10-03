/* Ciclos o Loops */
/* 

for(contador; condicion; incremento){
    sentencias
}

for ( indice in coleccion ) {
    sentencias
}

for ( valor of coleccion ) {
    sentencias
}


while (condicion) {
    sentencias
}

do {
    sentencias
} while (condicion)

a = a + 1  a += 1
a = a - 1  a -= 1
a = a * 1  a *= 1
a = a / 1  a /= 1

*/
//          1               2          4
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero); // 3
}

for (let numero = 10; numero >= 1; numero--) {
    console.log(numero)
}

let nombres = ["Liliana", "Marcela", "John", "Rodrigo", "Fabian", "Paloma", "Alejandro", "Matias"];

for (let indice = 0; indice < nombres.length; indice++) {
    console.log(nombres[indice]);
}

for (let indice in nombres) {
    console.log(indice);
    console.log(nombres[indice]);
}

for (let valor of nombres) {
    console.log(valor);
}


let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

let indice = 0;
while (indice < nombres.length) {
    console.log(nombres[indice]);
    indice++;
}

numero = 1;
do {
    console.log(numero);
    numero++;
} while (numero <= 10);

console.log("Fin")


for(let i = 1; i <= 10; i++){
    console.log(`Tabla de Multiplicar del ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${(i*j)}`)
    }
} 


let i = 1;
while (i <= 10) {
    console.log(`Tabla de Multiplicar del ${i}`);
    let j = 1;
    while (j <= 10) {
        console.log(`${i} * ${j} = ${(i * j)}`)
        j++;
    }
    i++;
}



let matriz = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];


for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
} 


for(let arr of matriz){
    console.log(arr)
    for(let valor of arr){
        console.log(valor)
    }
}


[1, 2, 3].forEach(function(value, index, arr){
    console.log(`Valor: ${value}`)
    console.log(`Posicion: ${index}`);
    console.log(`Ubicacion: ` +  arr)
}) 


matriz.forEach((arreglo) => {
    console.log(arreglo)
    arreglo.forEach((valor) => {
        console.log(valor)
    })
})

let nombre = "Roberto";
let letras = nombre.split('');
console.log(letras);
for(let i = 0; i < letras.length; i++){
    console.log(nombre[i]);
}