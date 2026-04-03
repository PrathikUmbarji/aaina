import React from 'react';

const ItemTooltip = ({ item, isHovered }) => {
    if (!isHovered || !item) return null;

    return (
        <div className="glass-card" style={{
            position: 'absolute',
            left: 'calc(100% + 20px)',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '280px',
            padding: '1.25rem',
            zIndex: 50,
            animation: 'fadeIn 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.brand}</p>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--accent)' }}>₹{item.price}</span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.75rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <img src={item.image} alt={item.name} style={{ height: '120px', objectFit: 'contain' }} />
            </div>

            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', padding: '0.75rem 1rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '8px', fontWeight: 500, transition: 'var(--transition)' }}>
                <span>Buy on {item.retailer}</span>
                <span>↗</span>
            </a>
        </div>
    );
};

export default ItemTooltip;
