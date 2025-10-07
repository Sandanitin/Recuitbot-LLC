import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'IT Staffing', href: '/services#it-staffing' },
      { name: 'IT Development', href: '/services#it-development' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Industries', href: '/industries' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      
    ],
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-start gap-6 overflow-x-auto">
          {/* Company Info */}
          <div className="lg:col-span-1 flex-1 min-w-0">
            <div className="flex items-center mb-5">
              <img
                className="h-10 w-auto md:h-12"
                src="/images/IMG_7671.PNG"
                alt="Recuitbot LLC"
              />
              <span className="ml-2 text-base md:text-lg font-bold tracking-tight">Recuitbot LLC</span>
            </div>
            <p className="text-gray-300 text-xs leading-6 mb-3 max-w-xs">
              Your trusted partner for IT staffing, development, and digital marketing solutions. We connect talent with opportunity across industries.
            </p>
            <address className="not-italic text-gray-300 text-xs mb-3 flex flex-wrap gap-4">
              <div className="flex items-start">
                <svg className="h-4 w-4 text-primary-400 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <span>237 South Street, Suite #108, Waukesha, WI 53186</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 text-primary-400 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                </svg>
                <a href="tel:+12623361142" className="hover:text-white transition-colors duration-200">(262) 336-1142</a>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 text-primary-400 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 3L12 12 5.4 7h13.2z"/>
                </svg>
                <a href="mailto:team@recuitbot.com" className="hover:text-white transition-colors duration-200">team@recuitbot.com</a>
              </div>
            </address>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase mb-3">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-base inline-flex items-center"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-600 group-hover:bg-white" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase mb-3">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-base inline-flex items-center"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-600 group-hover:bg-white" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase mb-3">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-base inline-flex items-center"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-600 group-hover:bg-white" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-sm">
              © {currentYear} Recuitbot LLC. All rights reserved.
            </p>
            <a
              href="https://www.vikrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 md:mt-0 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              aria-label="Developed with love by Vikrin (opens in a new tab)"
            >
              Developed with <span aria-hidden="true">❤️</span> by Vikrin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
