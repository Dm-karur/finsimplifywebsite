import { useEffect, useRef } from 'react';

const SearchIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default function SearchPanel({ isOpen, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking inside the panel or if clicking the toggle button
      // The toggle button click is handled in Navbar
      if (panelRef.current && !panelRef.current.contains(event.target)) {
         // This is a bit tricky if the button is outside, but we manage the button click in Navbar.
         // A cleaner way is to stop propagation on the panel and let a full window click close it,
         // but we'll use a simpler approach.
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div 
      className={`absolute top-full left-0 w-full bg-surface-muted shadow-inner z-[99] ${isOpen ? 'block' : 'hidden'}`}
      ref={panelRef}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      aria-hidden={!isOpen}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <form className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full sm:w-2/3">
            <input 
              type="text" 
              placeholder="Search here ..." 
              className="w-full pl-8 pr-4 py-4 bg-surface border-none rounded-md text-primary font-body focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow text-lg shadow-sm"
              tabIndex={isOpen ? 0 : -1}
            />
          </div>
          <button 
            type="submit" 
            className="flex-shrink-0 bg-primary text-secondary px-10 py-4 rounded-full hover:brightness-110 transition-all flex items-center justify-center shadow-sm"
            tabIndex={isOpen ? 0 : -1}
            aria-label="Submit search"
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
