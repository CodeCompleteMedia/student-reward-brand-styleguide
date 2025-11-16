import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-headline font-bold gradient-text mb-4">
            Brand Style Guide
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            A comprehensive design system featuring sophisticated typography, rich color palettes,
            and advanced gradient techniques for modern digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-headline font-bold text-white mb-2">5</div>
            <div className="text-white/60">Color Palettes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-bold text-white mb-2">2</div>
            <div className="text-white/60">Premium Fonts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-bold text-white mb-2">55</div>
            <div className="text-white/60">Color Shades</div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 flex items-center justify-center gap-2">
            Designed with <Heart className="w-4 h-4 text-strong-cyan-400 fill-strong-cyan-400" /> for beautiful brands
          </p>
        </div>
      </div>
    </footer>
  );
}
