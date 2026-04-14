import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Create a Queue',
      description: 'Define your services, set business hours, and instantly generate your unique QR codes for entry.'
    },
    {
      id: '02',
      title: 'Customers Join',
      description: 'Visitors simply scan the QR code to join the line from their phone and track their position live.'
    },
    {
      id: '03',
      title: 'Call & Serve',
      description: 'Staff use the unified dashboard to call the next person in line instantly with a single click.'
    }
  ];

  return (
    <section id="how-it-works" className="section container">
      <div style={{ textAlign: 'center' }}>
        <div className="badge" style={{ background: 'var(--background)', marginBottom: '24px' }}>How It Works</div>
        <h2 style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--foreground)' }}>From chaos to order in three steps</h2>
        <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
          Setting up your digital queue takes less than two minutes.
        </p>
      </div>

      <div className="steps-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        marginTop: '64px'
      }}>
        {steps.map((step) => (
          <div key={step.id} className="step-card" style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--primary)',
              marginBottom: '20px',
              letterSpacing: '0.05em'
            }}>STEP {step.id}</div>
            <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--foreground)' }}>{step.title}</h3>
            <p style={{ fontSize: '16px' }}>{step.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
