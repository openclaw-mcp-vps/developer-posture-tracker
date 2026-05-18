export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Tracking for Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Slouching.<br />
          <span className="text-[#58a6ff]">Your Webcam Has Your Back.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PostureGuard uses your webcam and AI pose detection to monitor your posture in real time, remind you to take breaks, and suggest targeted exercises — so you can code longer without the pain.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📷", title: "Webcam Posture AI", desc: "TensorFlow.js detects your pose live — no data ever leaves your browser." },
            { icon: "⏰", title: "Smart Break Reminders", desc: "Timely nudges based on your actual posture, not just a fixed timer." },
            { icon: "🧘", title: "Exercise Suggestions", desc: "Targeted stretches and micro-exercises tailored to your posture issues." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-xl">
          <span className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro</span>
          <div className="text-5xl font-extrabold text-white mb-1">$7<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6">Everything you need to stay healthy at your desk.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time webcam posture analysis",
              "Smart break & exercise reminders",
              "Advanced posture analytics dashboard",
              "Session history & progress tracking",
              "Privacy-first: all processing on-device"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does PostureGuard send my webcam footage to a server?",
              a: "No. All pose detection runs entirely in your browser using TensorFlow.js. Your video never leaves your device."
            },
            {
              q: "What browsers and devices are supported?",
              a: "Any modern desktop browser with webcam access — Chrome, Firefox, Edge, and Safari. Works best on laptops and desktops."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your billing portal with one click. No questions asked, no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PostureGuard. Built for developers who care about their health.
      </footer>
    </main>
  );
}
