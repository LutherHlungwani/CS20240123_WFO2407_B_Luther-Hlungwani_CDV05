const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "UI/UX Design", "Git"]
  
    return (
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-teal-400 text-white rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  
  