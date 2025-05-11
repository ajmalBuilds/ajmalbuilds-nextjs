import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projectsData = [
  {
    id: 1,
    title: "YANA",
    description:
      "The platform that redefines local community interaction. Whether you're living in a college hostel, an apartment, or a small town, YANA brings your people together through real-time updates, shared resources, and connections.",
    tags: ["Next.js", "Express.js", "MongoDB", "Firebase"],
    image: "/assets/yana-preview.png",
    liveUrl: "https://yana-beta.vercel.app/",
    repoUrl: "https://github.com/ajmalBuilds/YANA",
    category: "web",
  },
  {
    id: 2,
    title: "Question Paper Generator",
    description:
      "An Automated Question paper generator which create balanced, randomized, question papers from your question bank instantly. Streamline your Question paper generation with our intelligent question paper generator.",
    tags: ["React.js", "Express.js", "Firebase"],
    image: "/assets/question-paper-generator-preview.png",
    liveUrl: "https://question-paper-generator-cpwx.onrender.com/",
    repoUrl: "https://github.com/ajmalBuilds/QUESTION-PAPER-GENERATOR",
    category: "web",
  },
  {
    id: 3,
    title: "Attendance Buddy",
    description: "Track Your Attendance Like Never Before Stay on top of your academic journey with our smart attendance tracking system. Never worry about meeting attendance requirements again. Attend smart, Bunk smarter!",
    tags: ["React.js", "Tailwindcss", "Framer-Motion"],
    image: "/assets/attendance-buddy-preview.png",
    liveUrl: "https://attendancebuddy.onrender.com/",
    repoUrl: "https://github.com/ajmalBuilds/75PLUS",
    category: "web",
  },
  {
    id: 4,
    title: "ETOILARA",
    description:
      "A fitness tracking application with workout planning, progress monitoring, and health insights.",
    tags: ["Html", "CSS", "JavaScript"],
    image:
      "/assets/etoilara-preview.jpg",
    liveUrl: "https://ajmalbuilds.github.io/ETOILARA/",
    repoUrl: "https://github.com/ajmalBuilds/ETOILARA",
    category: "mobile",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing creative work and professional skills with a focus on user experience.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "#",
    repoUrl: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Task Management App",
    description:
      "A productivity application for task management, collaboration, and workflow optimization.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "#",
    repoUrl: "#",
    category: "web",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "design", label: "UI/UX Design" },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  useEffect(() => {
    if (isInView && projectRefs.current.length > 0) {
      projectRefs.current.forEach((project, index) => {
        if (project) {
          setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
          }, 100 * index);
        }
      });
    }
  }, [isInView, filter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
          </span>
        </h2>

        {/* Filter Categories here */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-teal-600 text-white shadow-md transform scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid display*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out opacity-0 transform translate-y-12 group hover:shadow-2xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-transparent border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 font-medium rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
