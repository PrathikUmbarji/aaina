import React, { useState } from 'react';

const FilterSection = () => {
    const [activeVibe, setActiveVibe] = useState('Old Money');
    const vibes = ['Streetwear', 'Old Money', 'Minimalist', 'Y2K', 'Avant Garde'];

    return (
        <section style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card animate-fade-in" style={{ padding: '1.5rem', display: 'inline-flex', gap: '2rem', alignItems: 'center', animationDelay: '0.2s', flexWrap: 'wrap' }}>

                {/* Vibe Selector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Select Vibe</span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {vibes.map(v => (
                            <button
                                key={v}
                                onClick={() => setActiveVibe(v)}
                                className={`btn ${activeVibe === v ? 'btn-primary' : 'btn-glass'}`}
                                style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Separator */}
                <div style={{ width: '1px', height: '50px', background: 'var(--glass-border)' }}></div>

                {/* Budget Selector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Budget limit</span>
                    <div style={{ padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>₹</span>
                        <input
                            type="text"
                            placeholder="5,000"
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', width: '80px', outline: 'none', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FilterSection;
