import React from 'react';
import { Layers, MessageCircle, GitBranch, Briefcase } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border)', padding: '80px 0 40px' }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '64px',
          marginBottom: '80px'
        }}>
          <div>
            <div style={{
              fontSize: '20px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--foreground)',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: 'var(--primary)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Layers size={16} color="var(--primary-foreground)" />
              </div>
              QTokenizr
            </div>
            <p style={{ fontSize: '15px', maxWidth: '280px', margin: 0 }}>
              The modern digital queue management system for forward-thinking businesses worldwide.
            </p>
          </div>
          
          {[
            { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security'] }
          ].map((col, i) => (
            <div key={i} className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 600 }}>{col.title}</span>
              {col.links.map((link) => (
                <a key={link} href="#" style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '32px',
          borderTop: '1px solid var(--border)'
        }}>
          <span style={{ color: 'var(--muted-foreground)', fontSize: '14px' }}>
            © {currentYear} QTokenizr Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[MessageCircle, GitBranch, Briefcase].map((Icon, i) => (
              <a key={i} href="#" style={{ color: 'var(--muted-foreground)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:first-child { margin-bottom: 20px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
