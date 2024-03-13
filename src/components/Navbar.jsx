import { useState } from "react";
import Logo from '/images/logo.svg'
import Hamburger from '/images/icon-hamburger.svg'
import Close from '/images/icon-close-menu.svg'


function Navbar() {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);


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

    return (
        <>
        <nav className='flex fixed z-30 w-full font-semibold text-xl md:px-12 md:py-6 bg-black/20'>

            {/* Logo, Hamburger and Close mobile */}
            <div className='flex justify-between items-center w-full h-20 md:h-min'>
                <a href=''className="absolute z-20 top-8 left-6 md:relative md:inset-0" aria-label='Logo'><img src={Logo} alt="Logo"/></a>
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
            <div className='hidden md:flex items-center w-full justify-end'>
                <ul className=' text-white flex gap-x-10'>
                    {navItems.map((item) => (
                    <li key={item.id}>
                        <a href="#" className="hover:underline hover:underline-offset-8">
                            {item.text}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation Menu */}
            {nav ? <div className="block md:hidden min-h-screen bg-black/20 min-w-[100%]"></div> : ""}
            <ul
                className={
                nav
                    ? 'w-[90%] rounded-xl mx-auto inset-x-0 top-[11%] z-10 fixed md:hidden min-h-min bg-white ease-in-out duration-700'
                    : 'ease-in-out z-10 duration-700 fixed hidden'
                }
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
