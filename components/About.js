import React, { useRef, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const isInView = useInView(sectionRef, { threshold: 0.2 });

  useEffect(() => {
    if (isInView && imageRef.current && contentRef.current) {
      imageRef.current.classList.add("animate-fade-in-left");
      contentRef.current.classList.add("animate-fade-in-right");
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className="opacity-0 transform translate-x-[-20px] transition-all duration-1000"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-blue-600 opacity-70 mix-blend-multiply" />
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          <div
            ref={contentRef}
            className="opacity-0 transform translate-x-[20px] transition-all duration-1000"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Creative Developer with a Passion for Design
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hi, I’m Mohammed Ajmal Khan — a passionate and self-driven
                developer with a deep interest in building impactful digital
                solutions. While currently pursuing my BTech, I’ve been actively
                exploring the world of web development, UI/UX design, and
                emerging technologies like blockchain and AI.
              </p>

              <p>
                I love creating full-stack applications that solve real
                problems, and I enjoy learning new frameworks, contributing to
                open source, and continuously improving my craft.
              </p>

              <p>
                My goal is to build products that are both useful and meaningful.
                When I’m not coding, you’ll find me researching
                startup ideas, studying emerging tech trends, or working on
                personal projects that align with my ambitions.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor of Technology, RGUKT, Basar.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  3+ years in web development and design
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300"
              >
                <span>Let's work together</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
