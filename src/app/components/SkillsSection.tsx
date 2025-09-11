export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "GSAP Animation", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe Creative Suite", level: 88 },
        { name: "Blender", level: 75 },
        { name: "Git/GitHub", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="smooth-content min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-6xl mx-auto z-10 w-full">
        <h2 className="text-4xl md:text-5xl text-white mb-12 text-center font-['Inter']" style={{ fontWeight: 300 }}>
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl text-white mb-6 font-['Inter']" style={{ fontWeight: 400 }}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100 font-['Inter']" style={{ fontWeight: 300 }}>
                        {skill.name}
                      </span>
                      <span className="text-blue-300 text-sm font-['Inter']">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-white mb-6 font-['Inter']" style={{ fontWeight: 300 }}>
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Docker", "AWS", "Firebase", "Supabase", "Prisma", "WebGL", "Three.js", "Framer Motion", "Jest", "Cypress"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors font-['Inter']"
                style={{ fontWeight: 300 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}