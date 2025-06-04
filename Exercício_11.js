// Este programa pede 5 números ao usuário e soma todos eles

// Importa o pacote para ler entradas do usuário no terminal
const prompt = require('prompt-sync')();

// Variável que armazenará a soma
let soma = 0;

// Loop para pedir os 5 números
for (let i = 1; i <= 5; i++) {
  // Solicita o número ao usuário
  let numero = parseFloat(prompt(`Digite o ${i}º número: `));

  // Adiciona o número à soma total
  soma += numero;
}

// Mostra o resultado da soma
console.log(`A soma dos 5 números é: ${soma}`);
