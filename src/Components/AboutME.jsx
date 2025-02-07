import img2 from '../assets/WhatsApp Image 2025-02-05 at 01.05.14_4ec66ada.jpg'

const AboutME = () => {
    return (
        <div className='md:flex md:justify-around transform transition-transform duration-300 hover:scale-105'>

            <div className='py-32'>

                <div className='border border-white p-3 rounded-3xl transform transition-transform duration-300 hover:scale-105'>
                    <img className='w-72 object-cover h-60 rounded-2xl' src={img2} alt="" />
                </div>

            </div>

            <div>
                <h3 className="text-4xl font-bold">About Me</h3>

                <div className="divider w-96"></div>

                <p className='w-96'>
                    Hey there! 👋 I'm Rifat, a passionate MERN Stack Developer who loves building dynamic and user-friendly web applications. My journey into programming started with curiosity, which soon turned into a deep passion for coding. I specialize in React.js, Node.js, Express.js, and MongoDB, crafting seamless full-stack applications. Alongside web development, I’m exploring DevOps, problem-solving to expand my skill set. Beyond coding, I’m a fitness enthusiast, sharing my gym and workout journey on Instagram, and I also enjoy football and video editing. I believe in continuous learning, balancing tech with creativity, and always pushing boundaries. 
                </p>


                
            </div>

        </div>
    );
};

export default AboutME;