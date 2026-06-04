import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import CommunitySection from '@/components/sections/CommunitySection';
import ProcessSection from '@/components/sections/ProcessSection';
import CtaSection from '@/components/sections/CtaSection';
import PageWrapper from '@/components/layout/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Itan Ramirez | Software Developer & Product Mindset</title>
        <meta 
          name="description" 
          content="Desarrollador de software en formación enfocado en crear soluciones reales con Java, Spring Boot y React. Apasionado por el análisis técnico y el impacto del producto." 
        />
        <meta property="og:title" content="Itan Ramirez | Software Developer & Product Mindset" />
        <meta property="og:description" content="Construyendo el futuro del software con una base técnica sólida y mentalidad de producto." />
      </Helmet>

      <HeroSection />
      
      <CapabilitiesSection />
      
      <FeaturedProjectsSection />

      <CommunitySection />
      
      <ProcessSection />
      
      <CtaSection />
    </PageWrapper>
  );
};

export default Home;
