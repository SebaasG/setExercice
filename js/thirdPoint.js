function tieneDuplicados(array){
    const arraySet = new Set(array)
    console.log(arraySet)
    if(arraySet.size === array.length){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }
}


tieneDuplicados([1, 2, 3, 4, 5]); //FALSE
tieneDuplicados([1, 2, 3, 3, 5]); // true