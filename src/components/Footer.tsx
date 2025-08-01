
import React from "react";
import { Link } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/c67aeacc-e555-455a-a7a3-4cc38101935c.png" 
              alt="Study System Logo" 
              className="h-10 w-auto" 
            />
            <p className="text-gray-600 mt-2">© {new Date().getFullYear()} Study System</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a 
              href="https://luisnewton.de/impressum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
            >
              <Link className="w-4 h-4 mr-1" />
              Impressum
            </a>
            <a 
              href="https://luisnewton.de/agb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
            >
              <Link className="w-4 h-4 mr-1" />
              AGB
            </a>
            <a 
              href="https://luisnewton.de/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
            >
              <Link className="w-4 h-4 mr-1" />
              Datenschutz
            </a>
            <a 
              href="https://luisnewton.de/support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
            >
              <Link className="w-4 h-4 mr-1" />
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
