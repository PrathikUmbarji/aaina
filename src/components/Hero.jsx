import React from 'react';

const Hero = () => {
    return (
        <section className="hero animate-fade-in" style={{ padding: '8rem 0 4rem', textAlign: 'center', position: 'relative' }}>
            {/* Decorative Blur Backgrounds */}
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '400px', background: 'radial-gradient(circle, rgba(229,208,161,0.08) 0%, rgba(10,10,12,0) 70%)', filter: 'blur(40px)', zIndex: -1 }} />

            <div className="container">
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                    Curated Fashion,<br />
                    <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>Unbound.</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 300 }}>
                    Experience the finest curation from top retailers. Visualize complete aesthetic outfits superimposed just for you.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Build Your Own
                    </button>
                    <button className="btn btn-glass" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Explore Curations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
