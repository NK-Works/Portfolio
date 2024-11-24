const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Made with 🩶</p>
        <p>|</p>
        <p>Visit My Socials </p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/NK-Works" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform">
            <img src="/assets/github.png" alt="github" className="w-2/3 h-2/3" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/anneshu_nag" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform">
            <img src="/assets/twitter.png" alt="twitter" className="w-2/3 h-2/3" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anneshu-nag/" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform">
            <img src="/assets/linkedin.png" alt="linkedin" className="w-2/3 h-2/3" />
          </a>
        </div>
      </div>

      <p className="text-white-500"> 2024 Anneshu Nag. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
