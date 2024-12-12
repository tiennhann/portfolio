import { EXPERIENCES } from '../constants/joblist';
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}   
            initial={{ opacity: 0, y: 150 }}
            transition={{ duration: 3 }}
            className='min-h-[50vh] mx-auto max-w-[1000px] pt-[100px] text-white p-4 md:p-8'
        >
            <div className='section-header mb-4"'>
                <span className="section-title text-3xl font-bold">/ my experience</span>
            </div>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='text-lg mb-8 flex flex-wrap lg:justify-center'>
                        <div className='text-lg w-full lg:w-2/6'>
                            <p className='text-lg mb-2 text-neutral-400 font-nunito'>{experience.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-4/6'>
                            <h6 className='mb-2 font-nunito'>
                                {experience.title} - <span>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-neutral-300 text-left max-w-xl'>{experience.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    );
}

export default Experience
