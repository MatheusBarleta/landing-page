export const Testimonials = () => {
  const depoimentos = [
    {
      nome: "Elon Musk",
      empresa: "CEO, Tesla",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      texto: "A plataforma é muito boa. Tive ótimos resultados com a minha equipe em apenas 2 meses de uso. Recomendo fortemente!"
    },
    {
      nome: "Ryan Gosling",
      empresa: "Ator",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      texto: "A plataforma é muito boa. Tive ótimos resultados com a minha equipe em apenas 2 meses de uso. Recomendo fortemente!"
    }
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Casos de sucesso</span>
          <h2 className="section-title">Cada cliente importa!</h2>
          <p className="section-subtitle">
            Nossos clientes amam a nossa plataforma. Veja aqui o que eles estão falando a respeito da gente.
          </p>
        </div>

        <div className="testimonials-grid">
          {depoimentos.map((item, index) => (
            <div key={index} className="testimonial-card">
              <img src={item.foto} alt={item.nome} className="avatar" />
              <p className="quote">"{item.texto}"</p>
              <div className="stars">★★★★★</div>
              <h4>{item.nome}</h4>
              <span className="role">{item.empresa}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};