import React from 'react';
import { Link } from 'react-router-dom';
import { RoughNotation } from 'react-rough-notation';

export function HomepageContent() {
  return (
    <main className='mb-auto flex flex-col h-screen'>
      <div className="flex flex-1 flex-col px-6 py-[20vh] dark:text-white lg:px-10">
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
          or send me a 
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
             message
            </RoughNotation>
          </Link></p>
      </div>
    </main>


  )
}