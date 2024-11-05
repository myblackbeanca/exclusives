import React from 'react';
import SEOHelmet from '../components/SEOHelmet';

const Privacy: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="MINY Privacy Policy"
        description="Learn about how we protect your privacy and handle your data at MINY."
        path="/privacy"
      />
      <div className="container mx-auto px-4 py-12">
        <h1>Privacy Policy</h1>
      </div>
    </>
  );
};

export default Privacy;