export const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <span className="tag">Olá</span>
        <h1 className="hero-title">Uma solução que irá te entregar X</h1>
        <p className="hero-subtitle">
          Você está pronto para a sua nova vida. Venha conhecer a nossa plataforma e veja as melhores opções para o seu negócio.
        </p>
        <div className="hero-buttons">
          <a href="#planos" className="btn btn-primary">Começar agora</a>
          <a href="#solucoes" className="btn btn-outline">Saiba mais</a>
        </div>
      </div>

      {/* A forma geométrica azul do lado direito (Desktop) / topo (Mobile) */}
      <div className="hero-bg-shape"></div>
    </section>
  );
};