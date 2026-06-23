export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4 className="footer-logo">LogoMarca</h4>
          <p className="footer-desc">A solução perfeita para o seu negócio crescer de forma inteligente.</p>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#home">Sobre nós</a></li>
            <li><a href="#home">Faça parte</a></li>
            <li><a href="#home">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Funcionalidades</h4>
          <ul>
            <li><a href="#solucoes">Marketing</a></li>
            <li><a href="#solucoes">Análise de dados</a></li>
            <li><a href="#solucoes">Boot Discovery</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#home">Comunidade</a></li>
            <li><a href="#home">Central de Ajuda</a></li>
            <li><a href="#home">API</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Feito com React + Netlify ❤️ Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};