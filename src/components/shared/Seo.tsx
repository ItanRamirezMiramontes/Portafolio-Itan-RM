import { Helmet } from 'react-helmet-async';
import { SeoProps } from '@/types';

/**
 * Reusable SEO component for managing page-specific metadata.
 */
const Seo = ({ title, description, canonical, ogImage }: SeoProps) => {
  const siteName = 'Itan Ramirez';
  const fullTitle = `${title} | ${siteName} — Ingeniería de Software`;
  const defaultDescription = 'Ingeniero de software especializado en ayudar a startups y MiPyMEs a construir sistemas robustos con enfoque de producto.';
  const url = window.location.href;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="author" content={siteName} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default Seo;
