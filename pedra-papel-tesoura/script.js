function jogar(escolhaUsuario) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaMaquina = opcoes[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (escolhaUsuario === escolhaMaquina) {
    resultado = 'Empate!';
  } else if (
    (escolhaUsuario === 'pedra' && escolhaMaquina === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaMaquina === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaMaquina === 'papel')
  ) {
    resultado = `Você venceu! 🤩 (Computador escolheu ${escolhaMaquina})`;
  } else {
    resultado = `Você perdeu! 😢 (Computador escolheu ${escolhaMaquina})`;
  }

  document.getElementById('resultado').textContent = resultado;
}
