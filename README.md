# Classificador de Nível de Herói

Desafio da **Formação Lógica de Programação** da [DIO](https://web.dio.me).

## Objetivo

Criar uma variável com o nome e a quantidade de experiência (XP) de um herói e, com base no XP, mostrar o nível dele:

| XP | Nível |
|---|---|
| Até 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| Acima de 10.000 | Radiante |

Saída esperada:

```
O Herói de nome {nome} está no nível de {nivel}
```

## Conceitos usados

- Variáveis (`const` e `let`)
- Operadores de comparação (`<=`)
- Laço de repetição (`for...of`)
- Estrutura de decisão (`if`)

## Como executar

Com o [Node.js](https://nodejs.org) instalado:

```bash
node index.js
```

Resultado:

```
O Herói de nome Luna está no nível de Platina
```
