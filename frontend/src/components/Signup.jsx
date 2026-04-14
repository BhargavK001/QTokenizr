import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layers, Mail, Lock, EyeOff, User } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  const handleBackToLanding = () => {
    navigate('/');
  };

  return (
    <div className="signup-screen" style={{ minHeight: '100vh', display: 'flex', background: 'var(--background)' }}>
      <style>{`
        .signup-screen {
          --auth-width: 50%;
        }
        @media (max-width: 1024px) {
          .signup-screen {
            flex-direction: column;
          }
          .split-left, .split-right {
            width: 100% !important;
            max-width: 100% !important;
          }
          .split-right {
            display: none !important;
          }
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--border);
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

      {/* Left Side: Form */}
      <div className="split-left" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        background: 'var(--background)',
        maxWidth: '50%'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div 
            onClick={handleBackToLanding}
            style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', letterSpacing: '-0.02em', cursor: 'pointer' }}
          >
            <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={18} color="var(--primary-foreground)" />
            </div>
            QueueFlow
          </div>
          <div style={{ fontSize: '14px', color: 'var(--muted-foreground)' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 500 }}>Log in</Link>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="form-container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="form-wrapper" style={{ width: '100%', maxWidth: '400px', padding: '24px 0' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px', color: 'var(--foreground)', letterSpacing: '-0.02em' }}>Get started for free</h1>
            <p style={{ fontSize: '15px', color: 'var(--muted-foreground)', marginBottom: '24px' }}>No credit card required. Setup takes less than 2 minutes.</p>
            
            {/* Social Logins */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="btn btn-outline" style={{ flex: 1 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </div>
              <div className="btn btn-outline" style={{ flex: 1 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                  <path d="M2 3h9v9H2V3zm11 0h9v9h-9V3zM2 14h9v9H2v-9zm11 0h9v9h-9v-9z" fill="currentColor"></path>
                </svg>
                Microsoft
              </div>
            </div>

            <div className="divider" style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0' }}>
              <div className="divider-line"></div>
              <div style={{ fontSize: '13px', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Or continue with email</div>
              <div className="divider-line"></div>
            </div>

            {/* Form Fields */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', marginBottom: '8px' }}>First name</label>
                <div className="input-field-wrapper" style={{ height: '48px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0 16px', display: 'flex', alignItems: 'center', background: 'var(--input)', gap: '12px', transition: 'all 0.2s ease' }}>
                  <User size={18} color="var(--muted-foreground)" />
                  <input type="text" placeholder="Jane" style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--foreground)' }} />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', marginBottom: '8px' }}>Last name</label>
                <div className="input-field-wrapper" style={{ height: '48px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0 16px', display: 'flex', alignItems: 'center', background: 'var(--input)', gap: '12px', transition: 'all 0.2s ease' }}>
                  <User size={18} color="var(--muted-foreground)" />
                  <input type="text" placeholder="Doe" style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--foreground)' }} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', marginBottom: '8px' }}>Work email</label>
              <div className="input-field-wrapper" style={{ height: '48px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0 16px', display: 'flex', alignItems: 'center', background: 'var(--input)', gap: '12px', transition: 'all 0.2s ease' }}>
                <Mail size={18} color="var(--muted-foreground)" />
                <input type="email" placeholder="jane@company.com" style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--foreground)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', marginBottom: '8px' }}>Password</label>
              <div className="input-field-wrapper" style={{ height: '48px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0 16px', display: 'flex', alignItems: 'center', background: 'var(--input)', justifyContent: 'space-between', gap: '12px', transition: 'all 0.2s ease' }}>
                <Lock size={18} color="var(--muted-foreground)" />
                <input type="password" placeholder="••••••••" style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '14px', color: 'var(--foreground)' }} />
                <EyeOff size={18} color="var(--muted-foreground)" style={{ cursor: 'pointer' }} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted-foreground)', marginTop: '8px' }}>Must be at least 8 characters long.</div>
            </div>

            <div className="btn btn-primary" style={{ marginBottom: '24px', width: '100%' }}>
              Create account
            </div>

            <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', textAlign: 'center', lineHeight: 1.6 }}>
              By creating an account, you agree to our <span style={{ color: 'var(--foreground)', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: 'var(--foreground)', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Visual/Testimonial */}
      <div className="split-right" style={{
        flex: 1,
        background: 'var(--secondary)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        borderLeft: '1px solid var(--border)',
        maxWidth: '50%'
      }}>
        {/* Pattern BG implemented with CSS above */}
        <div className="pattern-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px', alignItems: 'center' }}>
          
          <div style={{ marginBottom: '48px', width: '100%', maxWidth: '560px' }}>
            {/* Product visual */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '8px', boxShadow: '0 24px 48px -12px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', padding: '4px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--muted)', border: '1px solid var(--border)' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--muted)', border: '1px solid var(--border)' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--muted)', border: '1px solid var(--border)' }}></div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img 
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/86ff86e9-02d2-4f06-8378-60d3ee819c98.jpg" 
                  style={{ width: '100%', display: 'block' }} 
                  alt="Dashboard Preview"
                />
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ maxWidth: '560px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: '0 12px 24px -12px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '4px', color: 'var(--primary)', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} style={{ width: '16px', height: '16px', color: 'var(--primary)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: '18px', color: 'var(--foreground)', fontWeight: 500, lineHeight: 1.5, marginBottom: '24px' }}>
              "QueueFlow is easily the best investment we made this year. We eliminated our chaotic waiting room on day one, and both staff and customers love it."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img 
                  src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F35-50%2FNorth%20American%2F3" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  alt="Customer"
                />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--foreground)', fontSize: '15px' }}>Michael Chang</div>
                <div style={{ fontSize: '14px', color: 'var(--muted-foreground)' }}>Director of Operations, Vertex Clinics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
