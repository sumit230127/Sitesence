import { useState } from "react";
import { Menu } from "lucide-react";
import Footer from "./Footer"; // Footer Import किया गया

export default function OurWork() {
  const [showServices, setShowServices] = useState(false);
  const services = [
    { icon: "💻", name: "Web Design" },
    { icon: "🎯", name: "PPC Marketing" },
    { icon: "🔍", name: "Organic SEO" },
    { icon: "📢", name: "Social Media" },
    { icon: "📧", name: "Email & SMS Marketing" },
  ];

  const projects = Array(10)
    .fill([
      {
        name: "A&A Thermal Spray",
        image: "https://www.smartsites.com/media/a-a-thermal-spray-640x390.png",
        stats: [
          { percentage: "110%", description: "Increase in total site traffic" },
          { percentage: "118%", description: "Increase in organic search traffic" },
        ],
      },
      {
        name: "AGA Truck Parts",
        image: "https://www.smartsites.com/media/aga-parts.png",
        stats: [
          { percentage: "1057%", description: "Increase in organic search traffic" },
          { percentage: "685%", description: "Increase in total site traffic" },
        ],
      },
    ])
    .flat();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-10 px-4 py-8 lg:flex gap-6 flex-grow">
        {/* Filter Button for Mobile */}
        <button
          className="lg:hidden flex items-center gap-2 p-3 bg-gray-200 rounded-lg mb-4"
          onClick={() => setShowServices(!showServices)}
        >
          <Menu className="w-5 h-5" />
          <span>Filter</span>
        </button>

        {/* Services Sidebar */}
        <div
          className={`lg:w-1/4 ${showServices ? "block" : "hidden"} lg:block bg-white p-4 rounded-lg shadow-md fixed lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)]`}
        >
          <h2 className="text-2xl font-bold mb-4 text-black">Services</h2>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg bg-white text-black shadow-sm transition hover:shadow-md cursor-pointer"
              >
                <span className="text-xl">{service.icon}</span>
                <span className="font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="lg:w-3/4 w-full space-y-6 lg:ml-1/4">
          <h2 className="text-3xl font-bold">Our Work</h2>
          <p className="text-gray-500 font-[600]">Explore the best in PPC, SEO, and Web Design.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                <img src={project.image} alt={project.name} className="w-full rounded-lg mb-3" />
                <h3 className="text-xl font-semibold text-center mb-2">{project.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-2 border border-gray-300 rounded-lg">
                      <h4 className="text-2xl font-bold text-gray-600">{stat.percentage}</h4>
                      <p className="text-gray-600 text-sm">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Full width */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}