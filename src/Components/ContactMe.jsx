import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";


const ContactMe = () => {
    return (
        <div className='md:flex md:justify-around'>

            <div>
                <h4 className="text-4xl font-bold py-12">Contact Me</h4>
                <div className="flex items-center gap-2 mt-6">
                    <IoIosSend className="text-pink-900" />

                    <p>alpharabbit74@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 mt-6">
                    <FaPhone className="text-pink-900"></FaPhone>  

                    <p>01865688770</p>
                </div>

                <div className="flex justify-between mt-6">
                   <a href="https://www.facebook.com/share/14mUHNW4Ca/?mibextid=wwXIfr" target="_blank"> <FaFacebook  className="text-pink-900"></FaFacebook></a>
                    <a href="https://github.com/alpharabbit9"><FaGithub className="text-pink-900"></FaGithub></a>
                   <a href="www.linkedin.com/in/rifat-ahmed-05a5742b6"> <FaLinkedin className="text-pink-900"></FaLinkedin></a>
                   <a href="https://www.instagram.com/alpha_rabbit?igsh=MWh5dnFkNWZ4bTRoYg%3D%3D&utm_source=qr"> <FaInstagram className="text-pink-900"></FaInstagram></a>
                </div>
            </div>
            <div>
                <div className="card bg-black w-full max-w-lg shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover"></a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <input type="text" className="input input-bordered h-20" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-900">Submit</button>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default ContactMe;