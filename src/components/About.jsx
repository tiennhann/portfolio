import { useEffect} from "react";
import profile from '../assets/images/profile.jpg'
import { motion } from "framer-motion";

const About = () => {
    useEffect(() => {
        // This effect runs when the component mounts
        // You can perform any side effects here, like fetching data
        console.log("About component mounted");

        // Cleanup function (if needed)
        return () => {
            console.log("About component unmounted");
        };
    }, []); // Empty dependency array means this runs once on mount

    const paragraph_one = (
        <p>
            I am currently a master student in Computer Science at New Mexico State University.
            In my free time, I enjoy reading, listening to music and build fund stuff.
        </p>
    );

    const paragraph_two = (
        <p>
            Outside of school, I like to hike, exercise. As a computer science major, I also play a lot of video games ^^
        </p>
    );

    const tech_stack = [
        "Python",
        "Typescript",
        "React.js",
        "Java",
        "Javascript",
        "HTML/CSS",
    ];

    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}   
            initial={{ opacity: 0, y: 150 }}
            transition={{ duration: 1 }}
            className="min-h-[50vh] mx-auto max-w-[1000px] h-fit  text-white py-8 md:p-8"
        >
            <div className="section-header mb-4">
                <span className="section-title text-4xl font-bold">/ about me</span>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div
                    className="text-lg md:w-1/2"
                >
                    {paragraph_one}
                    <p className="text-lg md:text-xl mt-4">Here are some technologies / tech stack I familiar with:</p>
                    <motion.ul
                        whileInView={{ opacity: 1, y: 0 }}   
                        initial={{ opacity: 0, y: 200 }}
                        transition={{ duration: 2 }}
                        className="list-none grid grid-cols-2 gap-4 mt-2 mb-2"
                    >
                        {tech_stack.map((tech_item, index) => (
                            <li className="relative pl-5 text-lg text-slate-300" key={index}>
                                <span className="absolute left-0 text-cyan-400">•</span>
                                {tech_item}
                            </li>
                        ))}
                    </motion.ul>
                    {paragraph_two}
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <img
                        src={profile} alt="Nhan image"
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 max-w-[300px] mx-auto md:ml-8"
                    />
                </div>
                </div>
                
        </motion.div>
    );
};

export default About;