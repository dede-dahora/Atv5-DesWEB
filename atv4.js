const array4 = [];
let retornoUnshift;

retornoUnshift = array4.unshift("primeiro");
console.log("Retorno do unshift:", retornoUnshift);
console.log("Array após unshift 1:", array4);

retornoUnshift = array4.unshift("segundo");
console.log("Retorno do unshift:", retornoUnshift);
console.log("Array após unshift 2:", array4); 
let removidoShift = array4.shift();
console.log("Valor removido:", removidoShift);
console.log("Array após shift 1:", array4);

removidoShift = array4.shift();
console.log("Valor removido:", removidoShift);
console.log("Array após shift 2:", array4);