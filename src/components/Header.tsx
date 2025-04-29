import Button from './Button';
import logo from '../assets/images/Logo-colored.png';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:justify-start">
        <div className="flex items-center">
          <img src={logo} alt="UTeach" className="h-8" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 pl-20">
          <a href="#features" className="text-gray-600 hover:text-gray-900 text-base">Products</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 text-base">Solutions</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-base">Pricing</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-base">Resources</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-t md:hidden p-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 text-base">Products</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 text-base">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-base">Pricing</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-base">Resources</a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="primary">Log in</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </nav>
        )}

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4 pl-160">
          <Button variant="header_secondary">Log in</Button>
          <Button variant="header_primary">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 