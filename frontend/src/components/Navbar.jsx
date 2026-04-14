import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '72px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '48px'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '20px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--foreground)',
              letterSpacing: '-0.02em'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'var(--primary)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Layers size={18} color="var(--primary-foreground)" />
              </div>
              QTokenizr
            </div>
          </Link>
          <div className="nav-links" style={{
            display: 'flex',
            gap: '32px'
          }}>
            {['Features', 'How it Works', 'Customers', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link" style={{
                color: 'var(--muted-foreground)',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link to="/login">
            <button className="btn btn-outline">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
