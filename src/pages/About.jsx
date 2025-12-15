import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Clock, Download, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

// --- Sub-components for each View ---

const TechSkillsCard = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 font-mono text-sm h-full flex flex-col">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex justify-between items-center">
            <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">System Capabilities</span>
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-600 text-xs font-medium">Online</span>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-grow">

            <div className="space-y-3">
                <div className="text-gray-400 text-xs uppercase tracking-wider">Loaded Modules</div>
                <div className="grid grid-cols-1 gap-2">
                    {[
                        'Adobe Creative Cloud',
                        'Figma Prototyping',
                        'HTML5 / CSS3 / React',
                        'Project Management',
                        'UI/UX Research'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700">
                            <span className="text-accent">✓</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-50">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Configuration</div>
                <div className="bg-gray-50 p-4 rounded-lg text-xs leading-relaxed text-gray-600 border border-gray-100">
                    <span className="text-blue-600">const</span> <span className="text-purple-600">languages</span> = {'{'}<br />
                    &nbsp;&nbsp;<span className="text-gray-900">German</span>: <span className="text-green-600">"Native"</span>,<br />
                    &nbsp;&nbsp;<span className="text-gray-900">English</span>: <span className="text-green-600">"Fluent"</span>,<br />
                    &nbsp;&nbsp;<span className="text-gray-900">French</span>: <span className="text-green-600">"Intermediate"</span><br />
                    {'}'};
                </div>
            </div>
        </div>
    </div>
);

const StandardCV = () => (
    <div className="animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Education & Contact/Skills */}
            <div className="space-y-12">
                <div>
                    <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
                        <GraduationCap className="mr-2 w-5 h-5" /> Education
                    </h3>
                    <div className="space-y-8 border-l-2 border-gray-100 pl-6">
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white"></span>
                            <h4 className="font-bold text-gray-900">User Experience Design, M.Sc.</h4>
                            <p className="text-sm text-accent font-medium">Technische Hochschule Ingolstadt, Germany</p>
                            <p className="text-sm text-gray-500">March 2025 - Present</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></span>
                            <h4 className="font-bold text-gray-900">Graphic Design, B.F.A.</h4>
                            <p className="text-sm text-accent font-medium">Park University, Parkville, MO, USA</p>
                            <p className="text-sm text-gray-500">August 2019 - May 2023</p>
                            <p className="text-xs text-gray-400 mt-1 italic">Summa Cum Laude (GPA 1.1 / 4.0)</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></span>
                            <h4 className="font-bold text-gray-900">Abitur / International Baccalaureate</h4>
                            <p className="text-sm text-accent font-medium">Theodor-Heuss-Gymnasium, Pforzheim</p>
                            <p className="text-sm text-gray-500">Jan 2012 - July 2019</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
                        <span className="mr-2">⚡</span> System Status
                    </h3>
                    <TechSkillsCard />
                </div>
            </div>

            {/* Right Column: Experience & Awards */}
            <div className="space-y-12">

                <div>
                    <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
                        <Briefcase className="mr-2 w-5 h-5" /> Work Experience
                    </h3>
                    <div className="space-y-8 border-l-2 border-gray-100 pl-6">
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white"></span>
                            <h4 className="font-bold text-gray-900">Graphic & DTP Designer</h4>
                            <p className="text-sm text-accent font-medium">Dentaurum GmbH & Co. KG, Ispringen</p>
                            <p className="text-sm text-gray-500 mb-2">Oct 2024 - March 2025</p>
                            <p className="text-sm text-gray-600">
                                Design of marketing and advertising materials in line with corporate design guidelines. Responsibility for trade fair graphics, social media assets, and international campaigns for nine subsidiaries. Ensuring compliance with legal requirements in the medical products sector.
                            </p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></span>
                            <h4 className="font-bold text-gray-900">Graphic Design & Project Management</h4>
                            <p className="text-sm text-accent font-medium">Signs By Tomorrow, Overland Park, KS</p>
                            <p className="text-sm text-gray-500 mb-2">June 2023 - August 2024</p>
                            <p className="text-sm text-gray-600">
                                Close collaboration with clients to implement visual and functional branding requirements. Design of diverse print products and technical preparation of print data for large-format flatbed printers and CNC routers. Required in-depth understanding of Adobe programs, materials, and processing.
                            </p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></span>
                            <h4 className="font-bold text-gray-900">Freelance Identity Design</h4>
                            <p className="text-sm text-accent font-medium">"Ortszeit" Juried Exhibition, Pforzheim</p>
                            <p className="text-sm text-gray-500 mb-2">2022 - 2024</p>
                            <p className="text-sm text-gray-600">
                                Development of a holistic visual identity. Design of posters, catalogs, and accompanying communication materials. Focus on a cohesive visual identity reflecting both artistic ambition and regional characteristics.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
                        <Award className="mr-2 w-5 h-5" /> Awards & Achievements
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { title: "College Golf Scholarship (NAIA)", year: "2019-2023", desc: "Study in the USA with athletic scholarship" },
                            { title: "CSC Academic All-American Athlete", year: "2023", desc: "Combination of athletic excellence and academic success" },
                            { title: "Presidential Scholar Award", year: "2021-2023", desc: "Award for above-average academic performance" },
                            { title: "Dean's List", year: "2019-2023", desc: "Award for outstanding academic achievements" }
                        ].map((award, index) => (
                            <li key={index} className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 pt-1">
                                    <span className="text-sm font-bold text-gray-900">{award.year}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{award.title}</h4>
                                    <p className="text-sm text-gray-600">{award.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 flex justify-center">
            <a
                href="/cv.pdf"
                download="Laetitia_Solombrino_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg animate-fade-in"
            >
                <Download size={18} />
                <span>Download Full Resume</span>
            </a>
        </div>
    </div>
);

const VisualCV = () => (
    <div className="animate-fade-in space-y-16">
        <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

            <div className="space-y-24">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-12">
                        <h3 className="text-2xl font-bold text-gray-800">Global Beginnings</h3>
                        <p className="text-accent font-medium mb-2">2001 - 2012</p>
                        <p className="text-gray-600">Born in Germany, raised in South Africa. A childhood shaped by diverse cultures, languages, and adaptability.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent border-4 border-white z-10 hidden md:block"></div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-12">
                        <div className="bg-gray-100 h-48 rounded-xl overflow-hidden relative group shadow-md hover:shadow-lg transition-shadow">
                            <img
                                src="/images/visual-south-africa.png"
                                alt="Growing up in South Africa"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
                    <div className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-12">
                        <h3 className="text-2xl font-bold text-gray-800">The American Chapter & Golf</h3>
                        <p className="text-accent font-medium mb-2">2019 - 2023</p>
                        <p className="text-gray-600">Moved to Kansas City on a Golf Scholarship. Balancing competitive athletics with Graphic Design studies.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300 border-4 border-white z-10 hidden md:block"></div>
                    <div className="w-full md:w-1/2 pr-0 md:pr-12">
                        <div className="bg-gray-100 h-48 rounded-xl overflow-hidden relative group shadow-md hover:shadow-lg transition-shadow">
                            <img
                                src="/images/visual-usa-golf.png"
                                alt="Golf Scholarship in USA"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-12">
                        <h3 className="text-2xl font-bold text-gray-800">Professional Growth & Master's</h3>
                        <p className="text-accent font-medium mb-2">2024 - Present</p>
                        <p className="text-gray-600">Returning to Germany. Working at Dentaurum and starting a Master's in UX Design. Blending creativity with strategy.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent border-4 border-white z-10 hidden md:block"></div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-12">
                        <div className="bg-gray-100 h-48 rounded-xl overflow-hidden relative group shadow-md hover:shadow-lg transition-shadow">
                            <img
                                src="/images/visual-professional-ux.png"
                                alt="Professional UX Design Work"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AudioCV = () => (
    <div className="animate-fade-in max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center relative overflow-hidden">

            <div className="relative z-10 flex flex-col items-center space-y-8">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden relative">
                    <img src="/images/profile-photo.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">My Design Journey</h3>
                    <p className="text-accent font-medium">Episode 1 • An Introduction</p>
                </div>

                {/* Audio Player */}
                <div className="w-full bg-gray-50 rounded-2xl p-4">
                    <audio controls className="w-full custom-audio-player">
                        <source src="/audio/profile.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 w-full text-left">
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                        "In this short audio clip, I talk about how growing up in South Africa influenced my design philosophy and why I switched from pure Graphic Design to UX to create more meaningful digital experiences."
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const About = () => {
    const [activeTab, setActiveTab] = useState('standard');
    const [isBioExpanded, setIsBioExpanded] = useState(false);

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Header Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">About Me</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Multicultural designer with a passion for functional aesthetics.
                        Choose how you'd like to get to know my professional journey.
                    </p>

                    {/* Tab Navigation */}
                    <div className="inline-flex bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-gray-200 shadow-sm mx-auto">
                        {[
                            { id: 'standard', label: 'Standard CV', icon: '' },
                            { id: 'visual', label: 'Visual Story', icon: '' },
                            { id: 'audio', label: 'Audio Profile', icon: '' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {activeTab === 'standard' && <StandardCV />}
                    {activeTab === 'visual' && <VisualCV />}
                    {activeTab === 'audio' && <AudioCV />}
                </div>

                {/* Bio Summary */}
                <section className="border-t border-gray-100 pt-16 mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">A Brief Bio</h2>
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto text-left">
                        <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                            <p>
                                I was born in early 2001 in Pforzheim, Germany as an only child to a German mother and an Italian father. This meant that I was lucky enough to grow up knowing multiple cultures, majorly impacting my personality and how I view the world.
                            </p>
                            <p>
                                This changed even more in early 2007 when my parents and I made the move to Port Elizabeth, South Africa. Growing up in such a diverse environment taught me adaptability and openness. I completed my schooling there before taking a leap of faith to pursue my dreams in the United States.
                            </p>

                            {isBioExpanded && (
                                <div className="animate-fade-in space-y-4">
                                    <p>
                                        In 2019, I moved to Kansas City on a Golf Scholarship to attend Park University. While competing at the collegiate level, I discovered my passion for design, eventually graduating Summa Cum Laude with a Bachelor of Fine Arts in Graphic Design. This period was transformative, teaching me discipline, time management, and the power of visual communication.
                                    </p>
                                    <p>
                                        After graduating in 2023, I returned to Europe to bring my international perspective back to Germany. I'm currently pursuing my Master's in User Experience Design at Technische Hochschule Ingolstadt while working as a Graphic Designer. My goal is to blend strict design principles with human-centric usability to create digital experiences that are not just beautiful, but intuitive and meaningful.
                                    </p>
                                </div>
                            )}

                            <button
                                onClick={() => setIsBioExpanded(!isBioExpanded)}
                                className="text-accent cursor-pointer hover:underline font-medium focus:outline-none"
                            >
                                {isBioExpanded ? 'Read less' : 'Read full bio'}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
