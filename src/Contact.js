import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { IoLogoGithub as GithubIcon } from 'react-icons/io';

export function Contact() {
    return (
        <main className='flex h-screen flex-col'>
            <div className='mb-auto justify-around'>
                <div className='fade-in divide-y-2 divide-[#262626] dark:divide-gray-800'>
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
                        <div className='mt-2 flex'>
                            <a className="social-icons flex p-8" target="_blank" rel="noopener noreferrer" href="https://github.com/parsakhaz" aria-label="github"><GithubIcon /></a>
                            <a className="social-icons flex p-8" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/parsas" aria-label="linkedin"><LinkedinIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}