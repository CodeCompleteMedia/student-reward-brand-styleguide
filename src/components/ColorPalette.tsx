import { Pipette } from 'lucide-react';

interface ColorShade {
  name: string;
  value: string;
  hex: string;
}

interface PaletteProps {
  name: string;
  description: string;
  shades: ColorShade[];
}

function PaletteCard({ name, description, shades }: PaletteProps) {
  return (
    <div className="bg-white rounded-2xl border border-graphite-200 overflow-hidden hover-lift">
      <div className="p-6 border-b border-graphite-200">
        <h3 className="text-2xl font-headline font-bold text-charcoal-900 mb-2">{name}</h3>
        <p className="text-charcoal-600">{description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-11">
        {shades.map((shade) => (
          <div key={shade.value} className="group relative">
            <div
              className="aspect-square cursor-pointer transition-transform hover:scale-110 hover:z-10"
              style={{ backgroundColor: shade.hex }}
            ></div>
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2">
              <span className="text-white text-xs font-bold mb-1">{shade.name}</span>
              <span className="text-white/80 text-xs font-mono">{shade.hex}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorPalette() {
  const palettes: PaletteProps[] = [
    {
      name: 'Vanilla Cream',
      description: 'Warm, sophisticated neutrals with golden undertones',
      shades: [
        { name: '50', value: 'vanilla-cream-50', hex: '#f8f6ed' },
        { name: '100', value: 'vanilla-cream-100', hex: '#f1edda' },
        { name: '200', value: 'vanilla-cream-200', hex: '#e2dcb6' },
        { name: '300', value: 'vanilla-cream-300', hex: '#d4ca91' },
        { name: '400', value: 'vanilla-cream-400', hex: '#c6b86c' },
        { name: '500', value: 'vanilla-cream-500', hex: '#b8a747' },
        { name: '600', value: 'vanilla-cream-600', hex: '#938539' },
        { name: '700', value: 'vanilla-cream-700', hex: '#6e642b' },
        { name: '800', value: 'vanilla-cream-800', hex: '#49431d' },
        { name: '900', value: 'vanilla-cream-900', hex: '#25210e' },
        { name: '950', value: 'vanilla-cream-950', hex: '#1a170a' },
      ],
    },
    {
      name: 'Strong Cyan',
      description: 'Vibrant, energetic blues with tropical freshness',
      shades: [
        { name: '50', value: 'strong-cyan-50', hex: '#ecf8f8' },
        { name: '100', value: 'strong-cyan-100', hex: '#d9f1f2' },
        { name: '200', value: 'strong-cyan-200', hex: '#b4e2e4' },
        { name: '300', value: 'strong-cyan-300', hex: '#8ed4d7' },
        { name: '400', value: 'strong-cyan-400', hex: '#68c5ca' },
        { name: '500', value: 'strong-cyan-500', hex: '#42b7bd' },
        { name: '600', value: 'strong-cyan-600', hex: '#359297' },
        { name: '700', value: 'strong-cyan-700', hex: '#286e71' },
        { name: '800', value: 'strong-cyan-800', hex: '#1b494b' },
        { name: '900', value: 'strong-cyan-900', hex: '#0d2526' },
        { name: '950', value: 'strong-cyan-950', hex: '#091a1a' },
      ],
    },
    {
      name: 'Jet Black',
      description: 'Cool, professional grays with blue undertones',
      shades: [
        { name: '50', value: 'jet-black-50', hex: '#f1f3f4' },
        { name: '100', value: 'jet-black-100', hex: '#e3e7e8' },
        { name: '200', value: 'jet-black-200', hex: '#c7d0d1' },
        { name: '300', value: 'jet-black-300', hex: '#abb8ba' },
        { name: '400', value: 'jet-black-400', hex: '#8fa1a3' },
        { name: '500', value: 'jet-black-500', hex: '#73898c' },
        { name: '600', value: 'jet-black-600', hex: '#5c6e70' },
        { name: '700', value: 'jet-black-700', hex: '#455254' },
        { name: '800', value: 'jet-black-800', hex: '#2e3738' },
        { name: '900', value: 'jet-black-900', hex: '#171b1c' },
        { name: '950', value: 'jet-black-950', hex: '#101314' },
      ],
    },
    {
      name: 'Graphite',
      description: 'Warm, versatile grays with subtle violet hints',
      shades: [
        { name: '50', value: 'graphite-50', hex: '#f3f2f2' },
        { name: '100', value: 'graphite-100', hex: '#e7e4e6' },
        { name: '200', value: 'graphite-200', hex: '#cfc9cc' },
        { name: '300', value: 'graphite-300', hex: '#b6afb3' },
        { name: '400', value: 'graphite-400', hex: '#9e949a' },
        { name: '500', value: 'graphite-500', hex: '#867980' },
        { name: '600', value: 'graphite-600', hex: '#6b6167' },
        { name: '700', value: 'graphite-700', hex: '#50494d' },
        { name: '800', value: 'graphite-800', hex: '#363033' },
        { name: '900', value: 'graphite-900', hex: '#1b181a' },
        { name: '950', value: 'graphite-950', hex: '#131112' },
      ],
    },
    {
      name: 'Charcoal',
      description: 'Deep, sophisticated neutrals with blue-gray balance',
      shades: [
        { name: '50', value: 'charcoal-50', hex: '#f1f1f4' },
        { name: '100', value: 'charcoal-100', hex: '#e2e3e9' },
        { name: '200', value: 'charcoal-200', hex: '#c6c7d2' },
        { name: '300', value: 'charcoal-300', hex: '#a9abbc' },
        { name: '400', value: 'charcoal-400', hex: '#8d8fa5' },
        { name: '500', value: 'charcoal-500', hex: '#70738f' },
        { name: '600', value: 'charcoal-600', hex: '#5a5c72' },
        { name: '700', value: 'charcoal-700', hex: '#434556' },
        { name: '800', value: 'charcoal-800', hex: '#2d2e39' },
        { name: '900', value: 'charcoal-900', hex: '#16171d' },
        { name: '950', value: 'charcoal-950', hex: '#101014' },
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-vanilla-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Pipette className="w-8 h-8 text-strong-cyan-500" />
          <h2 className="text-5xl font-bold text-charcoal-900">Color System</h2>
        </div>

        <div className="space-y-8">
          {palettes.map((palette) => (
            <PaletteCard key={palette.name} {...palette} />
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-graphite-200 hover-lift">
            <div className="w-12 h-12 bg-vanilla-cream-400 rounded-lg mb-4"></div>
            <h3 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Primary Palette</h3>
            <p className="text-charcoal-600">Vanilla Cream and Strong Cyan form the signature brand gradient and primary color identity.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-graphite-200 hover-lift">
            <div className="w-12 h-12 bg-jet-black-600 rounded-lg mb-4"></div>
            <h3 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Neutral Palettes</h3>
            <p className="text-charcoal-600">Three sophisticated gray families provide versatile options for backgrounds, text, and UI elements.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-graphite-200 hover-lift">
            <div className="flex gap-2 mb-4">
              <div className="w-6 h-12 bg-vanilla-cream-300 rounded"></div>
              <div className="w-6 h-12 bg-strong-cyan-400 rounded"></div>
              <div className="w-6 h-12 bg-charcoal-700 rounded"></div>
            </div>
            <h3 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Color Harmony</h3>
            <p className="text-charcoal-600">Each palette includes 11 carefully crafted shades for maximum flexibility and consistency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
