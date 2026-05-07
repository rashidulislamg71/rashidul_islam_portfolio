const PROJECTS = [
  { id: "01", title: "BookShelf Pro", category: "Full-Stack System", tech: "Next.js / MongoDB" },
  { id: "02", title: "JobTracker AI", category: "SaaS Dashboard", tech: "React / Firebase" }
];

 const Projects = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-xs uppercase tracking-[0.5em] text-gray-600 mb-20">02 / Selected Work</h2>
      
      <div className="space-y-1">
        {PROJECTS.map((p) => (
          <div key={p.id} className="group border-t border-white/5 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/[0.02] transition-all px-4 cursor-pointer">
            <div className="flex items-center gap-10">
              <span className="font-mono text-gray-700 text-sm">{p.id}</span>
              <div>
                <h3 className="text-4xl md:text-6xl font-medium text-white group-hover:translate-x-4 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="text-sm text-blue-500 font-mono mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.category}
                </p>
              </div>
            </div>
            <span className="text-gray-600 font-mono text-sm mt-4 md:mt-0 italic">{p.tech}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default Projects;