import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/Projects.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedProject = data.find((p, index) => index.toString() === id); // Use index as ID
                setProject(selectedProject);
            })
            .catch((error) => console.error("Error loading project:", error));
    }, [id]);

    if (!project) return <div className="text-center text-xl">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-12 rounded-3xl">
            <h1 className="text-4xl font-bold text-center">{project.name}</h1>
            <img src={project.image} alt={project.name} className="w-full h-96 rounded-3xl object-cover my-6" />
            <p className="text-lg">{project.description}</p>

            <h3 className="text-2xl font-bold mt-6">Tech Stack</h3>
            <ul className="list-disc pl-6">
                {project.tech_stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            <h3 className="text-2xl font-bold mt-6">Challenges Faced</h3>
            <p>{project.challenges}</p>

            <h3 className="text-2xl font-bold mt-6">Future Plans</h3>
            <p>{project.future_plans}</p>

            <div className="mt-6 flex gap-4">
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Project
                </a>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    GitHub Repository
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
