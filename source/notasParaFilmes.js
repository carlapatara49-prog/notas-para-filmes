function notasParaFilmes(listasFilmes) {
    return listasFilmes.map(filme => {
        const quantidadeVotos = filme.avaliacoes.length;
        
        // Reduz a lista de notas a uma única soma
        const somaNotas = filme.avaliacoes.reduce((acumulador, nota) => acumulador + nota, 0);
        const media = somaNotas / quantidadeVotos;

        let classificacao = "";

   // Calcular a média de avaliacao dos filmes
        if (media >= 4) {
            classificacao = "Filme recomendado";
        } else if (media >= 3) { 
            classificacao = "Filme razoável";
        } else {
            classificacao = "Filme ruim";
        }

        return {
            nome: filme.nome,
            quantidadeVotos: quantidadeVotos,
            media: media,
            classificacao: classificacao
        };
    });
}

module.exports = { notasParaFilmes };