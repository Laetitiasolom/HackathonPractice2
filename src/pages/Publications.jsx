import { FileText, Download, ExternalLink } from 'lucide-react';

const Publications = () => {
    // Placeholder data - replace with actual publications
    const publications = [
        {
            id: 1,
            title: "Dynamic Head-Up Display Design: Cognitive Load as a Parametric Driver",
            authors: "Laetitia Solombrino, Michael a. Gerber, Andreas Riener",
            conference: "Auto UI Conference",
            year: "2025",
            abstract: "Head-up displays (HUDs) are increasingly used in vehicles topresent essential information within the driver’s field of view,aiming to reduce distraction and cognitive load. However, con-cerns remain that adaptive, dynamic HUDs may unintentionallyincrease cognitive workload if changes are unpredictable or vi-sually intrusive. This exploratory study investigates how subtle,context-aware HUD adaptations affect perceived workload dur-ing simulated driving. Six licensed drivers navigated urban, rural,and highway environments using one of three HUD types; static,mildly adaptive, or highly adaptive, in a Wizard-of-Oz setup. Sub-jective workload was assessed using weighted NASA-TLX scoresand semi-structured interviews. While statistical analyses showedno significant differences across conditions, descriptive results sug-gested that predictable, minimal adaptations may reduce perceivedeffort and frustration. Participants emphasized the importance ofclarity, consistency, and user control. Despite limitations in samplesize and HUD placement, findings offer preliminary support forrestrained, context-sensitive HUD design and point to the need forfurther user-centered research.",


            link: "https://www.researchgate.net/publication/396395138_Dynamic_Head-Up_Display_Design_Cognitive_Load_as_a_Parametric_Driver",

        },
        /* 
        // TEMPLATE - Uncomment and fill this in to add your publication:
        {
            id: 2,
            title: "Your Paper Title Here",
            authors: "Your Name, Co-authors",
            conference: "Conference or Journal Name",
            year: "2024",
            abstract: "Brief summary of your research...",
            link: "Link to PDF or DOI"
        },
        */
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Publications</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        A collection of my academic research and published works in the field of Design and User Experience.
                    </p>
                </div>

                {/* Publications List */}
                <div className="space-y-8">
                    {publications.length > 0 ? (
                        publications.map((pub) => (
                            <div key={pub.id} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight">{pub.title}</h3>
                                        <span className="shrink-0 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                            {pub.year}
                                        </span>
                                    </div>

                                    <p className="text-accent font-medium text-sm">{pub.authors}</p>
                                    <p className="text-sm text-gray-500 italic">{pub.conference}</p>

                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {pub.abstract}
                                    </p>

                                    <div className="pt-4 flex gap-4">
                                        <a href={pub.link} className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-light transition-colors">
                                            <FileText size={16} className="mr-2" />
                                            Read Paper
                                        </a>
                                        <a href={pub.link} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                                            <Download size={16} className="mr-2" />
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white/50 rounded-2xl border border-dashed border-gray-300">
                            <p className="text-gray-500">No publications added yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Publications;
