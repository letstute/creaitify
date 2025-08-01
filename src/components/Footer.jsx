"use client";

import { images } from '@/constants/images';

// SVG Icon Components (can be moved to a separate file if preferred)
const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.28.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XTwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.498 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
);

const YouTubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100 font-sans antialiased pt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 pb-12 border-b border-gray-300">
          <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0 md:col-span-3 lg:col-span-3">
            <img
              src={images.logo}
              alt="Creaitify Logo"
              className="h-24 w-auto"
            />
          </div> {/* Logo/text spans all 3 columns */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-600">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="https://www.letstute.com/aboutus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-600">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="https://www.letstute.com/contactus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-600">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/letstute" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" aria-label="Facebook" title="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/letstute" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" aria-label="Instagram" title="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/LetsTute" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" aria-label="X (Twitter)" title="X (Twitter)">
                <XTwitterIcon />
              </a>
              <a href="https://www.linkedin.com/company/letstute/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.youtube.com/c/LetsTute" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" aria-label="YouTube" title="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Creaitify</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
