import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Chatbot",
      description: "Conversational AI assistant built with OpenAI API.",
      image: "/uploads/1761622869892.jpg",
      link: "https://github.com/username/ai-chatbot",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates using OpenWeatherMap API.",
      image: "/images/project2.jpg",
      link: "https://github.com/username/weather-app",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing design & development work.",
      image: "/images/project3.jpg",
      link: "https://github.com/username/portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">Nakul Borate</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <motion.img
          src="/uploads/1761623346981.jpg"
          alt="Profile of Nakul Borate"
          className="w-48 h-48 mx-auto rounded-full shadow-lg mb-6 border-4 border-blue-500 object-cover"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Nakul 👋</h2>
        <p className="text-lg text-gray-600 mb-8">Full Stack Developer & Creative Problem Solver</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/username" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/username" target="_blank"><Linkedin /></a>
          <a href="mailto:nakul@example.com"><Mail /></a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto text-center py-16 px-4">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate developer with experience in modern web technologies like React, Node.js, and Java.
          I create clean, user-focused digital experiences with performance and design in mind.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="shadow-lg hover:shadow-xl transition overflow-hidden">
                <motion.img 
                  src={p.image} 
                  alt={p.title} 
                  className="h-48 w-full object-cover" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <p className="text-gray-600 mb-4">{p.description}</p>
                  <Button asChild><a href={p.link} target="_blank">View Project</a></Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
        <p className="text-gray-700 mb-8">Let's build something great together.</p>
        <Button asChild>
          <a href="mailto:nakul@example.com">Say Hello</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t mt-10">
        © {new Date().getFullYear()} Nakul Borate. All rights reserved.
      </footer>
    </div>
  );
}