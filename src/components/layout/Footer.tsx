import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '@/data/technologies';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Link to="/" className="text-xl font-mono font-bold tracking-tight">
              IT<span className="text-slate-400">.</span>
            </Link>
            <p className="text-sm text-slate-500">Ingeniería de software con enfoque de producto.</p>
          </div>

          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ITAN RAMÍREZ. TODOS LOS DERECHOS RESERVADOS.</p>
          <p>CONSTRUIDO CON REACT + TAILWIND + FRAMER MOTION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
