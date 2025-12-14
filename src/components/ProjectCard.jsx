import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/portfolio/${project.id}`} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-100 block">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-gray-200">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image'; // Fallback
                    }}
                />
            </div>
            <div className="p-4">
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                    {project.category}
                </span>
                <h3 className="mt-1 text-lg font-medium text-gray-900 group-hover:text-primary-dark transition-colors">
                    {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {project.description}
                </p>
            </div>
        </Link>
    );
};

export default ProjectCard;
