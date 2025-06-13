import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Linkedin, Send, Mail, MapPin, Sparkles, MessageCircle, Zap, ArrowRight, Phone, User} from 'lucide-react';


const ContactUs: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number; color: string }>>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const formRef = useRef<HTMLDivElement>(null);

    // Enhanced particle system
    useEffect(() => {
        const colors = ['#8B5CF6', '#A855F7', '#C084FC', '#E879F9', '#F472B6'];
        const newParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 4,
            size: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
        setParticles(newParticles);

        // Trigger entrance animation
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFocus = (fieldName: string) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            phone: '',
            email: ''
        };
        
        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        // Phone is optional, but if provided, basic validation
        if (form.phone && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(form.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        return newErrors;
    };

    const handleSubmit = async () => {
        const newErrors = validateForm();
        
        if (Object.values(newErrors).some(err => err !== '')) {
            setErrors(newErrors);
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2500));
            
            // Here you would typically send to sales@snix.ai
            console.log('Form submitted:', form);
            console.log('Send to: sales@snix.ai');
            
            setSubmitted(true);
            
            // Reset form after success animation
            setTimeout(() => {
                setSubmitted(false);
                setForm({ name: '', phone: '', email: '' });
            }, 4000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(1deg); }
                    66% { transform: translateY(-5px) rotate(-1deg); }
                }
                
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes bounce-in {
                    0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
                    50% { transform: scale(1.05) rotate(2deg); }
                    70% { transform: scale(0.95) rotate(-1deg); }
                    100% { opacity: 1; transform: scale(1) rotate(0deg); }
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                @keyframes success-bounce {
                    0% { opacity: 0; transform: scale(0.5); }
                    50% { transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }
                
                @keyframes success-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-gradient-x { 
                    background-size: 200% 200%; 
                    animation: gradient-x 3s ease infinite; 
                }
                .animate-slide-up { animation: slide-up 0.8s ease-out both; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
                .animate-bounce-in { animation: bounce-in 0.8s ease-out both; }
                .animate-shake { animation: shake 0.5s ease-in-out; }
                .animate-success-bounce { animation: success-bounce 0.6s ease-out; }
                .animate-success-pulse { animation: success-pulse 2s ease-in-out infinite; }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
                {/* Animated Grid Background */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px),
                            radial-gradient(circle at 20% 80%, rgba(147,51,234,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(236,72,153,0.1) 0%, transparent 50%)
                        `,
                        backgroundSize: '60px 60px, 60px 60px, 800px 800px, 800px 800px'
                    }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="absolute animate-float opacity-60"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                animationDelay: `${particle.delay}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        >
                            <div
                                className="rounded-full blur-sm animate-pulse"
                                style={{
                                    width: `${particle.size}px`,
                                    height: `${particle.size}px`,
                                    backgroundColor: particle.color,
                                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}50`
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 pt-32 pb-12 px-4">
                    <div className="w-full max-w-7xl mx-auto">
                        {/* Hero Header */}
                        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <Sparkles className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                                <span className="text-purple-800 font-medium">Let's Connect</span>
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            </div>

                            <h1 className="text-7xl md:text-8xl font-black mb-8 relative">
                                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent animate-gradient-x">
                                    Contact Us
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
                                Transform your ideas into reality. Let's create something
                                <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> extraordinary </span>
                                together.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-10 items-start">
                            {/* Left Section - Contact Info */}
                            <div className={`lg:col-span-2 space-y-12 my-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                {/* Contact Info Cards */}
                                <div className="space-y-8">
                                    {/* Location */}
                                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0s' }}>
                                        <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:scale-105 transition-transform duration-300">
                                            <MapPin className="w-8 h-8 text-gray-600" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-800 font-medium text-lg leading-relaxed">
                                                Bengaluru, India.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                        <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:scale-105 transition-transform duration-300">
                                            <Mail className="w-8 h-8 text-gray-600" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-800 font-medium text-lg">
                                                sales@snix.ai
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Icons */}
                                <div
                                    className="flex justify-center space-x-6 animate-fade-in-up"
                                    style={{ animationDelay: '0.6s' }}
                                >
                                    {[
                                        {
                                            icon: Instagram,
                                            name: "Instagram",
                                            link: "https://www.instagram.com/snix.ai?igsh=MXE1M3EzMnE1bWs5aQ%3D%3D&utm_source=qr"
                                        },
                                        {
                                            icon: Linkedin,
                                            name: "LinkedIn",
                                            link: "https://www.linkedin.com/in/snix-ai-22498b360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                        }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.name}
                                        >
                                            <button
                                                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200"
                                            >
                                                {React.createElement(social.icon, { className: "w-6 h-6" })}
                                            </button>
                                        </a>
                                    ))}
                                </div>

                            </div>

                            {/* Right Section - Contact Form */}
                            <div
                                ref={formRef}
                                className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                            >
                                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl" />

                                    {submitted ? (
                                        <div className="text-center py-16 animate-success-bounce relative z-10">
                                            <div className="relative mb-8">
                                                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-success-pulse shadow-2xl">
                                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-ping" />
                                            </div>
                                            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                                                Contact Info Submitted!
                                            </h3>
                                            <p className="text-gray-600 text-lg">Thank you for your interest. Our sales team will get back to you within 24 hours!</p>
                                            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                                                <Zap className="w-4 h-4" />
                                                <span>We'll contact you soon</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-8 relative z-10">
                                            <div className="text-center mb-10">
                                                <div className="inline-flex items-center gap-2 mb-4">
                                                    <MessageCircle className="w-6 h-6 text-purple-500" />
                                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                                        Get In Touch
                                                    </h2>
                                                </div>
                                                <p className="text-gray-600 text-lg">Share your details and let's start the conversation</p>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                                    <label className=" text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                                        <User className="w-4 h-4" />
                                                        Your Name *
                                                    </label>
                                                    <div className="relative overflow-hidden rounded-2xl">
                                                        <input
                                                            name="name"
                                                            value={form.name}
                                                            onChange={handleChange}
                                                            onFocus={() => handleFocus('name')}
                                                            onBlur={handleBlur}
                                                            className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.name ? 'border-red-400' :
                                                                focusedField === 'name' ? 'border-purple-400' : 'border-gray-200'
                                                                } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/80 font-medium relative z-10`}
                                                            placeholder="John Doe"
                                                        />
                                                        {focusedField === 'name' && (
                                                            <div className="absolute inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-sm animate-pulse" />
                                                        )}
                                                    </div>
                                                    {errors.name && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.name}</p>}
                                                </div>

                                                <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                                    <label className=" text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                                        <Phone className="w-4 h-4" />
                                                        Phone Number (Optional)
                                                    </label>
                                                    <div className="relative overflow-hidden rounded-2xl">
                                                        <input
                                                            name="phone"
                                                            type="tel"
                                                            value={form.phone}
                                                            onChange={handleChange}
                                                            onFocus={() => handleFocus('phone')}
                                                            onBlur={handleBlur}
                                                            className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.phone ? 'border-red-400' :
                                                                focusedField === 'phone' ? 'border-purple-400' : 'border-gray-200'
                                                                } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/80 font-medium relative z-10`}
                                                            placeholder="+1 (555) 123-4567"
                                                        />
                                                        {focusedField === 'phone' && (
                                                            <div className="absolute inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-sm animate-pulse" />
                                                        )}
                                                    </div>
                                                    {errors.phone && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.phone}</p>}
                                                </div>

                                                <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                                    <label className=" text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                                        <Mail className="w-4 h-4" />
                                                        Company Email *
                                                    </label>
                                                    <div className="relative overflow-hidden rounded-2xl">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            value={form.email}
                                                            onChange={handleChange}
                                                            onFocus={() => handleFocus('email')}
                                                            onBlur={handleBlur}
                                                            className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 ${errors.email ? 'border-red-400' :
                                                                focusedField === 'email' ? 'border-purple-400' : 'border-gray-200'
                                                                } rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/80 font-medium relative z-10`}
                                                            placeholder="john@company.com"
                                                        />
                                                        {focusedField === 'email' && (
                                                            <div className="absolute inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-sm animate-pulse" />
                                                        )}
                                                    </div>
                                                    {errors.email && <p className="text-red-500 text-sm mt-2 animate-shake font-medium">{errors.email}</p>}
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                className="w-full group relative bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:shadow-purple-500/30 animate-fade-in-up overflow-hidden transform hover:scale-105"
                                                style={{ animationDelay: '0.5s' }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                                <div className="relative flex items-center justify-center gap-3">
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                                            <span>Submitting Details...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                                                            <span>Submit Contact Info</span>
                                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                        </>
                                                    )}
                                                </div>
                                            </button>

                                            <div className="text-center text-sm text-gray-500 mt-4">
                                                <p>We'll send your details to <span className="font-semibold text-purple-600">sales@snix.ai</span></p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;