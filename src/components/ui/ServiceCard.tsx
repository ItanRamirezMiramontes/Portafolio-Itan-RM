import { Service } from '@/types';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 transition-all hover:border-slate-300">
      <div className="absolute top-8 right-8 text-5xl md:text-6xl font-black text-slate-50 select-none">
        {formattedIndex}
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
        <p className="text-slate-500 mb-8 max-w-lg leading-relaxed">{service.description}</p>

        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ideal para</h4>
            <ul className="space-y-2">
              {service.idealFor.map((item) => (
                <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Entregables</h4>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="text-sm text-slate-700 flex items-start gap-3">
                  <Check size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
