 const Footer = () => (
  <footer className="pt-32 pb-12 bg-[#050505] border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-9xl font-bold text-white mb-16 tracking-tighter">
        LET'S <span className="text-gray-700">TALK.</span>
      </h2>
      <a href="mailto:your@email.com" className="text-2xl text-blue-500 hover:text-white transition-colors underline underline-offset-8">
        rashedul.dev@gmail.com
      </a>
      
      <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-gray-600">
        <p>© 2026 RASHIDUL ISLAM — ALL RIGHTS RESERVED</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;