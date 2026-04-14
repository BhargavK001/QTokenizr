import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layers, Mail, Lock, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleBackToLanding = () => {
    navigate('/');
  };

  return (
    <div className="login-screen" style={{ minHeight: '100vh', display: 'flex', background: 'var(--background)' }}>
      <style>{`
        .login-screen {
          --auth-width: 50%;
        }
        .split-left {
          width: 50%;
          display: flex;
          flex-direction: column;
          padding: 32px 64px;
          background: var(--background);
          position: relative;
        }
        .split-right {
          width: 50%;
          padding: 24px;
          padding-left: 0;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .login-screen {
            flex-direction: column;
          }
          .split-left {
            width: 100% !important;
            padding: 32px 24px !important;
            min-height: 100vh;
          }
          .split-right {
            display: none !important;
          }
        }
        .input-field-wrapper:focus-within {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1) !important;
        }
        .btn-social {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 48px;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--background);
          color: var(--foreground);
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }
        .btn-social:hover {
          background: var(--secondary);
          border-color: var(--muted-foreground);
        }
        @media (max-width: 480px) {
          .auth-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 16px;
          }
          .social-btns {
            flex-direction: column;
          }
        }
      `}</style>
      
      {/* Form Side */}
      <div className="split-left">
        <div className="auth-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <div 
            onClick={handleBackToLanding}
            style={{
              fontSize: '20px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--foreground)',
              letterSpacing: '-0.02em',
              cursor: 'pointer'
            }}
          >
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
          <div style={{ fontSize: '14px', color: 'var(--muted-foreground)' }}>
            New to QTokenizr? <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: 600 }}>Create account</Link>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="form-container" style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '400px',
          width: '100%',
          margin: '0 auto'
        }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--foreground)', marginBottom: '8px', letterSpacing: '-0.03em' }}>
              Welcome back
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--muted-foreground)' }}>
              Enter your credentials to access your dashboard.
            </p>
          </div>
          
          <div className="social-btns" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <button className="btn-social">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Google
            </button>
            <button className="btn-social">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </button>
          </div>
          
          <div className="divider" style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            margin: '24px 0',
            color: 'var(--muted-foreground)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <style>{`.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border); } .divider::before { margin-right: 16px; } .divider::after { margin-left: 16px; }`}</style>
            or
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--foreground)' }}>Email</label>
            <div className="input-field-wrapper" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)', 
              padding: '0 14px', 
              background: 'var(--input)', 
              height: '48px', 
              gap: '12px',
              transition: 'all 0.2s ease'
            }}>
              <Mail size={18} color="var(--muted-foreground)" />
              <input type="email" placeholder="example@company.com" style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '14px', color: 'var(--foreground)' }} />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)' }}>Password</label>
              <a href="#" style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 500 }}>Forgot password?</a>
            </div>
            <div className="input-field-wrapper" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)', 
              padding: '0 14px', 
              background: 'var(--input)', 
              height: '48px', 
              gap: '12px',
              transition: 'all 0.2s ease'
            }}>
              <Lock size={18} color="var(--muted-foreground)" />
              <input type="password" placeholder="••••••••" style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '14px', color: 'var(--foreground)' }} />
            </div>
          </div>

          <button className="btn btn-primary" style={{ height: '52px', width: '100%', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: '15px' }}>Sign In</button>
        </div>
        
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--muted-foreground)', padding: '24px 0' }}>
          <span>© {new Date().getFullYear()} QTokenizr Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Support</span>
            <span style={{ cursor: 'pointer' }}>Privacy</span>
          </div>
        </div>
      </div>

      {/* Visual Presentation Side */}
      <div className="split-right">
        <div className="visual-wrapper" style={{
          backgroundColor: 'var(--secondary)',
          borderRadius: '24px',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 48px -12px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(30, 58, 138, 0.05) 100%)',
            zIndex: 0
          }} />

          <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '520px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              padding: '6px',
              boxShadow: '0 32px 64px -16px rgba(0,0,0,0.12)',
              marginBottom: '40px'
            }}>
              <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
                <img 
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/ce4230de-5230-4f2c-8dc5-6a29f974d6d1.jpg" 
                  style={{ width: '100%', display: 'block' }} 
                  alt="App Interface" 
                />
              </div>
            </div>

            <div className="testimonial-card" style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={{ width: '16px', height: '16px', color: '#FBBF24' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: '16px', color: 'var(--card-foreground)', fontWeight: 500, lineHeight: 1.6, marginBottom: '24px' }}>
                "QTokenizr completely transformed our customer experience. Walk-ins are no longer frustrated, and our staff is much more efficient. Highly recommended."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img 
                  src="https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FNorth%20American%2F2" 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                  alt="Avatar" 
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--card-foreground)' }}>Sarah Jenkins</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>Operations Manager, NextCare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
