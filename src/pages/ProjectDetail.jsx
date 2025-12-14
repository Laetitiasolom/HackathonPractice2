import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import projectsData from '../data/projects.json';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find project by ID (ensure type match)
    const project = projectsData.find(p => p.id === parseInt(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
                <button
                    onClick={() => navigate('/portfolio')}
                    className="flex items-center text-accent hover:text-accent-dark transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Portfolio
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <div className="w-full h-[40vh] md:h-[60vh] relative bg-gray-100">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080?text=Project+Hero'; }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-8 left-4 sm:left-8">
                    <button
                        onClick={() => navigate('/portfolio')}
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
                    >
                        <ArrowLeft size={24} className="text-gray-700 group-hover:text-accent" />
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-xl">
                    <div className="mb-4">
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                            {project.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                            {project.title}
                        </h1>
                        <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className="mt-16 space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-accent pl-4">
                                Project Gallery
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.gallery.map((image, index) => (
                                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                                        <img
                                            src={image}
                                            alt={`${project.title} - View ${index + 1}`}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => { e.target.src = `https://via.placeholder.com/800x600?text=Gallery+${index + 1}`; }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
