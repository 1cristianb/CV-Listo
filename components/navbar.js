"use client"
import { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className=" text-black w-full fixed top-0 z-50 bg-[#EAEAEA] md:bg-[#f6f6f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-lg">CV Listo</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className=" bg-[#EAEAEA] md:bg-[#f6f6f6] flex space-x-4">
                            <Link href="/" className='hover:text-[#6C9BD2]'>Inicio</Link>
                            <Link href="/crear" className='hover:text-[#6C9BD2]'>Crear CV</Link>
                            <Link href="/dashboard" className='hover:text-[#6C9BD2]'>Contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="bg-[#EAEAEA] flex flex-col py-4 px-2">
                    <Link href="/" className='m-2 hover:bg-[#f6f6f6] hover:hover:text-[#6C9BD2] hover:rounded-lg hover:px-2'>Inicio</Link>
                    <Link href="/crear" className='m-2 hover:bg-[#f6f6f6] hover:hover:text-[#6C9BD2] hover:rounded-lg hover:px-2'>Crear CV</Link>
                    <Link href="/dashboard" className='m-2 hover:bg-[#f6f6f6] hover:hover:text-[#6C9BD2] hover:rounded-lg hover:px-2'>Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;