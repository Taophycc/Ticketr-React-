import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define classes based on scroll and menu state
  const navClasses = `fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'}`;
  const linkColor = isScrolled || isMenuOpen ? 'text-gray-700 dark:text-gray-200' : 'text-white';
  const hoverBg = isScrolled || isMenuOpen ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white hover:bg-opacity-20';

  return (
    <nav className={navClasses}>
      <div className="max-w-container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold ${linkColor}`}>
          Ticketr
        </Link>

        {/* Nav Links & Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className={`${linkColor} ${hoverBg} px-3 py-2 rounded-lg`}>Features</a>
          <a href="#" className={`${linkColor} ${hoverBg} px-3 py-2 rounded-lg`}>Pricing</a>
          
          <div className="border-l border-gray-300 dark:border-gray-600 h-6"></div>

          <ThemeToggle />

          <Link 
            to="/auth/login"
            className={`${linkColor} ${hoverBg} px-5 py-2 rounded-lg font-medium`}
          >
            Login
          </Link>
          <Link 
            to="/auth/signup"
            className={`font-semibold transition shadow-sm ${isScrolled || isMenuOpen ? 'bg-primary text-white hover:bg-primary-light' : 'bg-white text-primary hover:bg-gray-200'} px-5 py-2 rounded-lg`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={linkColor} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col items-center space-y-2">
            <a href="#" className={`${linkColor} ${hoverBg} px-3 py-2 rounded-lg w-full text-center`}>Features</a>
            <a href="#" className={`${linkColor} ${hoverBg} px-3 py-2 rounded-lg w-full text-center`}>Pricing</a>
            <div className="border-t border-gray-200 dark:border-gray-700 w-full my-2"></div>
            <Link 
              to="/auth/login"
              className={`${linkColor} ${hoverBg} px-5 py-2 rounded-lg font-medium w-full text-center`}
            >
              Login
            </Link>
            <Link 
              to="/auth/signup"
              className={`font-semibold transition shadow-sm bg-primary text-white hover:bg-primary-light px-5 py-2 rounded-lg w-full text-center`}
            >
              Get Started
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 w-full my-2"></div>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;