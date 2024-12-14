const Header = () => {
    return(
        <header className="bg-teal-400 text-white">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2x1 font-bold text-center mb-4">Luther's Developer Profile</h1>
                <nav className="flex justify-center space-x-6">
                    <a href="#about" className="hover:text-teal-100 transition-colors">About</a>
                    <a href="#projects" className="hover:text-teal-100 transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-teal-100 transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-teal-100 transition-colors">Contact</a>
                </nav>
            </div>
        </header>
    )

}

export default Header;