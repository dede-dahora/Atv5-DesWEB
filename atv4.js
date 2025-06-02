const array4 = [];
let retornoUnshift;

retornoUnshift = array4.unshift("primeiro");
console.log("Retorno do unshift:", retornoUnshift); // 1
console.log("Array após unshift 1:", array4); // ["primeiro"]

retornoUnshift = array4.unshift("segundo");
console.log("Retorno do unshift:", retornoUnshift); // 2
console.log("Array após unshift 2:", array4); // ["segundo", "primeiro"]

let removidoShift = array4.shift();
console.log("Valor removido:", removidoShift); // "segundo"
console.log("Array após shift 1:", array4); // ["primeiro"]

removidoShift = array4.shift();
console.log("Valor removido:", removidoShift); // "primeiro"
console.log("Array após shift 2:", array4); // []