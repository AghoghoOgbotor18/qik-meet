import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (id) =>
    activeSection === id
      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold cursor-pointer"
      : "text-black hover:font-semibold transition-all cursor-pointer";

  return (
    <header>
      <nav
        className={`py-3 px-3 fixed top-0 left-0 w-full z-50 ${
          isScrolled ? "shadow-lg bg-gray-50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1
            className="text-3xl font-bold cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            QikMeet
          </h1>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex justify-center items-center gap-8">
            <li onClick={() => handleNavClick("home")} className={linkClasses("home")}>Home</li>
            <li onClick={() => handleNavClick("about")} className={linkClasses("about")}>About</li>
            <li onClick={() => handleNavClick("works")} className={linkClasses("works")}>Works</li>
            <li onClick={() => handleNavClick("testimonials")} className={linkClasses("testimonials")}>Testimonials</li>
            <li onClick={() => handleNavClick("faqs")} className={linkClasses("faqs")}>FAQs</li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="#">
              <button className="btn">Get Started</button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden z-30">
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>

          {/* Backdrop Blur */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 z-10"
              onClick={closeMenu}
            ></div>
          )}

          {/* Mobile Menu */}
          <div
            className={`md:hidden w-full fixed left-0 top-0 bg-white transition-all z-20 duration-300 ease-in-out overflow-hidden ${
              isOpen ? "translate-y-0 h-screen py-30" : "-translate-y-full"
            }`}
          >
            <ul className="flex flex-col justify-center w-full items-center gap-16">
              <li onClick={() => { handleNavClick("home"); closeMenu(); }} className={linkClasses("home")}>Home</li>
              <li onClick={() => { handleNavClick("about"); closeMenu(); }} className={linkClasses("about")}>About</li>
              <li onClick={() => { handleNavClick("works"); closeMenu(); }} className={linkClasses("works")}>Works</li>
              <li onClick={() => { handleNavClick("testimonials"); closeMenu(); }} className={linkClasses("testimonials")}>Testimonials</li>
              <li onClick={() => { handleNavClick("faqs"); closeMenu(); }} className={linkClasses("faqs")}>FAQs</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
