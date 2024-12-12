import { PROJECTS } from '../constants/joblist';
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
    return (
        
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}   
            initial={{ opacity: 0, y: 150 }}
            transition={{ duration: 3 }}
            className='min-h-[50vh] mx-auto max-w-[1000px]  pt-[100px] text-white p-4 md:p-8'
        >
            <div className='section-header mb-4'>
                <span className="section-title text-3xl font-bold">/ my projects</span>
            </div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}   
                initial={{ opacity: 0, y: 150 }}
                transition={{ duration: 3 }}
            >
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-3/6'>
                            <img
                                src={project.image}
                                width={400}
                                height={400}
                                alt={project.title}
                                className='mb-6 rounded'
                            />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/6 '>
                            <h6 className='mb-2 text-xl font-bold flex'> {project.title}
                                <span className='ml-5'>
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-white hover:text-cyan-400'
                                    >
                                        <FaGithub />
                                    </a>
                                </span>
                            </h6>
                            <p className='mb-4 text-lg text-neutral-300'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-400'
                                >
                                    {tech}
                                </span>              
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects
