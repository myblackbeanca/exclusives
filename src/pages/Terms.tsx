import React from 'react';
import SEOHelmet from '../components/SEOHelmet';

const Terms: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="MINY Terms of Service"
        description="Read our terms of service and understand your rights as a MINY holder."
        path="/terms"
      />
      <div className="container mx-auto px-4 py-12">
        <h1>Terms of Service</h1>
      </div>
    </>
  );
};

export default Terms;