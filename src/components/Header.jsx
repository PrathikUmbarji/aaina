import React from 'react';
import { Sparkles, Menu, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="header glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1.25rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>
          <Sparkles color="var(--accent)" size={24} />
          AAINA
        </div>
        
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', display: 'none' }}>
           {/* Add responsive logic inside CSS if needed, but keeping it simple inline here */}
        </nav>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn btn-glass" style={{ padding: '0.5rem', borderRadius: '50%' }}>
             <ShoppingBag size={20} />
          </button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
