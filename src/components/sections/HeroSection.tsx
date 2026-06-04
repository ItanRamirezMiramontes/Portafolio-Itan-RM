import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/utils/animations";
import profilePic from "@/assets/images/Foto_perfil.jpg";

const HeroSection = () => {
  const stats = [
    { label: "Proyectos reales", value: "4+" },
    { label: "Dedicación y calidad", value: "Compromiso real" },
    { label: "Stack principal", value: "Spring + React" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Availability Badge & Profile Mini */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-4 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Abierto a nuevos desafíos
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={staggerItem} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-3xl">
              Construyendo software con{" "}
              <span className="text-slate-400">mentalidad de producto.</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed"
          >
            Estudiante de Ingeniería apasionado por resolver problemas reales.
            Diseño y desarrollo sistemas robustos con Java, Spring Boot y React,
            siempre aprendiendo y buscando la mejor solución.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all hover:gap-3"
            >
              Ver proyectos
              <ArrowRight size={20} />
            </Link>
            <a
              href="mailto:itanrami05@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all"
            >
              Hablemos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-12 border-t border-slate-100 pt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Picture Side (Desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full pointer-events-none">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden mt-12">
            <img
              src={profilePic}
              alt="Itan Ramirez"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
