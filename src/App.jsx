import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  ChevronDown,
  Server,
  Code,
  Database,
  Workflow,
  ExternalLink,
  Calendar,
  MapPin,
  GraduationCap
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
            >
              GG
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-500/25"
            >
              <Download size={16} />
              Resume
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-teal-500 to-blue-400 shadow-2xl shadow-blue-500/50 flex items-center justify-center">
                <span className="text-5xl font-black text-white drop-shadow-lg">
                  GG
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-teal-600 dark:from-slate-100 dark:via-blue-300 dark:to-teal-400 bg-clip-text text-transparent">
              Gagandeep Gagandeep
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-medium">
              IT Infrastructure & Automation Specialist
            </p>
            
            <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mb-8">
              Computer Systems Technician with hands-on experience in Tier IV data centers, automation, and operational excellence
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {[
                { icon: Server, label: 'Data Center Ops' },
                { icon: Workflow, label: 'Automation' },
                { icon: Database, label: 'Power BI' },
                { icon: Code, label: 'Scripting' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md"
                >
                  <item.icon size={18} className="text-blue-600" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-blue-500/30"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Github size={24} className="text-slate-700 dark:text-slate-300" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Linkedin size={24} className="text-blue-600" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-slate-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={24} className="text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Location</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">Toronto, Ontario, Canada</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={24} className="text-teal-500" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Education</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">Computer Systems Technician (Honours)</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">GPA: 3.62 | Grad: Apr 2025</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={24} className="text-purple-500" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Availability</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">Open to Co-op & Entry-level IT Roles</p>
              </motion.div>
            </div>

            <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { skill: 'Data Center Operations', level: 90 },
                  { skill: 'Power Automate & Scripting', level: 85 },
                  { skill: 'Power BI & Excel', level: 88 },
                  { skill: 'ITSM (ServiceNow, Remedy)', level: 82 },
                  { skill: 'Linux/Unix Administration', level: 80 },
                  { skill: 'Windows Server Management', level: 85 }
                ].map((item, i) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{item.skill}</span>
                      <span className="text-sm text-slate-500">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-teal-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-500" />

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12"
              >
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900" />
                
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Operation Control Analyst</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Ministry of Public and Business Service Delivery</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      Sep 2024 - Jan 2025
                    </span>
                  </div>

                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex gap-3">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Monitored Tier IV data center infrastructure and responded to alerts across mainframe, UNIX and Windows servers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Logged and tracked incidents using ITSM tooling; performed initial troubleshooting and escalations per ITIL guidelines</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Automated operational tasks and reporting using Power Automate and scripting, improving efficiency by 40%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Produced Power BI dashboards to track monitoring metrics and SLA adherence for shift handovers and leadership reporting</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Linux Server on OpenStack',
                  tags: ['IaaS', 'Linux', 'Apache'],
                  description: 'Provisioned and configured Linux VMs on OpenStack with custom storage, networking, and Apache deployment.',
                  gradient: 'from-blue-600 to-cyan-500'
                },
                {
                  title: 'ESMT Automation Extension',
                  tags: ['Automation', 'Chrome Extension', 'JavaScript'],
                  description: 'Chrome extension paired with Power Automate to streamline vendor workflows and reduce manual data entry.',
                  gradient: 'from-purple-600 to-pink-500'
                },
                {
                  title: 'Power BI Dashboards',
                  tags: ['Power BI', 'Excel', 'Power Automate'],
                  description: 'Built automated reporting dashboards that improved SLA visibility and stakeholder decision-making.',
                  gradient: 'from-teal-600 to-green-500'
                }
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Open to co-op and entry-level positions in IT operations, infrastructure, and automation
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <motion.a
                href="mailto:gagandeep200539@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold shadow-xl"
              >
                <Mail size={20} />
                Email Me
              </motion.a>

              <motion.a
                href="tel:+12896234347"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold shadow-xl"
              >
                <Calendar size={20} />
                Call Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Github size={24} className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Gagandeep Gagandeep • Built with React, Tailwind CSS & Framer Motion
        </p>
      </footer>
    </div>
  );
}