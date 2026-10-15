Notas para Filmes

Projeto de exercício em JavaScript/Node.js que calcula a média das avaliações de diferentes filmes e atribui uma classificação com base nessa média. O projeto inclui testes automatizados para verificar os resultados da função notasParaFilmes.
Repositório: https://github.com/carlapatara49-prog/notas-para-filmes

Objetivo
Praticar lógica de programação e automação de testes unitários, validando se a aplicação:
- processa uma lista com vários filmes;
- calcula a quantidade de avaliações e a média de notas de cada filme;
- classifica cada filme conforme sua média;
- retorna os dados esperados para cada filme.
Regras de classificação
Média das avaliações	Classificação
Maior ou igual a 4	Filme recomendado
Maior ou igual a 3 e menor que 4	Filme razoável
Menor que 3	Filme ruim


Tecnologias e dependências
- JavaScript: linguagem utilizada na aplicação e nos testes.
- Node.js: ambiente de execução JavaScript.
- npm: gerenciador de pacotes usado para instalar as dependências e executar scripts.
- Mocha: framework responsável por organizar e executar os testes.
- Chai: biblioteca de asserções usada para verificar os resultados esperados.
Documentação oficial
- Node.js
- npm
- Mocha
- Chai
Estrutura de diretórios
notas-para-filmes/
├── source/
│   └── notasParaFilmes.js
├── test/
│   └── notasParaFilmes.test.js
├── node_modules/             # Dependências instaladas localmente
├── package.json              # Configurações, dependências e scripts npm
├── package-lock.json          # Registro das versões resolvidas das dependências
└── README.md                  # Documentação do projeto
Responsabilidade dos arquivos
- source/notasParaFilmes.js: contém a função que percorre a lista de filmes, calcula a quantidade de votos e a média das avaliações e define a classificação.
- test/notasParaFilmes.test.js: contém os testes automatizados escritos com Mocha e Chai.
- package.json: identifica o projeto, declara dependências e configura o script npm test.
- package-lock.json: registra a árvore de dependências instalada pelo npm.
- node_modules/: diretório criado pelo npm durante a instalação das dependências. Não é necessário versioná-lo no Git; ele pode ser recriado a partir dos arquivos de configuração.
- README.md: apresenta o projeto e explica como instalá-lo e executar os testes.
Pré-requisitos
Instale o Node.js e o npm. Como o projeto usa Mocha, confira os requisitos de versão na documentação do Mocha.
Para verificar se estão instalados, execute no terminal:
node --version
npm --version
Como obter e instalar o projeto
1. Clone o repositório:
   git clone https://github.com/carlapatara49-prog/notas-para-filmes.git
2. Acesse a pasta do projeto:
   cd notas-para-filmes
3. Instale as dependências:
   npm install
Como executar os testes
Na raiz do projeto, execute:
npm test
O comando utiliza o script test definido no package.json, que chama o Mocha para localizar e executar os testes.
Para executar diretamente o Mocha, também é possível usar:
npx mocha
Cenários cobertos pelos testes
O arquivo test/notasParaFilmes.test.js contém testes que verificam:
1. Lista completa: o resultado é um array com os três filmes de entrada.
2. Filme recomendado: valida a classificação de “Minha mãe é uma peça” e sua média de 4.4.
3. Filme razoável: valida a classificação de “Saneamento Básico” e sua média de 3.2.
4. Filme ruim: valida a classificação de “Se eu fosse você” e sua média de 2.
O Mocha apresenta no terminal o resultado da execução, indicando os testes aprovados e eventuais falhas.
Exemplo de uso
A função recebe uma lista de filmes, cada um com um nome e um array de avaliações:
const { notasParaFilmes } = require('./source/notasParaFilmes');

const filmes = [
  { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
  { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
  { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] }
];

console.log(notasParaFilmes(filmes));
Cada item retornado contém o nome do filme, a quantidade de avaliações (quantidadeVotos), a média (media) e a classificação (classificacao).
Observações
- Execute os comandos a partir da pasta raiz do projeto.
- Se as dependências forem alteradas, mantenha package.json e package-lock.json consistentes.
- O diretório node_modules/ normalmente deve ser ignorado pelo Git, pois pode ser recriado com npm install.
Autoria
Projeto de estudo para prática de lógica de programação e testes automatizados com JavaScript, Mocha e Chai.
