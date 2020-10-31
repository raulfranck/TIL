# Flexbox

### display: flex;

Define um contexto flexpivel para os filhos. Também define que os filhos pussuam a mesma altura.

### flexdirection: row | row-reverse | column | column-reverse;

Define a direção para os filhos em determinado container.
 - row: Alinha horizonalmente, esse valor já vem por default.
 - row-reverse: Alinha os filhos da direita para esquerda.
 - column: Alinha os filhos vertical.
 - column-reverse: Alinha os filhos de baixo para cima.

### flex-wrap: nowrap | wrap | wrap-reverse;

Por padrão os filhos tentam se alinhar em somente uma linha, usamos flex-wrap para alterar esse padrão.
 - nowrap: De forma padrão os itens se alinham apenas em uma linha.
 - wrap: Os itens serão quebrados em várias linhas conforme seu tamanho e quantidaed de filhos. **De cima para baixo**.
 - wrap-reverse: Os itens serão quebrados em várias linhas conforme o tamabho e quantidade de filhos. **De baixo para cima**
 

### justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right;

Define a posição e o espaçamento dos filhos dentro de um container.
 - flex-start: Posiciona os filhos a esquerda
 - flex-end: Posicional os filhos na direita do container.
 - center: Posiciona os filhos no centro do container.
 - space-around: Utiliza o espaço do container dividindo entre os filhos de maneira igual.
 - space-between: Ultiliza o espaço do container dividindo entre os filhos somente entre eles.

### align-items: align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end;

Define o alinhamento dos filhos verticalmente
 - strech: Valor padrão, estica os filhos para se ajustar ao container
 - flex-start: Posiciona os filhos partindo do início respeitando seu tamanho, basenado na propriedade flex-direction.
 - flex-end: Posiciona oos filhos na extremidade do eixo.