import { Sparkles } from 'lucide-react';

export function GradientShowcase() {
  return (
    <section className="py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Sparkles className="w-8 h-8 text-strong-cyan-400" />
          <h2 className="text-5xl font-bold text-white">Gradient Applications</h2>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-white mb-8">Signature Gradient Variations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video bg-signature-gradient rounded-2xl flex items-center justify-center hover-lift">
              <span className="text-white font-bold text-lg">Linear 135°</span>
            </div>

            <div className="aspect-video bg-signature-gradient-radial rounded-2xl flex items-center justify-center hover-lift">
              <span className="text-white font-bold text-lg">Radial</span>
            </div>

            <div className="aspect-video bg-signature-gradient-mesh rounded-2xl flex items-center justify-center hover-lift">
              <span className="text-white font-bold text-lg">Mesh</span>
            </div>

            <div className="aspect-video rounded-2xl flex items-center justify-center hover-lift" style={{
              background: 'linear-gradient(45deg, #f1edda 0%, #68c5ca 100%)'
            }}>
              <span className="text-white font-bold text-lg">Linear 45°</span>
            </div>

            <div className="aspect-video rounded-2xl flex items-center justify-center hover-lift animate-gradient" style={{
              background: 'linear-gradient(270deg, #f1edda, #68c5ca, #42b7bd, #f1edda)'
            }}>
              <span className="text-white font-bold text-lg">Animated</span>
            </div>

            <div className="aspect-video gradient-mesh rounded-2xl flex items-center justify-center hover-lift">
              <span className="text-white font-bold text-lg">Multi-Point</span>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-white mb-8">Gradient Text Effects</h3>
          <div className="space-y-6">
            <div className="p-12 bg-white rounded-2xl">
              <h4 className="text-7xl font-headline font-bold gradient-text">
                Beautiful Gradient Typography
              </h4>
            </div>

            <div className="p-12 bg-charcoal-800 rounded-2xl">
              <h4 className="text-7xl font-headline font-bold gradient-text-reverse">
                Reversed Gradient Flow
              </h4>
            </div>

            <div className="p-12 bg-gradient-to-br from-vanilla-cream-100 to-strong-cyan-100 rounded-2xl">
              <h4 className="text-6xl font-headline font-bold text-charcoal-900">
                Gradient Background
              </h4>
              <p className="text-xl text-charcoal-700 mt-4 max-w-3xl">
                Typography can sit elegantly on top of subtle gradient backgrounds, creating depth and visual interest
                while maintaining excellent readability.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-white mb-8">Gradient Borders & Effects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="gradient-border hover-lift">
              <div className="p-8">
                <h4 className="text-2xl font-headline font-bold text-charcoal-900 mb-3">Gradient Border</h4>
                <p className="text-charcoal-700">
                  Sophisticated border effect using the signature gradient creates visual emphasis without overwhelming the content.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-white rounded-2xl hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-signature-gradient opacity-10"></div>
              <div className="relative">
                <h4 className="text-2xl font-headline font-bold text-charcoal-900 mb-3">Gradient Overlay</h4>
                <p className="text-charcoal-700">
                  Subtle gradient overlays add dimension and visual richness while preserving content legibility and focus.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-white rounded-2xl hover-lift overflow-hidden group">
              <div className="absolute inset-0 bg-signature-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative group-hover:text-white transition-colors duration-500">
                <h4 className="text-2xl font-headline font-bold mb-3">Hover Gradient</h4>
                <p>
                  Interactive gradient effects respond to user interactions, creating engaging and dynamic experiences.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-charcoal-800 rounded-2xl hover-lift overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-signature-gradient"></div>
              <div className="relative">
                <h4 className="text-2xl font-headline font-bold text-white mb-3">Accent Line</h4>
                <p className="text-white/80">
                  Gradient accent lines provide subtle visual anchors and help establish hierarchy in complex layouts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-headline font-semibold text-white mb-8">Button Variations</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-signature-gradient text-white font-bold rounded-full hover-lift">
              Primary Button
            </button>

            <button className="px-8 py-4 bg-white text-charcoal-900 font-bold rounded-full hover-lift relative overflow-hidden group">
              <span className="relative z-10">Secondary Button</span>
              <div className="absolute inset-0 bg-signature-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                Secondary Button
              </span>
            </button>

            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-charcoal-900 transition-all hover-lift">
              Outline Button
            </button>

            <div className="gradient-border">
              <button className="px-8 py-4 font-bold text-charcoal-900 hover-lift">
                Gradient Border Button
              </button>
            </div>

            <button className="px-8 py-4 bg-strong-cyan-500 text-white font-bold rounded-full hover:bg-strong-cyan-600 transition-colors hover-lift">
              Solid Color Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
