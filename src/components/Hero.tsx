import { Palette } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-signature-gradient animate-gradient"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-strong-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-vanilla-cream-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-strong-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
          <Palette className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
          Brand Style Guide
        </h1>

        <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
          A sophisticated design system featuring custom typography, rich color palettes, and advanced gradient techniques
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-semibold">5 Color Palettes</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-semibold">2 Premium Fonts</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-semibold">Advanced Gradients</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
