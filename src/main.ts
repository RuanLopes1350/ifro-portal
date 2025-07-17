import './styles/style.css'
import './styles/header.css'
import './styles/cards.css'
import './styles/map.css'
import './styles/number.css'
import './styles/evento.css'
import './styles/videos.css'
import './styles/footer.css'

// import da função para o mapa interativo
import { setupMapInteraction } from './interatividade-mapa';

// Inicializa a interatividade do mapa
setupMapInteraction();

// Carrossel
const imagens = [
  'capa_vinheta.png',
  'capa_vinheta.png', 
  'capa_vinheta.png'
];

let slideAtual = 0;

function mudarSlide(direcao: number) {
  slideAtual += direcao;
  
  if (slideAtual >= imagens.length) {
    slideAtual = 0;
  }
  if (slideAtual < 0) {
    slideAtual = imagens.length - 1;
  }
  
  const img = document.getElementById('carrossel-img') as HTMLImageElement;
  if (img) {
    img.src = imagens[slideAtual];
  }
}

// Torna a função global
(window as any).mudarSlide = mudarSlide;