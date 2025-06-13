import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "SNIX transformed our seasonal campaign process. We cut production costs by 78% while increasing our visual content output threefold. Most importantly, our customers can't tell the difference — the quality is exceptional.",
    author: "Sarah Chen",
    position: "Marketing Director",
    company: "Luxe Apparel",
    avatar: "/avtar.png",
    rating: 5,
    metrics: "78% cost reduction",
    color: "from-purple-500 to-pink-500"
  },  
  {
    id: 2,
    quote:
      "The ROI is undeniable. Since partnering with SNIX, our product page conversion rate has increased by 32%. We're creating more content, testing more variations, and seeing better results across all channels.",
    author: "Michael Rodriguez",
    position: "Ecommerce Director",
    company: "Urban Collective",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "32% conversion increase",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    quote:
      "What impressed us most was the speed without compromising quality. Our time-to-market has improved dramatically, and our creative team can now focus on strategy rather than production bottlenecks.",
    author: "Emma Thompson",
    position: "Creative Director",
    company: "Fashion Forward Co.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "50% faster delivery",
    color: "from-pink-500 to-orange-500",
  },
  {
    id: 4,
    quote:
      "SNIX has revolutionized how we approach product photography. The consistency across our entire catalog is remarkable, and our brand aesthetic has never looked more cohesive.",
    author: "David Park",
    position: "Brand Manager",
    company: "Modern Essentials",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "100% brand consistency",
    color: "from-green-500 to-blue-500",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Mouse movement tracking
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-50/30 overflow-hidden flex items-center py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.15) 0%, 
            rgba(168, 85, 247, 0.08) 40%, 
            transparent 70%
          )`,
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-400/60" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/40 rounded-full backdrop-blur-sm mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="w-3 h-3 text-purple-600 fill-current" />
            </motion.div>
            <span className="text-purple-700 text-xs font-medium tracking-wide uppercase">
              Client Love
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            <span className="block">What Our</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Real results from real clients who trust us with their creative
            vision
          </motion.p>
        </motion.div>

        {/* Single Testimonial Card with Smooth Animation */}
        <div className="flex justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`testimonial-${currentIndex}`}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                y: -50,
                scale: 0.95
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="max-w-2xl w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-2xl overflow-hidden group cursor-pointer"
              >
                {/* Subtle Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.color} opacity-5 group-hover:opacity-8 transition-opacity duration-500`}
                />

                {/* Rating Stars */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex gap-1 mb-6 relative z-10"
                >
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.3 + i * 0.1, 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 relative z-10 font-medium"
                >
                  "{currentTestimonial.quote}"
                </motion.blockquote>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center justify-between relative z-10"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <h4 className="font-bold text-gray-900 text-lg">
                        {currentTestimonial.author}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {currentTestimonial.position}
                      </p>
                      <p className="text-purple-600 font-semibold text-sm">
                        {currentTestimonial.company}
                      </p>
                    </motion.div>
                  </div>

                  {/* Metric Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className={`px-4 py-2 bg-gradient-to-r ${currentTestimonial.color} text-white rounded-full text-sm font-bold shadow-lg`}
                  >
                    {currentTestimonial.metrics}
                  </motion.div>
                </motion.div>

                {/* Subtle Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center hover:bg-purple-100 transition-all duration-300 shadow-lg group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center hover:bg-purple-100 transition-all duration-300 shadow-lg group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
