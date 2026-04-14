import React from 'react';
import { Activity, Ticket, Monitor } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>Features</div>
          <h2 style={{ fontSize: '42px', marginBottom: '12px' }}>Everything you need to scale</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>QTokenizr provides you with all the tools you need to optimize your customer flow and eliminate physical lines forever.</p>
        </div>

        <div className="features-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)', 
        gap: '16px',
        gridAutoRows: 'minmax(200px, auto)'
      }}>
    <div className="bento-card bento-large" style={{
            gridColumn: 'span 7',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 24px -12px rgba(0,0,0,0.02)'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <div className="icon-box" style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                background: 'var(--primary)',
                color: 'var(--primary-foreground)'
              }}>
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '12px', color: 'var(--foreground)' }}>Real-Time Queue Tracking</h3>
              <p style={{ fontSize: '18px', maxWidth: '440px' }}>Monitor your entire facility at a glance. See who is waiting, who is being served, and predict wait times automatically.</p>
            </div>
            <div style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '16px', padding: '16px', boxShadow: '0 12px 24px -12px rgba(0,0,0,0.05)' }}>
              <img 
                src="https://storage.googleapis.com/banani-generated-images/generated-images/ce2aab77-07e2-42f4-b7d9-4e9e1708aa91.jpg" 
                alt="Queue Tracking"
                style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }} 
              />
            </div>
          </div>

          {/* Small Features Column */}
          <div className="bento-small" style={{
            gridColumn: 'span 5',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div className="bento-card" style={{
              flex: 1,
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div className="icon-box" style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)'
              }}>
                <Ticket size={24} />
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--foreground)' }}>Smart Token Management</h3>
              <p style={{ fontSize: '16px' }}>Customers scan a QR code to receive a digital ticket instantly on their phone. No app required.</p>
            </div>
            <div className="bento-card" style={{
              flex: 1,
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div className="icon-box" style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)'
              }}>
                <Monitor size={24} />
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--foreground)' }}>Live Display Screen</h3>
              <p style={{ fontSize: '16px' }}>Cast a beautiful, distraction-free waiting list to any TV or monitor in your lobby seamlessly.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-large, .bento-small { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default Features;
