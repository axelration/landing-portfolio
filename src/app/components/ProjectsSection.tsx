export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live"
    },
    {
      id: 2,
      title: "Creative Portfolio Site",
      description: "An interactive portfolio website featuring GSAP animations, WebGL effects, and a custom CMS for content management.",
      tech: ["React", "GSAP", "Three.js", "Sanity"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.",
      tech: ["React Native", "Firebase", "Plaid API"],
      status: "Completed"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "An AI-powered content generation platform that helps businesses create marketing copy, blog posts, and social media content.",
      tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="smooth-content min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-7xl mx-auto z-10 w-full">
        <h2 className="text-4xl md:text-5xl text-white mb-12 text-center font-['Inter']" style={{ fontWeight: 300 }}>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl text-white font-['Inter']" style={{ fontWeight: 400 }}>
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-['Inter'] ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed font-['Inter']" style={{ fontWeight: 300 }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-md text-sm border border-blue-500/30 font-['Inter']"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="text-blue-400 hover:text-blue-300 transition-colors font-['Inter']" style={{ fontWeight: 300 }}>
                  View Project →
                </button>
                <button className="text-blue-400 hover:text-blue-300 transition-colors font-['Inter']" style={{ fontWeight: 300 }}>
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}