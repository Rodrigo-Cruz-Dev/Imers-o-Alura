function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
      section.innerHTML = "Busca vazia"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //Cria um novo elemento

      resultados += `
  <div class="item-resultado">
    <h2>
      <a href="#" target="blank">${dado.titulo}</a>
    </h2>
    <p class = "descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank" >Clique aqui para mais informações</a>
  </div>
      `;
    }
   if (!resultados) { resultados = "Nada foi encontrado"}
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }}