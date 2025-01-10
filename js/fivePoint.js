const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];

const setA = new Set(conjuntoA);
const setB = new Set(conjuntoB);

const set = setA.difference(setB)
console.log(set)