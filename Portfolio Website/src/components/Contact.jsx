import { Linkedin, Github, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <div className="space-y-4">
          <p className="text-gray-600 flex items-center justify-center">
            <Phone size={20} className="mr-2 text-teal-500" />
            +27 68 112 9000
          </p>
          <p className="text-gray-600 flex items-center justify-center">
            <Mail size={20} className="mr-2 text-teal-500" />
            <a href="mailto:lutherhlungwani3@gmail.com" className="text-teal-500 hover:text-teal-600">
              lutherhlungwani3@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/luther-hlulani-hlungwani-8183822a5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/LutherHlungwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

