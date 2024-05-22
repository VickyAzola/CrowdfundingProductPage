import { useState, useEffect } from "react";
import Logo from '/images/logo.svg'
import Hamburger from '/images/icon-hamburger.svg'
import Close from '/images/icon-close-menu.svg'


function Navbar() {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    //State to manage scroll's visibility
    const [scrolled, setScrolled] = useState(false);

  // Toggle function to handle the navbar's display
    const showNavbar = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        {id: 0, text: 'About', style: {borderBottom: '1px solid rgb(235, 235, 235)'}},
        {id: 1, text: 'Discover', style: {borderBottom: '1px solid rgb(235, 235, 235)'}},
        {id: 2, text: 'Get Started'},
    ];

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
        <nav id="topNav" aria-label="Top Navigation"
            className={`fixed z-30 w-full font-semibold text-xl text-DarkBlue md:text-sm md:px-12 lg:px-32 md:pt-4 lg:pt-6
                ${scrolled ? 'bg-black/30' : 'bg-transparent'} transition-colors duration-500 `}>

            <div className="max-w-[80rem] mx-auto">
                {/* Logo, Hamburger and Close mobile */}
                <div className='flex justify-between items-center w-full h-20 md:h-min'>
                    <a href=''className="absolute z-20 top-8 md:top-5 left-6 md:relative md:inset-0" aria-label='Logo'><img src={Logo} alt="Logo"/></a>
                    <button 
                        onClick={showNavbar} 
                        className='absolute z-20 right-6 top-8 ease-in duration-700 md:relative block md:hidden' 
                        aria-label="Open and Close Navigation">
                        {nav 
                        ? <img src={Close} alt="Close Navigation"/>
                        : <img src={Hamburger} alt="Open Navigation"/> }
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center w-full justify-end md:pb-6'>
                    <ul className=' text-white flex gap-x-10'>
                        {navItems.map((item) => (
                        <li key={item.id} className="custom-underline">
                            <a href="#">
                                {item.text}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {nav 
                ? <div onClick={showNavbar} className="block md:hidden min-h-screen bg-black/20 min-w-[100%]"></div> 
                : ""
            }
            <ul className={`fixed inset-x-0 top-[5rem] mx-auto w-[90%] bg-white rounded z-20 md:hidden transition-transform duration-700 ease-in-out 
                    ${nav ? 'transform translate-y-0' : 'transform -translate-y-[140%]'}`}
            >
                {navItems.map(item => (
                <li key={item.id} className='w-full' style={item.style}>
                    <a 
                        href=""
                        className='block w-full py-[1.5rem] pl-6'>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Navbar
