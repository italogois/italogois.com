---
layout: post
title: Melhorar a usabilidade com cores acessíveis
description: Cores acessíveis para melhorar a usabilidade para daltônicos.
date: 03/10/2020
coverImage: /assets/blog/cores-acessiveis-1.jpg
ogImage:
  url: '/assets/blog/cores-acessiveis-1.jpg'
---

Quando falamos em acessibilidade na web pensar nas cores também é muito importante, porque se não escolhermos boas cores podemos atrapalhar a experiência de pessoas daltônicas, ou seja, pessoas que não conseguem reconhecer ou diferenciar tonalidades das cores verde, azul ou vermelho.

Alguns casos que podem atrapalhar a experiência de usabilidade:

- Informar que o campo do formulário é válido ou inválido apenas pela cor;
- Criar tipos de alertas apenas por cor;
- Letras pequenas onde a cor da fonte não tem um bom contraste;
- Dar destaque a alguma informação apenas pelas cores;

### O Daltonismo é dividido em três tipos

- Protanopia – não consegue enxergar tonalidades do vermelho;
- Tritanopia – não consegue enxergar tonalidades do azul e amarelo;
- Deuteranopia – não consegue enxergar tonalidades do verde;

![Na imagem tem o desenho dos power rangers representando a visão dos daltônicos](/assets/blog/power-rangers.jpg 'Na imagem tem o desenho dos power rangers representando a visão dos daltônicos')

### Como escolher as cores

Existem parâmetros da WCAG que nos ajudam a saber se um conjunto de cores pode ser utilizada, e é através do contrast ratio(taxa de contraste) das cores que nos vamos descobrir isso.

A taxa de contraste é a diferença de luminosidade entre duas cores.

Existem várias ferramentas que pode fazer essa análise e também da sugestões de tonalidade de acordo com a combinação que você for utilizar.

#### Ferramenta de desenvolvedores do chrome

Inspecione o elemento que você deseja fazer o teste, vá até a propriedade onde você esta utilizando a cor e clique no quadrado que esta representando a cor.

![Imagem mostrando o inspetor de elemento do chrome, marcando com um circulo verde a cor](/assets/blog/chrome-inspect.png 'Imagem mostrando o inspetor de elemento do chrome, marcando com um circulo verde a cor')

Vai abrir uma janela com informações mais detalhadas sobre essa cor, inclusive a taxa de contraste dela.

![Imagem mostrando a janela com o detalhamento da cor, e exibindo o contrast ratio.](/assets/blog/chrome-inspect-1.png 'Imagem mostrando a janela com o detalhamento da cor, e exibindo o contrast ratio.')

#### Contrast Checker

O site WEBAIM(Web Accessibility in Mind), possui uma funcionalidade chamada [Contrast Checker](https://webaim.org/resources/contrastchecker/) onde você pode coloca em um campo a cor de foreground, que é a cor de primeiro plano que no nossos exemplos seria a cor do texto e a cor de background.

E então ela calcula o contrast ratio e também mostra os testes em que a cor passou ou falhou. O interessante dela é que também tem o teste em estruturas do site que não são textos, como no campo de texto que esta no exemplo.

![Imagem mostrando a funcionalidade Contrast Checker do site webaim](/assets/blog/webaim.png 'Imagem mostrando a funcionalidade Contrast Checker do site webaim')

#### Colors Contrast Checker

O site [colors.co](http://colors.co) também disponibiliza um [contrast checker](https://coolors.co/contrast-checker/) para fazer essa análise do contrast ratio, além da análise eles possuem uma funcionalidade que da sugestões de tonalidades para cores que você escolheu como foreground e background.

Diferente do WEBAIM, eles não mostram testes com elementos gráficos.

![Imagem mostrando a funcionalidade Contrast Checker do site colors.co](/assets/blog/colors.png 'Imagem mostrando a funcionalidade Contrast Checker do site colors.co')
