import React from 'react';
import { Link } from 'react-router-dom';

export function NavbarComponent() {
    return (
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
            <header className='flex items-center justify-end py-8'>
                <div className='flex items-center text-base'>
                        <Link key="Home" to="/" className='p-1 font-medium dark text-white dark:text-white sm:px-6'>Home</Link>
                        <Link key="About" to="/about" className='p-1 font-medium dark text-white dark:text-white sm:px-6'>About</Link>
                        <Link key="Contact" to="/contact" className='p-1 font-medium dark text-white dark:text-white sm:px-6'>Contact</Link>
                </div>
            </header>
        </div>
    )
}