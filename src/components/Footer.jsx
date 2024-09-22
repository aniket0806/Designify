import React from 'react';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-900 text-white ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Resources</h3>z
          <ul>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <p className="text-center mt-8">&copy; 2024 MyBrand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
