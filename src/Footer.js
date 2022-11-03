import React from 'react';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { IoLogoGithub as GithubIcon } from 'react-icons/io';
import { SiGmail as MailIcon } from 'react-icons/si';

export function Footer() {
    return (
        <div className='sticky bottom-0 mt-[20vh] flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
            <div className='mt-2 flex'>
                <a className="social-icons flex p-4" href="https://github.com/parsakhaz" aria-label="github"><GithubIcon /></a>
                <a className="social-icons flex p-4" href="https://linkedin.com/in/parsas" aria-label="linkedin"><LinkedinIcon/></a>
                <a className="social-icons flex p-4" href="mailto:khazapar7@gmail.com" aria-label="email"><MailIcon /></a>
            </div>
            <span className="mt-4 text-xs font-light lg:mt-8">© 2022 Parsa Khazaeepoul | parsak@uw.edu</span>
        </div>
    )
}