import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      value: '40%',
      title: 'Reduced Perceived Wait Time',
      description: 'By allowing customers to wait anywhere, the anxiety of physical lines completely disappears.'
    },
    {
      value: '95%',
      title: 'Customer Satisfaction',
      description: 'Businesses using QueueFlow see an immediate jump in positive reviews and customer return visits.'
    },
    {
      value: '3x',
      title: 'Faster Processing',
      description: 'Operators work significantly more efficiently when the flow of visitors is automated and structured.'
    }
  ];

  return (
    <section className="section container">
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '120px' }}>
        <div className="benefits-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px'
        }}>
          {benefits.map((benefit, i) => (
            <div key={i} style={{ paddingTop: '32px', borderTop: '3px solid var(--foreground)' }}>
              <div style={{
                fontSize: '64px',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--foreground)',
                marginBottom: '24px'
              }}>{benefit.value}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--foreground)' }}>{benefit.title}</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6 }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
