import React from 'react';

const Department = () => {
    const departments = [
        {
            id: 1,
            title: "Eye Care",
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center",
            description: "Esteem spirit temper too say adieus who direct esteem.",
            badge: "Popular",
            color: "blue",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            ),
            delay: 300
        },
        {
            id: 2,
            title: "Physical Therapy",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
            description: "Esteem spirit temper too say adieus who direct esteem.",
            badge: "Trending",
            color: "green",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            delay: 600
        },
        {
            id: 3,
            title: "Dental Care",
            image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop&crop=center",
            description: "Esteem spirit temper too say adieus who direct esteem.",
            badge: "Essential",
            color: "purple",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            ),
            delay: 900
        },
        {
            id: 4,
            title: "Diagnostic Test",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
            description: "Esteem spirit temper too say adieus who direct esteem.",
            badge: "Advanced",
            color: "red",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            ),
            delay: 1200
        },
        {
            id: 5,
            title: "Skin Surgery",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center",
            description: "Esteem spirit temper too say adieus who direct esteem.",
            badge: "Specialized",
            color: "indigo",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            ),
            delay: 1500
        },
        {
            id: 6,
            title: "Surgery Service",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop&crop=center",
            description: "Esteem spirit temper too say adieus who direct esteem.",
            badge: "Premium",
            color: "teal",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            ),
            delay: 1800
        }
    ];

    const colorClasses = {
        blue: {
            border: 'hover:border-blue-500',
            badge: 'bg-blue-600',
            gradient: 'from-blue-900/70 via-blue-600/30',
            icon: 'text-blue-600',
            title: 'group-hover:text-blue-600',
            link: 'text-blue-600 hover:text-blue-700',
            background: 'group-hover:from-blue-50',
            glow: 'bg-blue-400/20'
        },
        green: {
            border: 'hover:border-green-500',
            badge: 'bg-green-600',
            gradient: 'from-green-900/70 via-green-600/30',
            icon: 'text-green-600',
            title: 'group-hover:text-green-600',
            link: 'text-green-600 hover:text-green-700',
            background: 'group-hover:from-green-50',
            glow: 'bg-green-400/20'
        },
        purple: {
            border: 'hover:border-purple-500',
            badge: 'bg-purple-600',
            gradient: 'from-purple-900/70 via-purple-600/30',
            icon: 'text-purple-600',
            title: 'group-hover:text-purple-600',
            link: 'text-purple-600 hover:text-purple-700',
            background: 'group-hover:from-purple-50',
            glow: 'bg-purple-400/20'
        },
        red: {
            border: 'hover:border-red-500',
            badge: 'bg-red-600',
            gradient: 'from-red-900/70 via-red-600/30',
            icon: 'text-red-600',
            title: 'group-hover:text-red-600',
            link: 'text-red-600 hover:text-red-700',
            background: 'group-hover:from-red-50',
            glow: 'bg-red-400/20'
        },
        indigo: {
            border: 'hover:border-indigo-500',
            badge: 'bg-indigo-600',
            gradient: 'from-indigo-900/70 via-indigo-600/30',
            icon: 'text-indigo-600',
            title: 'group-hover:text-indigo-600',
            link: 'text-indigo-600 hover:text-indigo-700',
            background: 'group-hover:from-indigo-50',
            glow: 'bg-indigo-400/20'
        },
        teal: {
            border: 'hover:border-teal-500',
            badge: 'bg-teal-600',
            gradient: 'from-teal-900/70 via-teal-600/30',
            icon: 'text-teal-600',
            title: 'group-hover:text-teal-600',
            link: 'text-teal-600 hover:text-teal-700',
            background: 'group-hover:from-teal-50',
            glow: 'bg-teal-400/20'
        }
    };

    return (
        <div>
            <div className='department-parent-section'>
                <div className='department-section'>
                    <div className='department-content-section' data-aos="fade-up" 
                        data-aos-duration="1100" 
                        data-aos-delay="300">
                        <h5>DEPARTMENTS</h5>
                        <h1>Our departments</h1>
                        <p>Esteem spirit temper too say adieus who direct esteem.
                            It esteems luckily or picture placing drawing.</p>
                    </div>
                    
                    <div className='department-card-body pt-4'>
                        <div className='department-card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {departments.map((dept) => {
                                const colors = colorClasses[dept.color];
                                return (
                                    <div key={dept.id} className="group" data-aos="fade-up" 
                                        data-aos-duration="1100" 
                                        data-aos-delay={dept.delay}>
                                        <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent ${colors.border} cursor-pointer`}>
                                            {/* Animated Badge */}
                                            <div className={`absolute top-4 right-4 z-10 ${colors.badge} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500`}>
                                                {dept.badge}
                                            </div>
                                            
                                            <div className="relative overflow-hidden">
                                                <img 
                                                    src={dept.image} 
                                                    className="w-full h-56 object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700" 
                                                    alt={dept.title} 
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                                
                                                {/* Floating Icon */}
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                                                    <div className="bg-white/90 p-4 rounded-full backdrop-blur-sm">
                                                        <svg className={`w-8 h-8 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            {dept.icon}
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className={`p-6 bg-gradient-to-b from-white to-gray-50 ${colors.background} group-hover:to-white transition-all duration-500`}>
                                                <h5 className={`text-2xl font-bold text-gray-900 mb-3 ${colors.title} transition-colors duration-300 group-hover:tracking-wide`}>
                                                    {dept.title}
                                                </h5>
                                                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                                    {dept.description}
                                                </p>
                                                <a href="#" className={`inline-flex items-center ${colors.link} font-semibold transition-all duration-300 group-hover:gap-3 gap-2`}>
                                                    Learn More
                                                    <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </a>
                                            </div>
                                            
                                            {/* Glowing effect on hover */}
                                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className={`absolute inset-0 rounded-2xl ${colors.glow} blur-xl`}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;