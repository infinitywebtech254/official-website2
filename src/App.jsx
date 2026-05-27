import React from "react";
import posts from "./data/posts.json"; // ← import the JSON file

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-red-600 text-white p-5 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="/zetu-logo.jpg"
            alt="Zetu Times Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl font-bold tracking-wide">Zetu Times</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md text-black w-60 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 p-4 flex flex-wrap justify-center gap-3 border-b">
        <a
          href="/politics"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Politics
        </a>
        <a
          href="/sports"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Sports
        </a>
        <a
          href="/business"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Business
        </a>
        <a
          href="/technology"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Technology
        </a>
        <a
          href="/entertainment"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Entertainment
        </a>
        <a
          href="/lifestyle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Lifestyle
        </a>
      </nav>

      {/* Main Content */}
      <main className="p-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {[
          {
            title: "Government launches new policy reforms",
            category: "Politics",
            image:
              "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "AFC Leopards clinch the cup in thrilling final",
            category: "Sports",
            image:
              "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Kenyan startups see growth in 2025",
            category: "Business",
            image:
              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Tech innovators shaping the digital future",
            category: "Technology",
            image:
              "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Top Kenyan artists making global headlines",
            category: "Entertainment",
            image:
              "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=800&q=60",
          },
          {
            title: "Healthy living tips for busy Nairobians",
            category: "Lifestyle",
            image:
              "https://images.unsplash.com/photo-1494599948593-3dafe8338d71?auto=format&fit=crop&w=800&q=60",
          },
        ].map((article, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-gray-500">{article.category}</span>
              <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
              <p className="mt-2 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum.
              </p>
              <a
                href={`/${article.category.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-red-600 hover:underline"
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
