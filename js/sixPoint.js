function sonIguales(array1, array2) {
    array1.sort();
    array2.sort();


    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false; 
        }
    }

    return true;
}

console.log(sonIguales([1, 2, 3], [3, 2, 1])); // true
console.log(sonIguales([1, 2, 3], [4, 5, 6])); // false
