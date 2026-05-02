import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contact', href: '#' }
    ]

    return (
        <nav className='bg-linear-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo/Brand */}
                    <div className='shrink-0'>
                        <a href='#' className='text-3xl font-bold text-white hover:text-blue-100 transition duration-300'>
                            Brand
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='hidden md:flex space-x-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:bg-opacity-20 transition duration-300 transform hover:scale-105'
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button and Mobile Menu Button */}
                    <div className='flex items-center space-x-4'>
                        {/* CTA Button - Desktop */}
                        <button className='hidden md:block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-md'>
                            Sign In
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 transition duration-300'
                        >
                            {isOpen ? (
                                <X className='h-6 w-6' />
                            ) : (
                                <Menu className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-blue-700 animate-in fade-in duration-200'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className='w-full mt-2 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition duration-300'>
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
