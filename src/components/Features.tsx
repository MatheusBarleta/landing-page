export const Features = () => {
  const cards = [1, 2, 3]; // Mock para gerar os 3 cards idênticos da imagem

  return (
    <section id="solucoes" className="features container">
      <div className="section-header">
        <span className="tag">Soluções</span>
        <h2 className="section-title">Sob medida para você</h2>
        <p className="section-subtitle">
          Nossos pacotes foram feitos sob medida para a sua realidade. Escolha o seu e mude a sua vida agora.
        </p>
      </div>

      <div className="features-grid">
        {cards.map((id) => (
          <div key={id} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15L8.5 21L12 19L15.5 21L12 15Z"/><circle cx="12" cy="8" r="5"/>
              </svg>
            </div>
            <h3>Produto Vencedor</h3>
            <p>
              Esse produto foi desenhado para as pessoas mudarem de patamar com nossa ajuda em extrema escala. Marque sua reunião e mude de vida agora.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};  