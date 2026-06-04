import { Helmet } from 'react-helmet-async';
import TimelineSection from '@/components/sections/TimelineSection';
import PageWrapper from '@/components/layout/PageWrapper';
import CtaSection from '@/components/sections/CtaSection';
import SectionHeader from '@/components/shared/SectionHeader';
import CertificationsSection from '@/components/sections/CertificationsSection';

const Trajectory = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Trayectoria | Itan Ramirez</title>
        <meta 
          name="description" 
          content="Explora mi experiencia profesional, formación académica y logros técnicos a lo largo de los últimos años." 
        />
      </Helmet>

      <section className="pt-20 pb-12 bg-slate-50/50">
        <div className="section-container">
          <SectionHeader
            title="Trayectoria"
            description="Desde mis primeros pasos en la programación competitiva hasta el liderazgo técnico de productos reales."
            className="mb-0"
          />
        </div>
      </section>

      <TimelineSection />

      <CertificationsSection />

      <CtaSection />
    </PageWrapper>
  );
};

export default Trajectory;
