import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <span className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm mb-6 inline-block">
              Data Analyst & Power BI Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
              Revanth Kumar Nidibrolu
            </h1>
            <p className="text-lg opacity-80 mb-8 max-w-xl">
              Analytical Data Analyst with a solid foundation in data analysis, visualization, and statistical methods. Proficient in tools such as Power BI, MySQL, and Python.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://drive.google.com/file/d/1htuqYCAGwVKHka74T4JbrZC9LGBh-oOm/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium border border-border rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300"
              >
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 font-medium border border-border rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm opacity-70">Find me on</span>
              <a 
                href="https://github.com/revanthkumar-nidibrolu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/revanth-kumar-nidibrolu-1b3628244/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative max-w-md mx-auto">
              <div className="w-full aspect-square max-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-float">
                <img 
                  src="https://res.cloudinary.com/dgpiiljnj/image/upload/v1740932257/portfolio%20data/qrbgfhkmz3kwuqihw7vd.jpg" 
                  alt="Revanth Kumar" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-primary/80 blur-3xl"></div>
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-primary/80 blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in-delayed">
          <a 
            href="#about" 
            className="inline-flex flex-col items-center gap-2 transition-transform hover:translate-y-2"
          >
            <span className="text-sm opacity-70">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
