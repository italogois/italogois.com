---
layout: blog
title: Dicas rápidas sobre responsividade
description: sem descricaoa
date: 2020-06-23T23:15:31.860Z
featuredImage: static/images/uploads/featured-dicas-responsividade.jpg
rating: 0
---

### Introdução

Hoje em dia é essencial o projeto ser responsivo e para ajudar nisso existem alguns frameworks como o Bootstrap e o Materialize. Já utilizei por muito tempo o Bootstrap, porém desde o lançamento do grid layout simplesmente parei de utilizar esses, vou mostrar alguns recursos que utilizo quando trabalho com responsividade.

### Grid Layout

O grid layout ajuda bastante durante o desenvolvimento das telas, porque conseguimos criar uma estrutura bastante organizada.

Venho utilizando bastante a função `repeat()` quando quero criar colunas que possuem o mesmo tamanho.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 4rem;
}
```

```html
<div class="grid">
  <div class="col">Coluna 1</div>
  <div class="col">Coluna 2</div>
  <div class="col">Coluna 3</div>
  <div class="col">Coluna 14</div>
</div>
```

A propriedade **grid-template-columns** define a quantidade e o tamanho das colunas.

Parâmetros do `repeat()`:

- **Quantidade de colunas**: Pode ser utilizado um número inteiro, auto-fill ou o auto-fit. No caso utilizei o auto-fill, isso quer dizer que vão ser criadas colunas automaticamente até preencher toda a linha.

- **Tamanho das colunas**: Para trabalhar o responsivo utilizo a função `minmax()`, onde passo um valor com a unidade **rem** e em seguida um valor com a unidade **fr**.

E a propriedade **gap**, é quem determina o espaçamento das colunas.

Dessa forma não precisa criar media querie, porém essa solução só funciona quando são criadas colunas iguais.

### Clamp()

Essa função é bastante recente, e acredito que em pouco tempo a comunidade vai utilizar bastante essa função. Basicamente para utilizar ela você passa três parâmetros.

```css
h1 {
  font-size: clamp(2rem, 10vw, 5rem);
}
```

- **Valor mínimo**: Esse vai ser o valor mínimo da fonte

- **Valor preferencial**: Esse valor sempre vai ser uma unidade flexível, para que haja de acordo com a resolução da tela o aumento ou diminuição do tamanho da fonte.

- **Valor máximo**: Esse vai ser o valor máximo da fonte.

Nesse exemplo utilizei o font-size, mas pode utilizar em outras propriedades como o padding.

### Links

Vou deixar alguns links que pode te ajudar no desenvolvimento/criação de um layout.

- [Gridlover](https://www.gridlover.net/) - Te ajuda a criar uma tipografia em escala modular e ritmo vertical.
- [Figma](https://www.figma.com/) - Uma ferramenta muito boa para prototipação.
- [Origamid grid layout](https://www.origamid.com/projetos/css-grid-layout-guia-completo/) - Um guia completo sobre o grid layout.
