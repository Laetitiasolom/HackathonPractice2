import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 flex items-center justify-center">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-accent p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                    <p className="text-accent-light text-sm">I'm currently available for freelance work and new opportunities.</p>
                </div>

                <div className="p-10 space-y-8">
                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="bg-primary/10 p-3 rounded-full text-primary-dark">
                            <Mail size={24} />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                            <a href="mailto:laetitia.solom@gmail.com" className="text-lg font-medium text-gray-900 hover:text-accent transition-colors">
                                laetitia.solom@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="bg-primary/10 p-3 rounded-full text-primary-dark">
                            <Phone size={24} />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</label>
                            <span className="text-lg font-medium text-gray-900">
                                +49 176 388 69837
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="bg-primary/10 p-3 rounded-full text-primary-dark">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
                            <span className="text-lg font-medium text-gray-900">
                                Ingolstadt, Germany
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-10 py-6 text-center">
                    <p className="text-sm text-gray-500">
                        Looking forward to hearing from you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
