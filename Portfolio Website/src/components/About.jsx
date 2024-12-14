const About = () => {
    return (
      <section id="about" className="py-16 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src="/IMG-20240106-WA0023.jpg" 
            alt="Luther Hlungwani" 
            className="w-32 h-32 rounded-full object-cover border-4 border-teal-400"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm Luther, a dedicated software developer with a year of experience building responsive, 
              user-focused web applications. I specialize in HTML, CSS, JavaScript, and am proficient 
              with frameworks like React and Vue. I'm passionate about writing clean, efficient code 
              and finding innovative solutions that enhance user experience. Known for thriving in 
              collaborative team settings, I bring strong communication skills and a focus on 
              performance to each project. I'm excited to contribute my skills to impactful work 
              and continue growing in a team environment.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
  