import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import avatar from './imgs/avatar.webp'

export function About() {
    return (
        <main className='mb-auto'>
            <div className='fade-in divide-y-2 divide-[#262626] dark:divide-gray-400'>
                <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
                    <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
                        About
                    </h1>
                </div>
                <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
                    <div className='flex flex-col items-center space-x-2 pt-8 pb-2  '>
                        <img src={avatar} className='h-48 w-48 rounded-full' alt="avatar" />
                        <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
                            Parsa Khazaeepoul
                        </h3>
                        <div className='font-medium text-[#9e9e9e] dark:text-gray-500'>
                            Informatics: SWE
                        </div>
                        <div className='text-[#9e9e9e] dark:text-gray-500'>
                            University of Washington
                        </div>
                    </div>

                    <div className='text-[#c9c9c9] max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>
                        <p className='mt-8'>
                            <a className="no-underline text-white font-medium" href="https://drive.google.com/file/d/1seCqVcPOge-nQNzQ30Ilwe0W5cOpdDya/view?usp=sharing" target="_blank" rel="noreferrer">
                                <RoughNotation
                                    show
                                    type='box'
                                    animationDelay={300}
                                    animationDuration={4000}
                                    color='white'
                                >
                                    Resume
                                </RoughNotation>
                            </a>
                        </p>
                        <br />
                        <p className='text-white'>
                            A aspiring software engineer who values humility, exploration, and learning.
                        </p>
                        <br />
                        <p>
                            Presently, I am obtaining my undergraduate degree at&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://ischool.uw.edu/programs/informatics">
                                The University of Washington - Seattle
                            </a>
                            &nbsp;where I am learning the fundamental and practical concepts that drive computer science,
                            software development, group collaboration, and effective design, prototyping, and execution.
                        </p>
                        <br />
                        <p>
                            My first notable experience within UW was with&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://ischool.uw.edu/people/faculty/profile/gthay">
                                Greg Hay
                            </a>
                            &nbsp;at the&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://ischool.uw.edu/">
                                iSchool
                            </a>
                            &nbsp;in a research project, where we were tasked to develop a python scraper to scrape data
                            from the UNFCCC flexible query website. I was tasked with the research, prototyping, development,
                            and documentation of the scraper, which can be found&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://github.com/maxjj9710/unfccc-query">
                                here
                            </a>
                            . This project made me realize my passion for taking products from research, to prototype, to fully
                            functioning product.
                        </p>
                        <br />
                        <p>
                            I then started work at&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://roundglass.com/">
                                RoundGlass
                            </a>
                            &nbsp;, a mid-scale SaaS company based out of Bellevue, Washington, that created and sold meditation
                            courses for companies, with an emphasis on improving employee well-being and wholistic health. I had
                            the opportunity to work within the executive office as a project management intern, and help structure
                            the tasks of teams under us. Being at RoundGlass made me curious and eager to explore the engineering
                            side of things, and was the spark in my transition to SWE.
                        </p>
                        <br />
                        <p>
                            During my transition to SWE, I also began the process of cofounding a startup with friends named&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/course-finder-fyi/">
                                Course Finder
                            </a>
                            &nbsp;, which I was head of product design for. I helped design and prototype features that were then
                            sent on to our engineering team to be implemented, which forced me to view development from both the
                            perspective of the designers and the developers. We went on to win and place in a few startup competitions (
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/entrepreneurship-competitions/">
                                EC
                            </a>
                            ,&nbsp;
                            <a className="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.founderslive.com/events-list/seattle-2022-05-26">
                                Founder's Live @ Bellevue
                            </a>
                            ), getting us $15,000 in combined AWS and Google credits, as well as cash.
                            We however struggled to find a source of revenue due to the legal implications of using public data,
                            and ran out of money.
                        </p>
                        <br />
                        <p>
                            Now: Currently I am in the process of transitioning into a SWE role, and looking for both internships and
                            new grad roles. I spent my last couple months solidifying the projects I had started, refreshing my DS & A
                            fundamentals, and putting together this portfolio. With graduation on the horizon, I am putting myself through
                            the inevitable leetcode + application loop with hopes to end up at a company in the beautiful PNW.
                        </p>
                        <h2 class="mt-8 mb-4 text-2xl font-bold text-white">Skills</h2>
                        <div class="mb-2 flex flex-wrap">
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">TypeScript</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">Python</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">React</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">AWS</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">PostgreSQL</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">R & R Studio</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">Java</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">Firebase</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">REST APIs</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">MongoDB</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">ExpressJS</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">Azure DevOps</span>
                            <span class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white border-2">JIRA</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}