import { useState } from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Graphic Design', 'UX Design'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Portfolio</h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        A selection of my work across graphic design and user experience.
                    </p>
                </div>

                <FilterBar
                    categories={categories}
                    activeCategory={filter}
                    onFilterChange={setFilter}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No projects found in this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
