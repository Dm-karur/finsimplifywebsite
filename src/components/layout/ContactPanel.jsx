import { useEffect, useRef } from 'react';

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function ContactPanel({ isOpen, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      ></div>

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface z-[70] shadow-2xl flex flex-col sm:rounded-l-2xl transition-transform duration-400 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        ref={panelRef}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-end p-6">
          <button
            aria-label="Close contact panel"
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-muted text-primary hover:bg-border-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="px-10 pb-10 flex-grow overflow-y-auto">
          <h2 className="text-h2 font-display text-primary mb-6">Contact Us</h2>
          <p className="text-body text-text-secondary mb-10">
            We'd love to hear from you and help you simplify your financial journey.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-body font-bold text-primary mb-1">Location</h3>
              <p className="text-text-secondary">
                100 Financial District Blvd,<br />
                Suite 400<br />
                New York, NY 10005
              </p>
            </div>

            <div>
              <h3 className="text-body font-bold text-primary mb-1">Email</h3>
              <a href="mailto:hello@finsimplify.com" className="text-secondary hover:underline">
                hello@finsimplify.com
              </a>
            </div>

            <div>
              <h3 className="text-body font-bold text-primary mb-1">Phone</h3>
              <p className="text-text-secondary">
                +91 99869 42540; +1 925 319 8885
              </p>
            </div>
          </div>

          <button className="w-full bg-primary text-text-on-primary py-4 rounded-md font-bold text-lg hover:bg-primary-hover transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}
