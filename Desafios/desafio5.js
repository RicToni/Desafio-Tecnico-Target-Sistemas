const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite palavra que irei inverter seus caracteres: ", (input) => {
    const palavra = input;
  rl.close();
  
  let palavraInvertida = '';
  for (let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i];
  }
  console.log(`Sua palavra invertida é: ${palavraInvertida}`)
})  