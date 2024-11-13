// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} MyNextApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;