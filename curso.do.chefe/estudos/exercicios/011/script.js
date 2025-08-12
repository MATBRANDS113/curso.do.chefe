const noticias = [
  { categoria: "Política", titulo: "🚨 Tiroteio em Brasília deixa três feridos", texto: "Confusão em frente ao Congresso termina com intervenção da polícia." },
  { categoria: "Clima", titulo: "🌪️ Tempestade atinge o Sul do Brasil", texto: "Defesa Civil emite alerta vermelho para cinco estados." },
  { categoria: "Economia", titulo: "💸 Dólar dispara e ultrapassa R$ 6,00", texto: "Mercado reage mal após anúncio inesperado do Banco Central." },
  { categoria: "Esportes", titulo: "🏆 Brasil vence Argentina por 3x2", texto: "Gol de bicicleta nos acréscimos garante vitória histórica no Maracanã." },
  { categoria: "Ciência", titulo: "🚀 Cientistas descobrem sinal vindo de Marte", texto: "Pesquisadores não descartam hipótese de comunicação artificial." },
  { categoria: "Tecnologia", titulo: "🤖 Robô da OpenAI ganha debate em Harvard", texto: "Modelo de linguagem vence universitários em discussão pública." },
  { categoria: "Saúde", titulo: "🧬 Nova vacina contra câncer tem 94% de eficácia", texto: "Pesquisadores anunciam testes promissores em humanos." }
];

let index = 0;

function carregarMais() {
  const container = document.getElementById('noticias-container');
  for (let i = 0; i < 2 && index < noticias.length; i++, index++) {
    const item = noticias[index];
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h4>[${item.categoria}] ${item.titulo}</h4>
      <p>${item.texto}</p>
    `;
    container.appendChild(div);
  }

  if (index >= noticias.length) {
    document.querySelector('button').style.display = 'none';
  }
}

// Mostra a hora atual formatada
function atualizarHora() {
  const agora = new Date();
  const hora = agora.toLocaleTimeString('pt-BR');
  document.getElementById('hora-atualizada').textContent = `Última atualização: ${hora}`;
}

window.onload = function () {
  carregarMais();
  atualizarHora();

  // Toca som do plantão se estiver disponível
  const som = document.getElementById("som-plantao");
  if (som) {
    som.volume = 0.6;
    som.play().catch(() => {}); // Em alguns navegadores precisa de interação do usuário
  }
};
