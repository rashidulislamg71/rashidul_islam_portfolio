
const Timeline = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-20">03 / Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-10 border border-white/5 rounded-3xl">
          <span className="text-blue-500 font-mono text-sm">2023 - 2027</span>
          <h3 className="text-2xl text-white mt-4 font-bold">Square Polytechnic Institute</h3>
          <p className="text-gray-500 mt-2 italic text-sm">Student of Computer Science</p>
        </div>
        <div className="p-10 bg-white/[0.03] border border-white/10 rounded-3xl">
          <span className="text-blue-500 font-mono text-sm">Active Projects</span>
          <h3 className="text-2xl text-white mt-4 font-bold">Full Stack Developer</h3>
          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            Building complex web architectures like the Institute's official site and data-driven trackers.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;