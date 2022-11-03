import React from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

import { HomepageContent } from './Homepage.js'
import { NavbarComponent } from './Navbar.js'
import { Footer } from './Footer.js'
import { Fourohfour } from './404.js'
import { Contact } from './Contact.js'
import './index.css';

function App() {

  return (
    <body>
      {/* wrapper for app to enable dark mode and spacing/styling */}
      <div className='bg-black text-white antialiased dark:bg-black dark:text-white'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <div className='flex h-screen flex-col '>

            <header>
              <NavbarComponent />
            </header>

            <body>
              <Routes>
                <Route path='/' element={<HomepageContent />} />
                <Route path='/about' element={<Fourohfour />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </body>

            <footer>
              <Footer />
            </footer>
          </div>

        </div>
      </div>
    </body>
  );
}

export default App;