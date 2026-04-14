import React from 'react';
import { LayoutDashboard, Smartphone, Check } from 'lucide-react';

const ProductPreviews = () => {
  return (
    <section className="section container" style={{ paddingTop: '40px' }}>
      {/* Owner Dashboard */}
      <div className="preview-row" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
        marginBottom: '160px'
      }}>
        <div className="preview-content" style={{ flex: 1, paddingRight: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: '14px',
            marginBottom: '20px'
          }}>
            <LayoutDashboard size={18} /> FOR TEAMS
          </div>
          <h2 style={{ fontSize: '36px', marginBottom: '24px', color: 'var(--foreground)', lineHeight: 1.2 }}>
            Command central for your staff
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', lineHeight: 1.6 }}>
            Give your team the tools they need to process visitors efficiently without the stress of managing a physical line.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'One-click "Call Next" functionality',
              'Send automated SMS notifications',
              'Track staff performance metrics'
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Check size={16} color="var(--primary)" />
                </div>
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--foreground)' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="preview-visual" style={{
          flex: 1.2,
          borderRadius: '24px',
          border: '1px solid var(--border)',
          background: 'var(--card)',
          padding: '12px',
          boxShadow: '0 24px 48px -12px rgba(0,0,0,0.05)'
        }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img 
              src="https://storage.googleapis.com/banani-generated-images/generated-images/4722b011-1655-4a6d-95cd-46a09df6c109.jpg" 
              alt="Owner Dashboard" 
              style={{ width: '100%' }} 
            />
          </div>
        </div>
      </div>

      {/* Customer Interface */}
      <div className="preview-row reverse" style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: '80px'
      }}>
        <div className="preview-content" style={{ flex: 1, paddingLeft: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: '14px',
            marginBottom: '20px'
          }}>
            <Smartphone size={18} /> FOR CUSTOMERS
          </div>
          <h2 style={{ fontSize: '36px', marginBottom: '24px', color: 'var(--foreground)', lineHeight: 1.2 }}>
            A seamless waiting experience
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', lineHeight: 1.6 }}>
            Customers can run errands or grab a coffee while they wait. They'll know exactly when it's their turn down to the minute.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'Live countdown of wait time',
              'No app download required',
              'Ability to delay turn if running late'
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Check size={16} color="var(--primary)" />
                </div>
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--foreground)' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="preview-visual" style={{
          flex: 1.2,
          borderRadius: '24px',
          border: '1px solid var(--border)',
          background: 'var(--secondary)',
          display: 'flex',
          justifyContent: 'center',
          padding: '48px',
          boxShadow: '0 24px 48px -12px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            width: '280px',
            borderRadius: '40px',
            border: '12px solid var(--border)',
            overflow: 'hidden',
            background: 'var(--background)',
            boxShadow: '0 24px 48px -12px rgba(0,0,0,0.1)'
          }}>
             <img 
               src="https://storage.googleapis.com/banani-generated-images/generated-images/288c686a-e572-4b38-afbf-7ae82f41e0cf.jpg" 
               alt="Customer App"
               style={{ width: '100%' }} 
             />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .preview-row, .preview-row.reverse { 
            flex-direction: column !important; 
            gap: 40px !important;
            margin-bottom: 80px !important;
          }
          .preview-content { padding: 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default ProductPreviews;
