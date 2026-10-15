const expect = require('chai').expect;
const { notasParaFilmes } = require('../source/notasParaFilmes');

describe('Suite de testes: Validação de lista de filmes', () => {
    
    const listaDeEntrada = [
        { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] }, 
        { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },    
        { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] }            
    ];

    const resultado = notasParaFilmes(listaDeEntrada);

    it('Deve trazer a lista completa de filmes simultaneamente', () => {
        expect(resultado).to.be.an('array');
        expect(resultado).to.have.lengthOf(3);
    });

    it('Deve mostrar qual foi o filme classificado como "Filme recomendado"', () => {
        const filmeEncontrado = resultado.find(f => f.classificacao === "Filme recomendado");
        
        expect(filmeEncontrado).to.not.be.undefined;
        expect(filmeEncontrado.nome).to.equal("Minha mãe é uma peça");
        expect(filmeEncontrado.media).to.equal(4.4);
    });

    it('Deve mostrar qual foi o filme classificado como "Filme razoável"', () => {
        const filmeEncontrado = resultado.find(f => f.classificacao === "Filme razoável");
        
        expect(filmeEncontrado).to.not.be.undefined;
        expect(filmeEncontrado.nome).to.equal("Saneamento Básico");
        expect(filmeEncontrado.media).to.equal(3.2);
    });

    it('Deve mostrar qual foi o filme classificado como "Filme ruim"', () => {
        const filmeEncontrado = resultado.find(f => f.classificacao === "Filme ruim");
        
        expect(filmeEncontrado).to.not.be.undefined;
        expect(filmeEncontrado.nome).to.equal("Se eu fosse você");
        expect(filmeEncontrado.media).to.equal(2);
    });
});