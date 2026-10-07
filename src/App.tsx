import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Menu, X, Volleyball } from 'lucide-react';

// Custom Facebook icon component
const FacebookIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a1128] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1128]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <span className="bg-blue-600 p-2 rounded-lg">
                <Volleyball className="w-5 h-5" />
              </span>
              VOLLEY • DREAM
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a1128] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600/20 border border-blue-500/30 px-4 py-1 rounded-full text-sm font-semibold text-blue-300 mb-6">
              🏐 Dream Hobby · Volleyball
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              My Favorite Hobby:
              <br />
              <span className="text-blue-400">Volleyball</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              I like volleyball because it is exciting, keeps me active, and is fun to play with friends. 
              It also helps me improve my teamwork and discipline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full"
              >
                About Me
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Volleyball */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-2xl relative animate-float">
            <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle,transparent_0_20px,rgba(47,107,255,0.2)_20px_22px)]" />
            <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(45deg,transparent_0_15px,rgba(10,17,40,0.1)_15px_16px)]" />
          </div>
        </div>
      </section>

      {/* What I Need & How I Start */}
      <section className="py-20 bg-[#0d1735]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What I Need */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-blue-400">📋</span> What I Need
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="text-blue-400">🏐</span> Volleyball
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="text-blue-400">👟</span> Sports Shoes
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="text-blue-400">👕</span> Comfortable Sportswear
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How I Start */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-blue-400">🚀</span> How I Start
                </h2>
                <ol className="space-y-4">
                  <li className="flex items-center gap-4 text-lg">
                    <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    Wear proper sportswear and shoes.
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    Find a volleyball court and warm up.
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    Start practicing basic volleyball skills.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6">
                Hi! I'm <span className="text-blue-400 font-semibold">Earl Polloso</span>, a student who loves sports, 
                technology, and learning new skills. Volleyball is my dream hobby because it keeps me active 
                and teaches me teamwork. I enjoy playing with friends and improving my game every day.
              </p>
              <p className="text-gray-400">
                When I'm not on the court, I love exploring tech and discovering new things. 
                This website is part of my school activity to share my passion for volleyball.
              </p>
            </div>

            {/* Profile Card */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 backdrop-blur-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-4 border-white/20 shadow-lg">
                  EP
                </div>
                <h3 className="text-2xl font-bold mb-6">Earl Polloso</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Hobby</span>
                    <span className="font-semibold">Volleyball</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Interest</span>
                    <span className="font-semibold">Sports, Technology, Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0d1735]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Facebook Button */}
            <a
              href="MY_FACEBOOK_PROFILE_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              <FacebookIcon className="w-8 h-8 text-blue-500 group-hover:text-blue-400" />
              <span className="text-lg font-semibold">Facebook</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:MY_GMAIL_HERE"
              className="group flex items-center justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-8 h-8 text-blue-500 group-hover:text-blue-400" />
              <span className="text-lg font-semibold">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-400">
        <p>© 2025 VOLLEY • DREAM — Earl Polloso. School Activity.</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}