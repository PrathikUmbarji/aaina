import React, { useState } from 'react';
import ItemTooltip from './ItemTooltip';

// Mock data for the current model outfit
const mockOutfitData = {
    shirt: {
        id: 'shirt',
        name: 'Oversized Washed Tee',
        brand: 'Minimal Lab',
        price: '1499',
        retailer: 'Ajio',
        url: 'https://www.ajio.com/',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200',
        top: '30%',
        left: '50%'
    },
    pants: {
        id: 'pants',
        name: 'Cargo Parachute Pants',
        brand: 'Streetwear Co',
        price: '2999',
        retailer: 'Myntra',
        url: 'https://www.myntra.com/',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=200',
        top: '65%',
        left: '50%'
    },
    shoes: {
        id: 'shoes',
        name: 'Retro Chunky Sneakers',
        brand: 'Nike',
        price: '8995',
        retailer: 'Ajio',
        url: 'https://www.ajio.com/',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200',
        top: '90%',
        left: '50%'
    }
};

const OutfitModel = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <section style={{ padding: '0 0 6rem 0', display: 'flex', justifyContent: 'center' }}>
            <div className="model-container animate-fade-in" style={{ position: 'relative', width: '380px', height: '600px', animationDelay: '0.4s' }}>

                {/* Abstract Dummy Model SVG */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.8, display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
                    <svg width="220" height="500" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))' }}>
                        {/* Head */}
                        <circle cx="50" cy="20" r="15" fill="var(--glass-bg)" stroke="var(--glass-border)" strokeWidth="1" />
                        {/* Torso */}
                        <path d="M 30,50 L 70,50 L 65,120 L 35,120 Z" fill="var(--glass-bg)" stroke="var(--glass-border)" strokeWidth="1" />
                        {/* Arms */}
                        <path d="M 30,50 C 15,60 15,100 15,100" stroke="var(--glass-border)" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 70,50 C 85,60 85,100 85,100" stroke="var(--glass-border)" strokeWidth="8" strokeLinecap="round" />
                        {/* Legs */}
                        <path d="M 35,120 L 25,230" stroke="var(--glass-border)" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 65,120 L 75,230" stroke="var(--glass-border)" strokeWidth="12" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Interactive Spots */}
                {Object.values(mockOutfitData).map((item) => (
                    <div
                        key={item.id}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                            position: 'absolute',
                            top: item.top,
                            left: item.left,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* The pulsing spot */}
                        <div
                            style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: hoveredItem === item.id ? 'var(--accent)' : 'rgba(255,255,255,0.8)',
                                boxShadow: hoveredItem === item.id ? '0 0 15px var(--accent)' : '0 0 10px rgba(255,255,255,0.4)',
                                cursor: 'pointer',
                                transition: 'var(--transition)',
                                animation: hoveredItem === item.id ? 'none' : 'pulse-glow 2s infinite cubic-bezier(0.66, 0, 0, 1)'
                            }}
                        />

                        {/* Tooltip */}
                        <ItemTooltip item={item} isHovered={hoveredItem === item.id} />
                    </div>
                ))}

            </div>
        </section>
    );
};

export default OutfitModel;
