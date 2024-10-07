import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locations = ['/Resume', '/MyWorks', '/main-landing'];
  
  // useNavigate and useLocation hooks
  const navigate = useNavigate();
  const location = useLocation();
  const l = ['Resume', 'MyWorks','Home'];
  // Function to get the current index based on the pathname
  const getCurrentIndex = () => {
    return locations.findIndex((loc) => location.pathname.includes(loc));
  };

  // State for current index
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndex());
  
  // useEffect to handle changes in the current index
  useEffect(() => {
    setCurrentIndex(getCurrentIndex());
  }, [location.pathname]); // Update index when pathname changes

  // Function to navigate to the next page
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % locations.length; // Cycles through locations
    setCurrentIndex(newIndex);
    navigate(locations[newIndex]);
  };

  // Function to navigate to the previous page
  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + locations.length) % locations.length; // Ensures non-negative index
    setCurrentIndex(newIndex);
    navigate(locations[newIndex]);
  };

  return (
    <nav className="bg-transparent fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Previous and Next Navigation Arrows */}
         

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
             India;
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-blue-500' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/Resume"
              className={`block text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md ${location.pathname === '/Resume' ? 'bg-blue-500' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
            <Link
              to="/MyWorks"
              className={`block text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md ${location.pathname === '/MyWorks' ? 'bg-blue-500' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              My Works
            </Link>
            <Link
              to="/main-landing"
              className={`block text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md ${location.pathname === '/main-landing' ? 'bg-blue-500' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Main Landing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
