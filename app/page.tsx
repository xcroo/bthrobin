export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <img
          src="/logo.png"
          alt="BIOTECH"
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
        />

        <h1 className="mt-8 text-6xl md:text-8xl font-extrabold text-green-400">
          BIOTECH
        </h1>

        <p className="mt-4 text-xl text-gray-300 max-w-3xl">
          Where Biotechnology, Artificial Intelligence and Web3 Converge.
        </p>

        <p className="mt-6 text-gray-400 max-w-4xl">
          BIOTECH is a community-driven project inspired by the convergence
          of scientific innovation, artificial intelligence, and decentralized
          technologies. We believe the future belongs to communities that
          embrace research, innovation, and open collaboration.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#about"
            className="px-6 py-3 rounded-xl bg-green-500 text-black font-bold"
          >
            Explore BIOTECH
          </a>

          <a
            href="#roadmap"
            className="px-6 py-3 rounded-xl border border-green-500"
          >
            View Roadmap
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-green-400 text-center">
          Why BIOTECH?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-green-400">
              Biotechnology
            </h3>
            <p className="mt-3 text-gray-400">
              Inspired by scientific progress and the future of life sciences.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-green-400">
              Artificial Intelligence
            </h3>
            <p className="mt-3 text-gray-400">
              Embracing intelligent systems and emerging AI technologies.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-green-400">
              Decentralization
            </h3>
            <p className="mt-3 text-gray-400">
              Building a transparent and community-focused ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Token */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-green-400">
          Token Information
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-gray-400">Token Name</p>
            <h3 className="text-2xl font-bold">BIOTECH</h3>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-gray-400">Symbol</p>
            <h3 className="text-2xl font-bold">BIOTECH</h3>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-gray-400">Type</p>
            <h3 className="text-2xl font-bold">Community</h3>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-gray-400">Focus</p>
            <h3 className="text-2xl font-bold">AI + Bio + Web3</h3>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-400">
            Our Vision
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            To build a global community inspired by the future of
            biotechnology, artificial intelligence, and decentralized
            innovation. BIOTECH represents curiosity, innovation, and
            collaboration for the next generation of technology enthusiasts.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section
        id="roadmap"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center text-green-400">
          Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-green-400">
              Phase 1
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✓ Token Launch</li>
              <li>✓ Community Building</li>
              <li>✓ Website Launch</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-green-400">
              Phase 2
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Marketing Expansion</li>
              <li>• Community Growth</li>
              <li>• Strategic Partnerships</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-bold text-xl text-green-400">
              Phase 3
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Ecosystem Development</li>
              <li>• Utility Exploration</li>
              <li>• Long-Term Sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500">
        © 2026 BIOTECH • Powered by Community Innovation
      </footer>
    </main>
  );
}