import React, { useState } from 'react';
import '../styles/App.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Simulação de envio para Formspree
      console.log('Enviando formulário:', formData);
      
      // Em produção, descomente a chamada real:
      /*
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Falha no envio');
      */
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Fale Conosco</h2>
      
      <div className="form-group">
        <label htmlFor="name">Nome *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange}
          rows={4}
        />
      </div>

      {status === 'success' && (
        <p className="form-success">Mensagem enviada com sucesso! Entraremos em contato.</p>
      )}
      
      {status === 'error' && (
        <p className="form-error">Erro ao enviar. Tente novamente mais tarde.</p>
      )}

      <button 
        type="submit" 
        className="cta-button form-submit cta-primary"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      <p className="privacy-note">
        Ao enviar este formulário, você concorda com nossa{' '}
        <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.
      </p>
    </form>
  );
};

export default Form;
