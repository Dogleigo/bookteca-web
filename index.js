$(function(){
  function carregarLivros(){
    fetch("http://localhost:8080/bookteca-api/src/lerLivros.php").then(function(resposta){
      resposta.json().then(function(json){
        console.log(json)
          let listagem = $("listagem")
          let coluna4 = $("div")
          coluna4.addClass("col-4")
          coluna4.append(json[0].titulo)
          listagem.append(coluna4)
      })
    })
  }

  carregarLivros()
})
