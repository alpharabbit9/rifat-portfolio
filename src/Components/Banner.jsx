import img from '../assets/rif-removebg-preview.png'

const Banner = () => {
    return (
        <div className='bg-black flex justify-around'>

            <div className='py-28  px-10'>

                <h2 className="text-4xl font-light">Full Stack Developer</h2>
                <h1 className='text-6xl  font-bold mt-3 mb-3'>Hi , I am <span className='text-pink-900'>Rifat</span>
                <br />
                from Bangladesh
                </h1>
                
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;