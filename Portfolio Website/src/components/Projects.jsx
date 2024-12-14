const ProjectCard = ({ title, image, description, link }) => {
    return (
      <button 
        onClick={() => window.open(link, '_blank')}
        className="block w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </button>
    )
  }
  
  const Projects = () => {
    const projects = [
      {
        title: "Cache Bank Landing Page",
        image: "/Screenshot 2024-11-10 133543.png",
        description: "Welcome to Cache Bank landing page, a showcase of UI/UX design. Built with HTML, CSS, JavaScript.",
        link: "https://github.com/LutherHlungwani/SDF_Portfolio_Piece_CS20240123_WFO2407_B_Luther-Hlungwani_SDF11.git"
      },
      {
        title: "Agile Kanban Board",
        image: "/Agile Kanban Board.gif",
        description: "Welcome to the Agile Board project, allowing dev teams to create, log, and track tasks. Built with HTML, CSS, JavaScript.",
        link: "https://github.com/LutherHlungwani/CS20240123_WFO2407_B_Luther-Hlungwani_JSL11.git"
      }
    ]
  
    return (
      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    )
  }
  
  export default Projects
  
  