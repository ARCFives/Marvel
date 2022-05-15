const characters = document.querySelectorAll('.character')

characters.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const playerAtivo = document.querySelector('.selecionado')
    playerAtivo.classList.remove('selecionado')

    player.classList.add('selecionado')

    const idSelecionado = player.attributes.id.value
    player1.src = `src/images/${idSelecionado}.png`

    const nameSelecionado = player.getAttribute('data-name')
    playerName.innerHTML = `${nameSelecionado}`
  })
})
