const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite qualquer número que verificaremos se pertence à sequência Fibonacci: ", (input) => {
  const num = parseInt(input);
rl.close();

if (isNaN(num)) {
    console.log("Número inválido!!!");
    rl.close();
    return;
}

let a = 0;
let b = 1;

  while (a < num) {
    let temporaria = a;
    a = b;
    b = temporaria + b;
  }

  if (a === num) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
  }

});
