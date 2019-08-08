window.onload = () => {
  let elementoBotao = document.querySelector('#cadastrar')

  // elementoBotao.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   console.log('Clicou no botão');
  //   let ladda = Ladda.create(elementoBotao)
  //   ladda.start()
  //   let progressoAtual = 0
  //   let interval = 1
  //   setInterval(() => {
  //     ladda.setProgress(progressoAtual += 0.1)
  //     if(progressoAtual>=1){
  //       clearInterval(interval)
  //       ladda.stop()
  //     }
  //   }, 1000)
  // })

  let  formularioLivro = $('#formLivro')
  formularioLivro.validate({
    onkeyup: false,
    rules: {
      titulo: {
        required:true,
        minlength:3
      },
      autor: {
        required:true,
        minlength:10
      },
      idlivro: {
        required:true,
        minlength:3
      },
      genero: {
        required:true,
        minlength:4
    },
      descricao: {
        required:true,
        minlength:30
      }
  },
    messages: {
      titulo: {
        required:'O titulo é obrigatório.',
        minlength: 'O titulo é muito curto.'
      },
      autor: {
        required:'O autor do livro é obrigatório.',
        minlength: 'O nome do autor é muito curto'
      },
      idlivro: {
        required: 'A Identificação única do livro é obrigatória',
        minlength: 'A Identificação única do livro é muito curta'
      },
      genero: {
        required: 'O gênero do livro é obrigatório',
        minlength: 'O gênero do livro é muito pequeno'
      },
      descricao: {
        required: 'A descrição é obrigatória',
        minlength: 'É necessário no minino 30 caracteres'

      }
    },
    errorPlacement:function(error, element) {
      console.log(error, element)
      element.parent().parent().find('.error').append(error).addClass('animated shake')
    },
    errorClass: 'cor-do-erro'
})

}
