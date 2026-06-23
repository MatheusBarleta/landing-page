import { useState, FormEvent } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'enviando' | 'sucesso' | 'erro'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('enviando');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString()
    })
      .then(() => setStatus('sucesso'))
      .catch(() => setStatus('erro'));
  };

  return (
    <section id="contato" className="contact-section container">
      <div className="section-header">
        <span className="tag">Fale com a gente</span>
        <h2 className="section-title">Entre em contato</h2>
        <p className="section-subtitle">
          Tire suas dúvidas, marque uma conversa ou envie um feedback.
        </p>
      </div>

      <form name="landing_contato" method="POST" data-netlify="true" onSubmit={handleSubmit} className="contact-form">
        <input type="hidden" name="form-name" value="landing_contato" />

        <div className="input-group">
          <input type="text" name="nome" placeholder="Seu Nome" required disabled={status === 'enviando'} />
        </div>

        <div className="input-group">
          <input type="email" name="email" placeholder="Seu E-mail" required disabled={status === 'enviando'} />
        </div>

        <div className="input-group">
          <textarea name="mensagem" rows={4} placeholder="Sua mensagem..." required disabled={status === 'enviando'}></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === 'enviando'}>
          {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {status === 'sucesso' && <p className="msg-success">✓ Mensagem enviada com sucesso!</p>}
        {status === 'erro' && <p className="msg-error">Ocorreu um erro. Tente novamente.</p>}
      </form>
    </section>
  );
};