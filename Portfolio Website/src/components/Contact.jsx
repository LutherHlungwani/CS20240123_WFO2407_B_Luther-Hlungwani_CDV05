import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <div className="space-y-4">
          <p className="text-gray-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone} className="text-teal-500 mr-2" />
            +27 68 112 9000
          </p>
          <p className="text-gray-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-500 mr-2" />
            <a href="mailto:lutherhlungwani9@gmail.com" className="text-teal-500 hover:text-teal-600">
              lutherhlungwani9@gmail.com
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
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a 
              href="https://github.com/LutherHlungwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

