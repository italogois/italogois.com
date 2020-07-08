import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

*{
  margin: 0;
  padding:0;
  boz-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 32px;
  color: #333333;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  line-height: 1.8em;
  margin: auto;
}

h1 {
  font-size: clamp(2.6rem, 10vw, 4.25rem);
  line-height: 1.2em;
  margin-top: 0.3em;
  margin-bottom: 0.6em;
}

h2 {
  font-size: 2.6em;
  line-height: 1.4em;
  margin-top: 0.3em;
  margin-bottom: 0.6em;
}

h3 {
  font-size: 1.6em;
  line-height: 1.5em;
  margin-top: 0.7em;
  margin-bottom: 0em;
}

h4 {
  font-size: 1em;
  line-height: 1.2em;
  margin-top: 1.2em;
  margin-bottom: 0em;
}

h5 {
  font-size: 1em;
  line-height: 1.2em;
  margin-top: 1.2em;
  margin-bottom: 0em;
}

a {
  color: #f36c1e;
}

a:hover {
  color: #da5305;
}

p,
ul,
ol,
pre,
table,
blockquote {
  margin-top: 0em;
  margin-bottom: 1.2em;
}
ul ul,
ol ol,
ul ol,
ol ul {
  margin-top: 0em;
  margin-bottom: 0em;
}

hr {
  border: 1px solid rgb(238, 238, 238);
  margin: -1px 0;
}
a,
b,
i,
strong,
em,
small,
code {
  line-height: 0;
}

sub,
sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

button {
  border: 0;
}

`
