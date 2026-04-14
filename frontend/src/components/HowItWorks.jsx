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
    <section id="how-it-works" className="section" style={{ background: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>How it works</div>
          <h2 style={{ fontSize: '42px', marginBottom: '12px' }}>Get running in minutes</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>A simple 3-step process to transform your customer journey.</p>
        </div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginTop: '48px'
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
      </div>
    </section>
  );
};

export default HowItWorks;
