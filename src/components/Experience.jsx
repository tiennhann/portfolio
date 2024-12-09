import React from 'react';
import { EXPERIENCES } from '../constants/joblist';


const Experience = () => {
    return (
        <div className='min-h-[50vh] mx-auto max-w-[1000px] pt-[100px] text-white p-4 md:p-8'>
            <div className='section-header mb-4"'>
                <span className="section-title text-3xl font-bold">/ my experience</span>
            </div>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='text-lg mb-8 flex flex-wrap lg:justify-center'>
                        <div className='text-lg w-full lg:w-2/6'>
                            <p className='text-lg mb-2 text-neutral-400'>{experience.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-4/6'>
                            <h6 className='mb-2 font-semibold'>
                                {experience.title} - <span>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-neutral-400 text-left max-w-[500px]'>{experience.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Experience
