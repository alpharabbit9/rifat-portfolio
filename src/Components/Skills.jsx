
import Lottie from "lottie-react";
import lottie1 from '../assets/lottie/1.json'
import lottie2 from '../assets/lottie/2.json'
import lottie3 from '../assets/lottie/3.json'
import lottie4 from '../assets/lottie/4.json'
import lottie5 from '../assets/lottie/5.json'
import lottie6 from '../assets/lottie/6.json'


const Skills = () => {
    return (
        <div className="transform transition-transform duration-300 hover:scale-125">

            <h3 className="text-4xl font-bold text-center"> Tools of My Trade</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-8 mt-4 w-9/12 pl-28 mx-auto gap-8 ">
                <Lottie className="w-16" animationData={lottie5}></Lottie>
                <Lottie className="w-16" animationData={lottie3}></Lottie>
                <Lottie className="w-16" animationData={lottie2}></Lottie>
                <Lottie className="w-16" animationData={lottie4}></Lottie>
                <Lottie className="w-16" animationData={lottie1}></Lottie>
                <Lottie className="w-16" animationData={lottie6}></Lottie>
                
            </div>
            
        </div>
    );
};

export default Skills;