import './App.css'
import Curtain from './components/Curtain'
import confetti from 'canvas-confetti';
import Modal from 'react-modal';
import { useState } from 'react';
export default function App()
{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDecline = () => {
    const errorDiv = document.querySelector('.error');
    const randomX = Math.floor(Math.random() * (window.innerWidth - errorDiv.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - errorDiv.offsetHeight));
    
    errorDiv.style.position = 'absolute';
    errorDiv.style.left = `${randomX}px`;
    errorDiv.style.top = `${randomY}px`;
  
    errorDiv.style.transition = 'left .5s ease, top .5s ease';
  };

  const handleConfirm = () => {
    // Gerar confetes em várias origens pela tela
    for (let i = 0; i < 6; i++) { // Gerar confetes de 5 origens diferentes
      confetti({
        particleCount: 500, // Número de confetes
        spread: 360, // Maior dispersão, garantindo que os confetes se espalhem por toda tela
        origin: {
          x: Math.random(),  // Posição aleatória ao longo do eixo X
          y: Math.random() - 0.2 // Posição aleatória ao longo do eixo Y, para distribuir bem
        },
        colors: ['#ff0044', '#ff9900', '#ffcc00', '#66ff66', '#0066ff', '#9933ff'], // Cores variadas
        scalar: 1.2, // Aumentar o tamanho dos confetes
        gravity: 0.4, // Gravidade para adicionar mais realismo
        ticks: 150, // A duração dos confetes no ar
        startVelocity: 45, // A velocidade inicial dos confetes
        particleWidth: 8, // Largura dos confetes
        particleHeight: 8, // Altura dos confetes
        angle: 60, // O ângulo do movimento dos confetes
        shapes: ['square', 'circle'], // Formas variadas para os confetes
      });
    }

    setIsModalOpen(true);  // Abre o modal
    
  };

  const close = () => {
    for (let i = 0; i < 6; i++) { // Gerar confetes de 5 origens diferentes
      confetti({
        particleCount: 400, // Número de confetes
        spread: 360, // Maior dispersão, garantindo que os confetes se espalhem por toda tela
        origin: {
          x: Math.random(),  // Posição aleatória ao longo do eixo X
          y: Math.random() - 0.2 // Posição aleatória ao longo do eixo Y, para distribuir bem
        },
        colors: ['#ff0044', '#ff9900', '#ffcc00', '#66ff66', '#0066ff', '#9933ff'], // Cores variadas
        scalar: 1.2, // Aumentar o tamanho dos confetes
        gravity: 0.4, // Gravidade para adicionar mais realismo
        ticks: 150, // A duração dos confetes no ar
        startVelocity: 45, // A velocidade inicial dos confetes
        particleWidth: 8, // Largura dos confetes
        particleHeight: 8, // Altura dos confetes
        angle: 60, // O ângulo do movimento dos confetes
        shapes: ['square', 'circle'], // Formas variadas para os confetes
      });
    }
    setIsModalOpen(false)
  }

  return (
    <div className='main-container'>
      <Curtain/>
      <div className='error'>
          <div className='error-nav'>
            <p>Mensagem do Sistema</p>
            <button className='click' onClick={handleDecline}>X</button>
          </div>
          <div className='error-body'>
            <h2>FOTOPATA HOJE? ⚠️</h2>
            <div className='buttons'>
              <button className='confirm-btn' onClick={handleConfirm}>Sim</button>
              <button className='decline-btn' onClick={handleDecline}>Não</button>
            </div>
          </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Exemplo de Modal"
        className="modal"
        overlayClassName="overlay" 
      >
        <div className='modal-content'>
          <h2>FELIZ ANIVERSÁRIO MIO AMO 🎉🎉</h2>
          <p>AROOOOOOOOOOOO, que negócio brega mai eu fiz </p>
          <p>É teu dia, tu non gosta mai eu vo manda aquele textão crypto</p>
          <p>PRIMERAMENTE, buenos dias crypto</p>
          <p>Tu é muito importante pra ieu, mesmo nos se conhecendo apenas por mensagem, por jogos, por vídeos, mas mesmo assim é uma conexão absurda
            parece que você esta aqui do meu lado me ajudando, tu pode não perceber mas tu já me ajudou demais, com palavras, com textos, com brincadeiras,
            com risadas, com conselhos crypto, e sei nem o que dizer, GRACIAS por fazer diferença na minha vida e deixar o meu mundo mais feliz a cada dia,
            nós non se encontramos mas sei que podemos ser INSANOS JUNTOS
          </p>
          <p>MIA DOLLYTITA MIA VIDA PARABÉNS CRYPTO TU É INCRIVEL NÃO DEIXE NINGUEM TE DIZER O CONTRARIO</p>
          <p>Tudo pode parecer difícil mas eu sempre vou estar aqui crypto te ajudando, mesmo as vezes não sabendo o que fazer.</p>
          <p>Te AAMO Demais ❤️❤️</p>
          <button onClick={close}>Fechar</button>
        </div>
      </Modal>
    </div>
    
  )
}