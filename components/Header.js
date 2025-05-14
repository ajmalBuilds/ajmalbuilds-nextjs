import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(item.id);
        }}
        className={`${
          isMobile ? "px-8 py-3 text-base" : "text-sm"
        } font-medium transition-colors duration-300 ${
          activeSection === item.id
            ? "text-teal-600 dark:text-teal-400" +
              (isMobile ? " bg-gray-100 dark:bg-gray-800" : "")
            : "text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
        }`}
      >
        {item.label}
      </a>
    ));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <span className="text-teal-600 dark:text-teal-400">Ajmal</span> Khan
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          isMenuOpen ? "max-h-96 top-full" : "max-h-0 top-full"
        }`}
      >
        <nav
          className="flex flex-col py-2"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {renderNavLinks(true)}
        </nav>
      </div>
    </header>
  );
};

export default Header;
