export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-300/5 blur-[220px]" />
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <img
          src="/logo.png"
          alt="XENOVRA"
          className="w-72 h-72 md:w-96 md:h-96 object-contain"
        />

        <h1 className="mt-8 text-6xl md:text-8xl font-black bg-gradient-to-r from-green-400 via-green-300 to-yellow-300 bg-clip-text text-transparent">
          XENOVRA
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Engineering the Future of AI, Biotechnology and Web3
        </p>

        <p className="mt-6 max-w-4xl text-gray-400 text-lg">
          A next-generation community inspired by artificial intelligence,
          biotechnology, decentralized science and breakthrough innovation.
          Built for dreamers, builders and pioneers shaping tomorrow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition"
          >
            Explore Ecosystem
          </a>

          <a
            href="#roadmap"
            className="px-6 py-3 rounded-xl border border-green-500 hover:bg-green-500/10 transition"
          >
            View Roadmap
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-5xl font-bold text-center text-green-400">
          The Xenovra Vision
        </h2>

        <p className="mt-10 text-center text-gray-400 max-w-4xl mx-auto text-lg">
          The world is entering a new era where biology,
          artificial intelligence and blockchain converge.

          Xenovra was created to unite innovators,
          researchers, builders and visionaries around a
          shared belief:

          The future belongs to those who create it.
        </p>
      </section>

      {/* WHY XENOVRA */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-bold text-center text-green-400">
          Why Xenovra?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              AI-Powered Future
            </h3>

            <p className="mt-4 text-gray-400">
              Inspired by the rapid evolution of artificial intelligence,
              autonomous systems and advanced computation.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              Biotechnology Revolution
            </h3>

            <p className="mt-4 text-gray-400">
              Celebrating innovation in life sciences,
              human advancement and next-generation discovery.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              Decentralized Innovation
            </h3>

            <p className="mt-4 text-gray-400">
              Community-driven principles powered by transparency,
              collaboration and Web3 technologies.
            </p>
          </div>

        </div>
      </section>

      {/* TOKEN INFO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center text-green-400">
          Token Information
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Token Name</p>
            <h3 className="text-2xl font-bold mt-2">
              Xenovra
            </h3>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Symbol</p>
            <h3 className="text-2xl font-bold mt-2">
              XNVA
            </h3>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Network</p>
            <h3 className="text-2xl font-bold mt-2">
              Robinhood
            </h3>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Contract</p>
            <h3 className="text-xl font-bold mt-2 text-green-400">
              Coming Soon
            </h3>
          </div>

        </div>
      </section>

      {/* COMMUNITY */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-5xl font-bold text-green-400">
          Join Early. Build Together.
        </h2>

        <p className="mt-8 text-gray-400 text-lg">
          Every major innovation begins with a small group of believers.

          Xenovra is more than a token.

          It is a growing movement inspired by the future of
          artificial intelligence, biotechnology and decentralized innovation.
        </p>

      </section>

      {/* ROADMAP */}
      <section
        id="roadmap"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-green-400">
          Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-green-400">
              Phase 1
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>✓ Token Launch</li>
              <li>✓ Community Building</li>
              <li>✓ Website Launch</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-green-400">
              Phase 2
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>• Strategic Partnerships</li>
              <li>• Marketing Expansion</li>
              <li>• Community Growth</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-green-400">
              Phase 3
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>• Ecosystem Development</li>
              <li>• Utility Exploration</li>
              <li>• Long-Term Vision</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center">

        <h3 className="text-3xl font-bold text-green-400">
          XENOVRA
        </h3>

        <p className="mt-3 text-gray-500">
          AI • Biotechnology • Decentralized Innovation
        </p>

        <p className="mt-2 text-gray-600 text-sm">
          The future isn't waiting.
        </p>

      </footer>

    </main>
  );
}