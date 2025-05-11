import { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Palette, Layers, Smartphone, Database, LineChart, Swords } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code className="w-7 h-7 text-teal-600 dark:text-teal-400" />,
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Design',
    icon: <Palette className="w-7 h-7 text-amber-500 dark:text-amber-400" />,
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design', 'Design Systems', 'Typography'],
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'MySql'],
  },
  {
    title: 'Tools and Languages',
    icon: <Swords className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
    skills: ['Java', 'JavaScript', 'Firebase', 'JWT', 'Redux', 'C'],
  },
  {
    title: 'Project Management',
    icon: <Layers className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
    skills: ['Agile/Scrum', 'Jira', 'Git/GitHub', 'CI/CD', 'Technical Documentation', 'Team Collaboration'],
  },
  {
    title: 'Analytics',
    icon: <LineChart className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
    skills: ['Google Analytics', 'A/B Testing', 'User Research', 'Performance Optimization', 'SEO', 'Conversion Tracking'],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const skillsRef = useRef([]);

  useEffect(() => {
    if (isInView && skillsRef.current.length > 0) {
      skillsRef.current.forEach((el, index) => {
        if (el) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 100 * index);
        }
      });
    }
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="relative inline-block">
            Skills & Expertise
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => (skillsRef.current[index] = el)}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 transition-all duration-500 ease-out opacity-0 transform translate-y-8 hover:shadow-2xl"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gray-50 dark:bg-gray-800">
                  {category.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 rounded-full border border-gray-300 dark:border-gray-700">
            <div className="px-4 py-2 bg-teal-600 text-white font-medium rounded-full shadow-sm">
              Technical Skills
            </div>
            <div className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">
              Soft Skills
            </div>
            <div className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">
              Tools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;