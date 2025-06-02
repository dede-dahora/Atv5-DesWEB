const array3 = [];
let retorno;

retorno = array3.push(100);
console.log("Retorno do push:", retorno); // 1
console.log("Array após push 1:", array3); // [100]

retorno = array3.push(200);
console.log("Retorno do push:", retorno); // 2
console.log("Array após push 2:", array3); // [100, 200]

retorno = array3.push(300);
console.log("Retorno do push:", retorno); // 3
console.log("Array após push 3:", array3); // [100, 200, 300]

let removido = array3.pop();
console.log("Valor removido:", removido); // 300
console.log("Array após pop 1:", array3); // [100, 200]

removido = array3.pop();
console.log("Valor removido:", removido); // 200
console.log("Array após pop 2:", array3); // [100]