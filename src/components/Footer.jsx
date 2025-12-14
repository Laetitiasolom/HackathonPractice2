const Footer = () => {
    return (
        <footer className="bg-surface border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Laetitia Solombrino. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            {/* Add Icon here later */}
                            LinkedIn
                        </a>
                        <a href="mailto:laetitia.solom@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
