import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LifeLikeAIModels = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Sample images - replace with your actual image paths
  const [images, setImages] = useState([
    {
      src: "/aimodal/1.png",
      alt: "AI Model 1",
      className: "tall-left",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=500&fit=crop&crop=face",
    },
    {
      src: "/aimodal/2.png",
      alt: "AI Model 2",
      className: "medium-top",
      fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=350&fit=crop&crop=face",
    },
    {
      src: "/aimodal/3.png",
      alt: "AI Model 3",
      className: "short-middle",
      fallback: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=280&h=250&fit=crop&crop=face",
    },
    {
      src: "/aimodal/4.png",
      alt: "AI Model 4",
      className: "tall-right",
      fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=480&fit=crop&crop=face",
    },
    {
      src: "/aimodal/5.png",
      alt: "AI Model 5",
      className: "center-main",
      fallback: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=280&h=370&fit=crop&crop=face",
    },
    {
      src: "/aimodal/6.png",
      alt: "AI Model 6",
      className: "wide-bottom",
      fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&h=200&fit=crop&crop=face",
    },
    {
      src: "/aimodal/7.png",
      alt: "AI Model 7",
      className: "extra-1",
      fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&h=200&fit=crop&crop=face",
    },
    {
      src: "/aimodal/8.png",
      alt: "AI Model 8",
      className: "extra-2",
      fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&h=200&fit=crop&crop=face",
    },
  ]);
  console.log(setImages)

  // Store original images for restoring after hover
  // const [originalImages, setOriginalImages] = useState([]);


  // // Store original positions when component mounts
  // useEffect(() => {
  //   setOriginalImages([...images]);
  // }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  // const swapWithCenter = (index) => {
  //   const centerIndex = 4; // This is the main center image index
  //   if (index === centerIndex) return;

  //   const newImages = [...images];
  //   [newImages[centerIndex], newImages[index]] = [newImages[index], newImages[centerIndex]];
  //   setImages(newImages);
  // };

  // // Restore original positions with smooth transition
  // const restoreOriginal = () => {
  //   setImages([...originalImages]);
  // };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 overflow-hidden flex items-center py-10 md:py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(168, 85, 247, 0.05) 40%, 
            transparent 70%
          )`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center justify-between min-h-[60vh] md:min-h-[80vh]">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-200/40 backdrop-blur-sm mb-6 md:mb-8 w-fit mx-auto lg:mx-0"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-purple-600"
              >
                🤖
              </motion.span>
              <span className="text-purple-700 text-sm font-medium tracking-wide uppercase">
                AI Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
            >
              <span className="block font-serif">Life-Like AI</span>
              <span className="block font-serif bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Models
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Experience the future of virtual modeling with our incredibly
              realistic AI-generated personas that represent diverse beauty and
              authenticity.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 w-fit mx-auto lg:mx-0 group text-sm md:text-base"
            >
              <span>Explore Models</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div
              className="grid grid-cols-10 gap-1 sm:gap-2 md:gap-3 h-auto lg:max-w-3xl max-w-full w-full aspect-[8/9] md:aspect-[9/8]  px-1 sm:px-2 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #a171da 0%, #ff66c4 50%, #a171da 100%)",
              }}
            >
              {/* Left Column */}
              <div className="col-span-3 flex flex-col gap-1 sm:gap-2 md:gap-3">
                <div className="group cursor-pointer w-full h-[70px] sm:h-[90px] md:h-[90px] lg:h-[100px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-b-xl md:rounded-b-2xl">
                    <img
                      src={images[0]?.src ?? "/aimodal/0.png"}
                      alt={images[0]?.alt ?? "AI Model 0"}
                      className="w-full h-full object-bottom object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="group cursor-pointer w-full h-[170px] sm:h-[210px] md:h-full lg:h-[260px] xl:h-[310px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-xl md:rounded-2xl">
                    <img
                      src={images[1]?.src ?? "/aimodal/1.png"}
                      alt={images[1]?.alt ?? "AI Model 1"}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="group cursor-pointer w-full h-full hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-t-xl md:rounded-t-2xl">
                    <img
                      src={images[7]?.src ?? "/aimodal/7.png"}
                      alt={images[7]?.alt ?? "AI Model 7"}
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="col-span-4 flex flex-col gap-1 sm:gap-2 md:gap-3">
                <div className="group cursor-pointer w-full h-[70px] sm:h-[90px] md:h-[90px] lg:h-[100px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-b-xl md:rounded-b-2xl">
                    <img
                      src={images[2]?.src ?? "/aimodal/4.png"}
                      alt={images[2]?.alt ?? "AI Model 4"}
                      className="w-full h-full object-bottom object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="group cursor-pointer w-full h-full xl:h-[400px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-xl md:rounded-2xl">
                    <img
                      src={images[4]?.src ?? "/aimodal/4.png"}
                      alt={images[4]?.alt ?? "AI Model 4"}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="group cursor-pointer w-full h-[70px] sm:h-[90px] md:h-[90px] lg:h-[180px] xl:h-full hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-t-xl md:rounded-t-2xl">
                    <img
                      src={images[3]?.src ?? "/aimodal/5.png"}
                      alt={images[3]?.alt ?? "AI Model 5"}
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-3 flex flex-col gap-1 sm:gap-2 md:gap-3">
                <div className="group cursor-pointer w-full h-[70px] sm:h-[90px] md:h-[90px] lg:h-[100px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-b-xl md:rounded-b-2xl">
                    <img
                      src={images[5]?.src ?? "/aimodal/6.png"}
                      alt={images[5]?.alt ?? "AI Model 6"}
                      className="w-full h-full object-bottom object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="group cursor-pointer w-full h-[170px] sm:h-[210px] md:h-full lg:h-full xl:h-[310px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-xl md:rounded-2xl">
                    <img
                      src={images[6]?.src ?? "/aimodal/6.png"}
                      alt={images[6]?.alt ?? "AI Model 6"}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="group cursor-pointer w-full h-full xl:h-[290px] hover:scale-105 transition-all duration-300 hover:z-10">
                  <div className="relative w-full h-full overflow-hidden shadow-xl rounded-t-xl md:rounded-t-2xl">
                    <img
                      src={images[1]?.src}
                      alt={images[1]?.alt}
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifeLikeAIModels;