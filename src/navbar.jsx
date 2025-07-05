import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X, ChevronDown, MessageSquare, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Products',
      hasDropdown: true,
      items: ['AI & Analytics', 'Automation', 'Cloud', 'Security', 'Infrastructure', 'Consulting', 'Research'],
    },
    {
      name: 'Solutions',
      hasDropdown: true,
      items: ['By Industry', 'By Business Function', 'By Technology'],
    },
    {
      name: 'Consulting',
      hasDropdown: false,
    },
    {
      name: 'Learn',
      hasDropdown: true,
      items: ['Documentation', 'Training', 'Developer Resources', 'Community'],
    },
    {
      name: 'Support',
      hasDropdown: false,
    },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">

          {/* Left: Logo and Divider */}
          <div className="navbar-left">
            <div className="nav-item">
              <button className="nav-button ibm-logo-button" onClick={() => window.location.href = '/'}>
                <img src="/ibm.png" alt="IBM Logo" className="ibm-logo" />
              </button>
            </div>
            <div className="vl"></div>
           

          {/* Center: Desktop Nav */}
          <div className="desktop-nav">
            {navigationItems.map((item) => (
              <div key={item.name} className="nav-item">
                <button
                  className="nav-button"
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`nav-chevron ${activeDropdown === item.name ? 'rotated' : ''}`} />
                  )}
                </button>
                {item.hasDropdown && item.items && activeDropdown === item.name && (
                  <div className="dropdown-menu">
                    <div className="dropdown-content">
                      {item.items.map((subItem) => (
                        <a key={subItem} href="#" className="dropdown-item">
                          <span className="dropdown-text">{subItem}</span>
                          <span className="dropdown-arrow">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>

          {/* Right: Icons */}
          <div className="navbar-actions">
            <button className="action-button"><Search className="action-icon" /></button>
            <button className="action-button"><User className="action-icon" /></button>
            <button className="action-button"><MessageSquare className="action-icon" /></button>
            <button className="action-button"><Globe className="action-icon" /></button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="mobile-menu-toggle">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="action-button">
              {isMobileMenuOpen ? <X className="action-icon" /> : <Menu className="action-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            {navigationItems.map((item) => (
              <div key={item.name} className="mobile-nav-item">
                <button
                  className="mobile-nav-button"
                  onClick={() => item.hasDropdown ? toggleDropdown(item.name) : setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`nav-chevron ${activeDropdown === item.name ? 'rotated' : ''}`} />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.hasDropdown && item.items && activeDropdown === item.name && (
                  <div className="mobile-dropdown">
                    {item.items.map((subItem) => (
                      <a key={subItem} href="#" className="mobile-dropdown-item">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
