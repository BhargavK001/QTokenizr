import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      paddingTop: '100px', 
      paddingBottom: '60px', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="badge" style={{ marginBottom: '16px' }}>
          ✨ Over 2,000+ teams optimized their wait times
        </div>
        <h1 style={{ fontSize: '72px', maxWidth: '900px', margin: '0 auto 16px', color: 'var(--foreground)' }}>
          Eliminate lines. <span style={{ color: 'var(--primary)' }}>Empower customers.</span>
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '650px', margin: '0 auto 32px' }}>
          The modern, intelligent queue management system that eliminates physical lines, optimizes wait times, and transforms your customer experience.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
        <Link to="/signup">
          <button className="btn btn-primary btn-lg">Get Started Free</button>
        </Link>
        <button className="btn btn-secondary btn-lg">
          Join Queue
          <ArrowRight size={18} style={{ marginLeft: '8px' }} />
        </button>
      </div>

      {/* Dashboard Mockup */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <div style={{
          borderRadius: '20px',
          border: '1px solid var(--border)',
          background: 'var(--card)',
          padding: '12px',
          boxShadow: '0 32px 64px -16px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', padding: '4px 8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--muted-foreground)', opacity: 0.3 }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--muted-foreground)', opacity: 0.3 }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--muted-foreground)', opacity: 0.3 }}></div>
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--background)' }}>
            <img 
              src="https://storage.googleapis.com/banani-generated-images/generated-images/0dceb11e-befc-4e88-a882-a07b44ec3f6f.jpg" 
              alt="QTokenizr Dashboard" 
              style={{ width: '100%' }} 
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
