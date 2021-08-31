---
layout: post
title: O que é Lexical Environment
description:
date: 31/08/2021
coverImage: /assets/blog/javascript-entendendo-lexical-environment.jpg
ogImage:
  url: '/assets/blog/javascript-entendendo-lexical-environment.jpg'
---

Para entender melhor o que é `Lexical Environment`, precisamos entender um outro conceito do JavaScript que é o `Scope`.

### Scope

É o contexto atual em que seu código esta sendo executado, o JavaScript trabalha com três tipos de scopo. Global, Function e Block.

- Global Scope: as variáveis criadas nesse scopo podem ser acessadas em qualquer lugar de sua aplicação
- Function Scope: tudo que é criado dentro de uma função só pode ser acessado dentro dela
- Block Scope: tudo que é criado no block só pode ser acessado dentro dele.

Para um exemplo vou utilziar a declaração de algumas variáveis.

```js
// Global Scope
var helloWorld = 'Hello World'

// Function Scope
function name() {
  const myName = 'Italo'
}

// Block Scope
if (2 > 1) {
  let isTrue = true
}
```

### Lexical Environment

> Lexical, traduzindo para português é Léxico, que significa um conjunto de palavras existente em um determinado idioma. Trazendo para programação podemos entender que é um conjunto de regras em um determinado ambiente.

Quando executamos uma aplicação JS o primeiro Scopo criado é o Global, logo ele é o nosso primeiro `Lexical Environment` que é o `globalEnvironment`. Ou seja é o nosso primeiro grupo de regras.

Cada função do nosso código tem um conjunto de regras, e essas regras só são reconhecidas dentro dessas funções. Com esse pensamento podemos entender que cada função deve ter um objetivo específico o que acaba facilitando o entendimento de nosso código.

No exemplo abaixo criei algumas funções, e para cada função o JS cria um `Lexical Environment`.

```js
// firstNameEnvironment
function firstName() {
  const myFirstName = 'italo'

  return myFirstName
}

// lastNameEnvironment
function lastName() {
  const myLastName = 'gois'

  return myLastName
}

// myNameEnvironment
function myName() {
  const name = `${firstName()} ${lastName()}`

  return name
}

// Execution
myName()
```

Quando um `Lexical Environment` é criado também fica registrado se ele tem um `Parent Environment`, por exemplo no exemplo acima o `Parent Environment` de nossas funções é o `globalEnvironment`. Entender este conceito é importante para enteder o funcionamento de Closures.

Quando uma função é executada, é criado um contexto de execução, e esse contexto de execução informa para a engine qual `Lexical Environment` vai ser executado.
