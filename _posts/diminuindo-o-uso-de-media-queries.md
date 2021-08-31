---
layout: post
title: Diminuindo o uso de media queries
description: Conheça funcionalidades para diminuir suas as media queries
slug: 'diminuindo-o-uso-de-media-queries'
date: '2020-09-07'
coverImage: /assets/blog/featured-dicas-responsividade.jpg
ogImage:
  url: '/assets/blog/featured-dicas-responsividade.jpg'
---

Existe algumas formas de trabalhar com o CSS que ajuda a diminuir o uso de media queries e por consequência ajuda a deixar o layout mais fluído, vou mostrar algumas funcionalidades que me ajudam bastante.

### Grid Layout

O grid layout é uma funcionalidade que desde o seu lançamento utilizo para criar a estrutura de todos os projetos que participo porque com ela é possível criar a estrutura de forma bem organizada e com uma boa liberdade para trabalhar com a responsividade.

Existe uma função chamada `repeat()` que nos ajuda a criar colunas que possuem tamanhos iguais, especificamente utilizando a propriedade **grid-template-columns**.

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
  <div class="col">Coluna 4</div>
</div>
```

**Parâmetros do `repeat()`:**

- **\*Quantidade de colunas**:\* Pode ser utilizado um número inteiro, auto-fill ou o auto-fit. No caso utilizei o auto-fill, isso quer dizer que vão ser criadas colunas automaticamente até preencher toda a linha.
- **\*Tamanho das colunas**:\* Para determinar o tamanho da coluna utilizei a função `minmax()`, onde passo um valor com a unidade **rem** e em seguida um valor com a unidade **fr**.

E a propriedade **gap**, é quem determina o espaçamento entre as colunas.

### Clamp()

Essa é uma função recente, e acredito que em pouco tempo a comunidade vai utilizar bastante essa função. Basicamente para utilizar ela você passa três parâmetros.

```css
h1 {
  font-size: clamp(2rem, 10vw, 5rem);
}
```

- **Valor mínimo**: Esse vai ser o valor mínimo da fonte, ou seja, o menor tamanho que essa fonte pode ter.
- **Valor preferencial**: Esse valor sempre vai ser uma unidade flexível, para que de acordo com a resolução da tela aumente ou diminua o tamanho da fonte.
- **Valor máximo**: Esse vai ser o valor máximo da fonte, ou seja, o maior tamanho que essa fonte pode ter.

Nesse exemplo utilizei o font-size, mas pode utilizar em outras propriedades como o padding.

### Imagens

Existem casos em que precisamos colocar imagens com um tamanho fixo e isso em algum momento pode te atrapalhar, podendo fazer por exemplo com que em telas menores a imagem fique "vazando" do seu container e acabe criando um scroll horizontal. Para evitar isso utilizo bastante essas propriedades.

```css
img {
  max-width: 100%;
  height: auto;
}
```
