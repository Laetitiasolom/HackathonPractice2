const About = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Bio Section */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">This is Me!</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                            {/* Using the bio-bg image as a side graphic or just omitting if it's text heavy. 
                   Let's assume the text is the main part. */}
                            {/* <img src="/images/bio-image.png" alt="Decoration" className="w-32 opacity-50" /> */}
                        </div>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-light">
                            <p>
                                I was born in early 2001 in Pforzheim, Germany as an only child to a German mother and an Italian father. This meant that I was lucky enough to grow up knowing multiple cultures, majorly impacting my personality and how I view the world.
                            </p>
                            <p>
                                This changed even more in early 2007 when my parents and I made the move to Port Elizabeth, South Africa, where I attended kindergarten and elementary school for a total of five years. This again broadened my horizons in regard to different cultures and understanding how fortunate we are and being thankful for everything we have. To this day, I would say a lot of my work ethic and world views come from this time of my life. It has impacted me in a lot of positive ways and I am so thankful for all the experiences I had and memories I have.
                            </p>
                            <p>
                                After our five years were up, my family and I relocated back to Germany where I finished middle and high school and graduated in June 2019. While living in different countries one thing has always been a constant throughout my life—athletics. Growing up I had been involved in a multitude of different sports. The one that would have the most impact on my life was golf. Becoming ever more important the older I got, I eventually decided to take the leap of faith and go to college in the US to play golf for a university. This is how I ultimately ended up in Kansas City.
                            </p>
                            <p>
                                Ever since I could remember, I have loved being creative, whether this involved sketching, painting or sometimes even going completely overboard in middle school PowerPoint presentation layouts. For me, choosing graphic design as a major came as naturally as playing golf. The fact that I have had the opportunity to combine both the athletic as well as the academic part of my life here in the Midwest, has left me incredibly thankful!
                            </p>
                        </div>
                    </div>
                </section>

                {/* CV Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Vitae</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Column: Education & Contact/Skills */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
                                    <span className="mr-2">🎓</span> Education
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
                                    <span className="mr-2">🛠️</span> Skills & Languages
                                </h3>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Software</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Adobe Creative Cloud', 'Figma', 'HTML/CSS', 'Microsoft Office', 'Project Management'].map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            <li className="flex justify-between"><span>German</span> <span className="text-accent font-medium">Native</span></li>
                                            <li className="flex justify-between"><span>English</span> <span className="text-accent font-medium">Native / Fluent</span></li>
                                            <li className="flex justify-between"><span>French</span> <span className="text-gray-400">Intermediate</span></li>
                                            <li className="flex justify-between"><span>Spanish</span> <span className="text-gray-400">Basic</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Experience & Awards */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
                                    <span className="mr-2">💼</span> Work Experience
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
                                    <span className="mr-2">🏆</span> Awards & Achievements
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
                </section>
            </div>
        </div>
    );
};

export default About;
