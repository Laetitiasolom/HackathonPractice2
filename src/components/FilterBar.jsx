const FilterBar = ({ categories, activeCategory, onFilterChange }) => {
    return (
        <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                            ? 'bg-accent text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
