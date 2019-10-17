$(function(){
  function carregarLivros(){
    fetch("http://localhost:8080/bookteca-api/src/lerLivros.php").then(function(resposta){
      resposta.json().then(function(json){
        console.log(json)
          let listagem = $("#listagem")
          for(let i = 0 ; i < json.length ; i++){
            let cardAtual = criarCard(json[i].titulo, json[i].subtitulo, json[i].descricao, "https://picsum.photos/200/300?random=" + i)
            listagem.append(cardAtual)
          }

          //add livro em laço, para exir todos os existentes no banco

          // let coluna4 = criarCard(json[0].titulo, json[0].subtitulo, json[0].descricao, "https://lojasaraiva.vteximg.com.br/arquivos/ids/3720535-287-426/1006788139.jpg?v=637045155573000000")
          // listagem.append(coluna4)
        //listagem.append(coluna4)
          //caso queira adicionar os livros de forma estatica e manual

      })
    })
  }

  carregarLivros()

  function criarCard(titulo, subtitulo, descricao, imagem) {
    let coluna4 = $("<div></div>")
    coluna4.addClass("col-4")
    let card = $("<div></div>")
    card.addClass("custom-card")
    coluna4.append(card)
    let cardHeader = $("<header></header>")
    cardHeader.addClass("custom-card-header")
    card.append(cardHeader)
    let cardHeaderTitleContainer = $("<div></div>")
    cardHeaderTitleContainer.addClass("custom-card-header-container")
    let cardHeaderTitle = $("<strong></strong>")
    cardHeaderTitle.addClass("custom-card-header-title")
    cardHeaderTitle.append(titulo)
    let cardHeaderSubtitle = $("<h6></h6>")
    cardHeaderSubtitle.addClass("custom-card-header-subtitle")
    cardHeaderSubtitle.append(subtitulo)
    cardHeaderTitleContainer.append(cardHeaderTitle)
    cardHeaderTitleContainer.append(cardHeaderSubtitle)
    cardHeader.append(cardHeaderTitleContainer)
    cardHeaderIcon = $("<span></span>")
    cardHeaderIcon.addClass("custom-card-header-icon")
    cardHeader.prepend(cardHeaderIcon)
    //prepend tem a função de adicionar algo ao final, já o append no começo
    let cardImg = $("<div></div>")
    cardImg.addClass("custom-card-img")
    cardImg.css("background-image", 'url("'+ imagem + '")')
    card.append(cardImg)

    return coluna4

  }
})
