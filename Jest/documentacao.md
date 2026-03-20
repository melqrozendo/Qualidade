Testes em JS com Jest: https://www.youtube.com/watch?v=CZDMt9MkX3w

1-comando de inicializar projeto
### npm init -y
2-instalar o jest atraves do terminal
### npm install --save-dev jest
3-criano um arquivo .js

4-Criando um pasta <test> e adicionando um arquivo <soma.test.js>
definimos um teste nesse arquivo

5-para rodar o teste temos que no <package.json> add 'jest' ao script:
"scripts": {
    "test": "jest"
},

6-Comando para rodar teste no terminal
### npm test

*********Adicionando Metricas**********
7-No <package.json> add um paramentro para amostragem de metricas no terminal
"scripts": {
    "test": "jest --coverage"
},

********Sobre Testes*************
link: https://www.youtube.com/watch?v=yV_61piC-nM
Testes Unitarios: verificam as menores partes do codigo, ou seja, são codigos escritos para validar e testar as pequenas parte dos sistema (funçoes/ coponentes)