# Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

# Exercício 11: Soma de 5 Números com Loop For

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este projeto contém um programa simples que solicita ao usuário 5 números e calcula a soma total. Ele utiliza um laço `for` para repetir as entradas e somar os valores.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercício_11.js` e execute com:

```
node exercício_11.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.
