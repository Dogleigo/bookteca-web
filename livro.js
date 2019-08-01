window.onload = () => {
  let elementoBotao = document.querySelector('#cadastrar')

  elementoBotao.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Clicou no botão');
    let ladda = Ladda.create(elementoBotao)
    ladda.start()
    let progressoAtual = 0
    let interval = 1
    setInterval(() => {
      ladda.setProgress(progressoAtual += 0.1)
      if(progressoAtual>=1){
        clearInterval(interval)
        ladda.stop()
      }
    }, 1000)
  })


}
