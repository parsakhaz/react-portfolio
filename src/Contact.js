import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export function Contact() {
    return (
        <main>
            <div className='flex flex-col mb-auto justify-around'>
                <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
                    <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
                        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
                            Contact
                        </h1>
                    </div>
                    <div className='container py-12'>
                        <p>
                            Want to get in touch? Feel free to
                            <a href='mailto:parsak@uw.edu'>
                                <RoughNotation
                                    show
                                    type='underline'
                                    strokeWidth={2}
                                    animationDelay={250}
                                    animationDuration={2000}
                                    color='white'
                                >
                                    &nbsp; send me an email
                                </RoughNotation>
                            </a>
                            &nbsp; (parsak@uw.edu)
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}