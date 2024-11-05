import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  path: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description, path }) => {
  const baseUrl = 'https://miny.com'; // Replace with actual base URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
    </Helmet>
  );
};

export default SEOHelmet;