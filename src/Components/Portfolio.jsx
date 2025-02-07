import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/Projects.json") // ✅ Ensure this file is in the 'public' folder
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <h3 className="text-4xl font-bold text-center mb-8 text-white">What I’ve Built</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="card bg-transparent border rounded-3xl border-white shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <figure>
                            <img src={project.image} alt={project.name} className="w-full h-96 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>

                            <div className="card-actions justify-between mt-4">
                                <Link to={`/projects/${index}`} className="btn bg-pink-900">
                                    View More / Details
                                </Link>
                                <div className="flex gap-4">
                                    <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className="text-xl text-pink-900 hover:text-pink-600" />
                                    </a>
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-xl text-gray-800 hover:text-gray-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
