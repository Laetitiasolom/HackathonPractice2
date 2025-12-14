import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 bg-gray-50/50">
            <div className="max-w-4xl w-full text-center space-y-8">
                <div className="relative inline-block">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                        <img
                            src="/images/profile-photo.jpg"
                            alt="Laetitia Solombrino"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute inset-0 rounded-full border border-gray-100 pointer-events-none"></div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                        Hi, I'm <span className="text-accent">Laetitia</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
                        User Experience & Graphic Designer based in Germany.
                    </p>
                    <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                        Combining multicultural perspectives with a passion for clean, functional design.
                    </p>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                    <button
                        onClick={() => navigate('/portfolio')}
                        className="px-8 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-light transition-colors shadow-sm"
                    >
                        View Work
                    </button>
                    <button
                        onClick={() => navigate('/about')}
                        className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        More About Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
