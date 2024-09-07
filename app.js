function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se a pesquisa for vazia
    if (!campoPesquisa){
        section.innerHTML = "<p>Campo de pesquisa vazia - sem resultados</p>"
        return
    }

    // Transforma todas as letras em minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // Se o dado contém o que pesquisamos, mostra nos resultados
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Gera o HTML e armazena na variável para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Sem resultados encontrados</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados
}