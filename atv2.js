const array2 = ["a", "b", "c"];

console.log("Array inicial:", array2); // ["a", "b", "c"]
console.log("Tamanho inicial:", array2.length); // 3

array2[1] = "x"; // Modificando o segundo elemento

console.log("Array modificado:", array2); // ["a", "x", "c"]
console.log("Tamanho após modificação:", array2.length); // 3 (não muda)