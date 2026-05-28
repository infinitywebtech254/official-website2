import React from "react";
import posts from "./data/posts.json"; // ← import the JSON file

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* FIXED, RESPONSIVE, AND STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-red-600 text-white p-4 flex justify-between items-center shadow-md w-full">
        {/* Left Side: Logo & Text forced into one line */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src="/zetu-logo.jpg"
            alt="Zetu Times Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 object-contain shrink-0"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide whitespace-nowrap m-0">
            Zetu Times
          </h1>
        </div>
        
        {/* Right Side: Responsive Search Bar forced to the far right */}
        <div className="flex items-center justify-end pl-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-1.5 sm:p-2 rounded-md text-black w-28 sm:w-44 md:w-60 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 p-4 flex flex-wrap justify-center gap-3 border-b">
        <a href="/politics" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">Politics</a>
        <a href="/sports" className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Sports</a>
        <a href="/business" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">Business</a>
        <a href="/technology" className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Technology</a>
        <a href="/entertainment" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">Entertainment</a>
        <a href="/lifestyle" className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Lifestyle</a>
      </nav>

      {/* Main Content */}
      <main className="p-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {[
          {
            title: "Parliament Debates Key National Development Bills",
            category: "Politics",
            description: "Lawmakers gather in Newyork to evaluate new regulatory policies aimed at economic reforms.",
            // FIXED: Using a reliable Unsplash link that represents a clean government/politics house architecture
            image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "AFC Leopards Clinch The Cup In Thrilling Football Final",
            category: "Sports",
            description: "The stadium erupted in celebration as the team claimed a spectacular victory in front of thousands of fans.",
            image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Nairobi Tech Hubs Witness Historic Investment Growth",
            category: "Business",
            description: "Local Kenyan tech startups continue to break financial records, drawing major global investments.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Digital Innovators Reshaping East Africa's Future",
            category: "Technology",
            description: "How software developers and engineers are constructing micro-banking systems for remote communities.",
            image: "https://images.unsplash.com/photo-1494599948593-3dafe8338d71?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Top Kenyan Musical Artists Making Global Waves",
            category: "Entertainment",
            description: "From live stages to global charts, creative visionaries are elevating the authentic Kenyan sound internationally.",
            image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Essential Healthy Living Strategies For Busy Nairobians",
            category: "Lifestyle",
            description: "Discover realistic meal prep ideas and workout routines tailored around a hectic city schedule.",
            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60",
          },
        ].map((article, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">{article.category}</span>
                <h2 className="text-xl font-bold mt-2 leading-tight">{article.title}</h2>
                <p className="mt-2 text-gray-600 text-sm">
                  {article.description}
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href={`/${article.category.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-red-600 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>© {new Date().getFullYear()} Zetu Times — News That Speaks to You</p>
      </footer>
    </div>
  );
}

export default App;
