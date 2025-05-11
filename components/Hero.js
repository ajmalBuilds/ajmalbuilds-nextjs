import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(20px)";
      setTimeout(() => {
        title.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 300);
    }

    if (subtitle) {
      subtitle.style.opacity = "0";
      subtitle.style.transform = "translateY(20px)";
      setTimeout(() => {
        subtitle.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
      }, 600);
    }

    if (cta) {
      cta.style.opacity = "0";
      cta.style.transform = "translateY(20px)";
      setTimeout(() => {
        cta.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        cta.style.opacity = "1";
        cta.style.transform = "translateY(0)";
      }, 900);
    }
  }, []);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 z-0" />

      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 md:w-64 md:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <span className="relative inline-block gradient-text">
              Creative Developer
            </span>
            <br /> & Designer
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I build exceptional digital experiences that inspire and delight
            users. Let's bring your vision to life with elegant, responsive, and
            functional design.
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transform hover:scale-[1.02] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 text-gray-900 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
