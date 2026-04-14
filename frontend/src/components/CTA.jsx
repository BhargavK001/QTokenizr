import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section container">
      <div className="cta-box" style={{
        background: 'var(--foreground)',
        color: 'var(--background)',
        borderRadius: '32px',
        padding: '100px 40px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 32px 64px -16px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ fontSize: '56px', lineHeight: 1.1, marginBottom: '24px', maxWidth: '800px', color: 'var(--background)' }}>
          Start managing your queue today.
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '600px' }}>
          Join thousands of businesses providing a superior waiting experience. Setup takes less than 2 minutes.
        </p>
        <Link to="/signup">
          <button className="btn" style={{
            background: 'var(--background)',
            color: 'var(--foreground)',
            height: '56px',
            padding: '0 32px',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: '12px'
          }}>
            Create Account
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-box h2 { font-size: 36px !important; }
          .cta-box { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
