import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container">
      <nav className="navbar">
        <div className="logo">LogoMarca</div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#solucoes" onClick={() => setIsOpen(false)}>Soluções</a></li>
          <li><a href="#depoimentos" onClick={() => setIsOpen(false)}>Depoimentos</a></li>
          <li><a href="#planos" onClick={() => setIsOpen(false)}>Planos</a></li>
          <li><a href="#contato" onClick={() => setIsOpen(false)}>Contato</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#login" className="btn-text">Login</a>
          <a href="#cadastrar" className="btn btn-primary">Cadastrar</a>
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </nav>
    </header>
  );
};