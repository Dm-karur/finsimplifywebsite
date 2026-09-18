import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import finlogo from '../../assets/images/finlogo.png';
import SearchPanel from './SearchPanel';
import ContactPanel from './ContactPanel';

const navigationItems = [
  {
    label: "Home",
    path: "/",
    hasDropdown: false
  },
  {
    label: "Services",
    path: "/services",
    hasDropdown: true,
    items: [
      { label: "CFO & Finance Operations", path: "/services/cfo-operations" },
      { label: "Accounting & Compliance", path: "/services/accounting-compliance" },
      { label: "Payroll Management", path: "/services/payroll-management" },
      { label: "Accounts Payable (AP)", path: "/services/accounts-payable" },
      { label: "Accounts Receivable (AR)", path: "/services/accounts-receivable" },
      { label: "Business Setup & Incorporation", path: "/services/business-setup" },
      { label: "All Services", path: "/services", isHighlighted: true }
    ]
  },
  {
    label: "About Us",
    path: "/about",
    hasDropdown: false
  },
  {
    label: "Blogs",
    path: "/blog",
    hasDropdown: false
  },
  {
    label: "Contact",
    path: "/contact",
    hasDropdown: false
  }
];

// Reusable SVG Icons
const ChevronDownIcon = ({ className }) => (
  <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const GridMenuIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="5" r="2"></circle>
    <circle cx="12" cy="5" r="2"></circle>
    <circle cx="19" cy="5" r="2"></circle>
    <circle cx="5" cy="12" r="2"></circle>
    <circle cx="12" cy="12" r="2"></circle>
    <circle cx="19" cy="12" r="2"></circle>
    <circle cx="5" cy="19" r="2"></circle>
    <circle cx="12" cy="19" r="2"></circle>
    <circle cx="19" cy="19" r="2"></circle>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactPanelOpen, setContactPanelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  // Handle Outside Click for Dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle Escape Key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setSearchOpen(false);
        // Contact panel escape is handled in ContactPanel component
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle Route Changes
  useEffect(() => {
    setActiveDropdown(null);
    setSearchOpen(false);
    setContactPanelOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
      setSearchOpen(false);
      setContactPanelOpen(false);
    }
  };

  const toggleSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true);
      setActiveDropdown(null);
      setContactPanelOpen(false);
    } else {
      setSearchOpen(false);
    }
  };

  const toggleContactPanel = () => {
    if (!contactPanelOpen) {
      setContactPanelOpen(true);
      setActiveDropdown(null);
      setSearchOpen(false);
    } else {
      setContactPanelOpen(false);
    }
  };

  return (
    <>
      <header className="bg-surface relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24" ref={navRef}>

            {/* LOGO + BRAND NAME */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img className="h-10 w-auto" src={finlogo} alt="FinSimplify Logo" />
              <span className="font-display text-primary text-2xl tracking-wide group-hover:text-secondary transition-colors">
                FinSimplify
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-body font-medium text-primary transition-colors duration-250 hover:bg-surface-muted ${activeDropdown === item.label ? 'bg-surface-muted' : ''
                        }`}
                    >
                      {item.label}
                      <ChevronDownIcon className={`transition-transform duration-250 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 px-4 py-2 rounded-full text-body font-medium text-primary transition-colors duration-250 hover:bg-surface-muted`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* DROPDOWN MENU */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[280px] bg-surface rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden animate-dropdown">
                      <div className="py-2">
                        {item.items.map((subItem, idx) => {
                          if (subItem.isHighlighted) {
                            return (
                              <Link
                                key={idx}
                                to={subItem.path}
                                className="flex items-center justify-between px-6 py-4 bg-secondary text-primary font-medium hover:bg-[#c2d829] transition-colors group mt-2"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                                <div className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                  </svg>
                                </div>
                              </Link>
                            );
                          }
                          return (
                            <Link
                              key={idx}
                              to={subItem.path}
                              className="block px-6 py-2 text-[15px] font-medium text-primary hover:bg-secondary hover:text-primary transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT BUTTONS */}
            <div className="hidden lg:flex items-center space-x-4 shrink-0">
              {/* Search Button */}
              <button
                aria-label={searchOpen ? "Close search" : "Open search"}
                onClick={toggleSearch}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-muted text-primary hover:bg-secondary hover:text-text-on-primary transition-colors"
              >
                {searchOpen ? <CloseIcon /> : <SearchIcon />}
              </button>

              {/* Grid / Menu Button */}
              <button
                aria-label={contactPanelOpen ? "Close contact panel" : "Open contact panel"}
                onClick={toggleContactPanel}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${contactPanelOpen
                  ? "bg-surface-muted text-primary hover:bg-border-subtle"
                  : "bg-primary text-text-on-primary hover:bg-secondary"
                  }`}
              >
                {contactPanelOpen ? <CloseIcon /> : <GridMenuIcon />}
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex items-center lg:hidden gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-text-on-primary hover:bg-secondary transition-colors focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <CloseIcon />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU CONTAINER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-surface border-t border-border shadow-lg" id="mobile-menu">
            <div className="px-4 py-4 space-y-1 h-screen overflow-y-auto pb-32">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-4 text-body font-medium rounded-lg transition-colors ${activeDropdown === item.label || location.pathname === item.path ? 'bg-surface-muted text-secondary' : 'text-primary'
                          }`}
                      >
                        {item.label}
                        <ChevronDownIcon className={`transition-transform duration-250 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {/* Mobile Dropdown */}
                      {activeDropdown === item.label && (
                        <div className="pl-6 pr-4 py-2 space-y-2 border-l-2 border-border-subtle ml-4 my-2">
                          {item.items.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.path}
                              className="block px-4 py-3 text-body font-medium text-text-secondary hover:text-secondary transition-colors rounded-md"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block w-full px-4 py-4 text-body font-medium rounded-lg transition-colors ${isActive ? 'bg-surface-muted text-secondary' : 'text-primary'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Search Panel below Navbar */}
        <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>
      {/* Contact Panel Overlay */}
      <ContactPanel isOpen={contactPanelOpen} onClose={() => setContactPanelOpen(false)} />
    </>
  );
}
