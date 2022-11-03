import React from 'react';
import { Link } from 'react-router-dom';
import { RoughNotation } from 'react-rough-notation';

export function HomepageContent() {
  return (
    
       <main className='mb-auto'>
      <div className="pt-[25vh] fade-in banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hi, I am Parsa</h1>
        <p className='my-2 text-lg lg:my-4 lg:text-2xl'>
          Informatics: SWE
        </p>
        <p className='font-light lg:text-xl'>
          Read more
          <Link
            className='ml-2 mr-2 text-lg font-bold dark:text-white'
            to='/about'
          >
            <RoughNotation
              show
              type='box'
              animationDelay={300}
              animationDuration={4000}
              color='white'
            >
              about me
            </RoughNotation>
          </Link>
          or send
          <Link
            className='ml-2 text-lg font-bold dark:text-white'
            to='/contact'
          >
            <RoughNotation
              show
              type='underline'
              animationDelay={3500}
              animationDuration={2800}
              color='white'
            >
              me a message
            </RoughNotation>
          </Link></p>
      </div>
      </main>
 

  )
}