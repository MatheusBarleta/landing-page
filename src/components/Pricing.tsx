export const Pricing = () => {
  return (
    <section id="planos" className="pricing container">
      <div className="section-header">
        <span className="tag">Nossos pacotes</span>
        <h2 className="section-title">Nossos planos</h2>
      </div>

      <div className="pricing-grid">
        {/* Card 1 */}
        <div className="pricing-card">
          <h3>Básico</h3>
          <p className="desc">Para quem está começando e quer experimentar.</p>
          <div className="price-block">
            <span className="price">Grátis</span>
          </div>
          <button className="btn btn-outline btn-block">Assinar plano</button>
          <ul className="pricing-features">
            <li><span className="check">✓</span> 1 usuário</li>
            <li><span className="check">✓</span> Dashboard básico</li>
            <li><span className="check">✓</span> Suporte por e-mail</li>
          </ul>
        </div>

        {/* Card 2 - DESTAQUE */}
        <div className="pricing-card popular">
          <span className="popular-badge">Mais vendido</span>
          <h3>Premium</h3>
          <p className="desc">Para times que buscam o melhor desempenho.</p>
          <div className="price-block">
            <span className="price">R$ 19,90</span> <span className="period">/ mês</span>
          </div>
          <button className="btn btn-primary btn-block">Experimente de graça</button>
          <ul className="pricing-features">
            <li><span className="check">✓</span> Usuários ilimitados</li>
            <li><span className="check">✓</span> Dashboard avançado</li>
            <li><span className="check">✓</span> Suporte prioritário 24/7</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="pricing-card">
          <h3>Empresarial</h3>
          <p className="desc">Maior customização para empresas maiores.</p>
          <div className="price-block">
            <span className="price">R$ 12,90</span> <span className="period">/ user / mês</span>
          </div>
          <button className="btn btn-outline btn-block">Fale com vendas</button>
          <ul className="pricing-features">
            <li><span className="check">✓</span> Tudo do Premium</li>
            <li><span className="check">✓</span> Gestor dedicado</li>
            <li><span className="check">✓</span> SLA de 99.9%</li>
          </ul>
        </div>
      </div>
    </section>
  );
};