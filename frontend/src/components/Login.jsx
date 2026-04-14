import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layers, Mail, Lock, EyeOff, UserPlus, ArrowLeft } from 'lucide-react';

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
        @media (max-width: 1024px) {
          .login-screen {
            flex-direction: column;
          }
          .auth-side, .visual-side {
            width: 100% !important;
          }
          .visual-side {
            display: none !important;
          }
        }
        .input-field-wrapper:focus-within {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1) !important;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: var(--foreground);
          -webkit-box-shadow: 0 0 0px 1000px var(--input) inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      
      {/* Auth Form Side */}
      <div className="auth-side" style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 64px',
        background: 'var(--background)',
        position: 'relative'
      }}>
        <div className="auth-header" style={{ marginBottom: '32px' }}>
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
            QueueFlow
          </div>
        </div>
        
        <div className="auth-content" style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '400px',
          width: '100%',
          margin: '0 auto'
        }}>
          <div style={{ textAlignment: 'center', marginBottom: '24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--foreground)', marginBottom: '4px', letterSpacing: '-0.03em' }}>
              Welcome back
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--muted-foreground)' }}>
              Please enter your details to sign in.
            </p>
          </div>
          
          <button className="btn btn-outline" style={{ marginBottom: '24px', width: '100%' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '12px' }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Continue with Google
          </button>
          
          <div className="divider" style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            margin: '24px 0',
            color: 'var(--muted-foreground)',
            fontSize: '13px'
          }}>
            <style>{`.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border); } .divider::before { margin-right: 16px; } .divider::after { margin-left: 16px; }`}</style>
            or
          </div>
          
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px', color: 'var(--foreground)' }}>Email</label>
            <div className="input-field-wrapper" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)', 
              padding: '0 16px', 
              background: 'var(--input)', 
              height: '48px', 
              gap: '12px',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}>
              <Mail size={18} color="var(--muted-foreground)" />
              <input 
                type="email" 
                placeholder="hello@example.com" 
                style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '14px', color: 'var(--foreground)', height: '100%' }} 
              />
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0', color: 'var(--foreground)' }}>Password</label>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--primary)', cursor: 'pointer', transition: 'color 0.2s' }} 
                    onMouseOver={(e) => e.target.style.color = 'var(--accent)'} 
                    onMouseOut={(e) => e.target.style.color = 'var(--primary)'}>
                Forgot password?
              </span>
            </div>
            <div className="input-field-wrapper" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)', 
              padding: '0 16px', 
              background: 'var(--input)', 
              height: '48px', 
              gap: '12px',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}>
              <Lock size={18} color="var(--muted-foreground)" />
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '14px', color: 'var(--foreground)', height: '100%' }} 
              />
              <EyeOff size={18} color="var(--muted-foreground)" style={{ cursor: 'pointer', transition: 'color 0.2s' }} 
                      onMouseOver={(e) => e.target.style.color = 'var(--foreground)'}
                      onMouseOut={(e) => e.target.style.color = 'var(--muted-foreground)'}
              />
            </div>
          </div>
          
          <button className="btn btn-primary" style={{ marginTop: '8px', width: '100%' }}>Sign In</button>
          
          <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: 'var(--muted-foreground)' }}>
            Don't have an account? <Link to="/signup" style={{ fontWeight: 500, color: 'var(--primary)' }}>Sign up</Link>
          </div>
        </div>
        
        <div className="auth-footer" style={{
          marginTop: '40px',
          fontSize: '13px',
          color: 'var(--muted-foreground)',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>© {new Date().getFullYear()} QueueFlow Inc.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy</span>
            <span style={{ cursor: 'pointer' }}>Terms</span>
          </div>
        </div>
      </div>

      {/* Visual Presentation Side */}
      <div className="visual-side" style={{
        width: '50%',
        padding: '24px',
        paddingLeft: '0',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="visual-wrapper" style={{
          backgroundColor: 'var(--secondary)',
          borderRadius: '24px',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 48px -12px rgba(0,0,0,0.05)'
        }}>
          <img 
            src="https://storage.googleapis.com/banani-generated-images/generated-images/ce4230de-5230-4f2c-8dc5-6a29f974d6d1.jpg" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zindex: 0 }} 
            alt="Background" 
          />
          
          <div className="visual-content" style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
            <div className="testimonial-card" style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '460px',
              boxShadow: '0 24px 48px -12px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={{ width: '18px', height: '18px', color: '#FBBF24' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: '18px', color: 'var(--card-foreground)', fontWeight: 500, lineHeight: 1.6, marginBottom: '24px' }}>
                "QueueFlow completely transformed our customer experience. Walk-ins are no longer frustrated, and our staff is much more efficient. It paid for itself in the first week."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img 
                  src="https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FNorth%20American%2F2" 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} 
                  alt="Avatar" 
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--card-foreground)' }}>Sarah Jenkins</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>Operations Manager, NextCare</div>
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
