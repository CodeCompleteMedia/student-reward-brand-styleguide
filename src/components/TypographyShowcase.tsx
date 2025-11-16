import { Type } from 'lucide-react';

export function TypographyShowcase() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Type className="w-8 h-8 text-strong-cyan-500" />
          <h2 className="text-5xl font-bold text-charcoal-900">Typography System</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-strong-cyan-600 uppercase tracking-wider mb-4">Headline Font</h3>
              <div className="p-8 bg-gradient-to-br from-vanilla-cream-50 to-strong-cyan-50 rounded-2xl border border-vanilla-cream-200">
                <p className="text-6xl font-headline font-bold text-charcoal-900 mb-2">Rokkitt</p>
                <p className="text-charcoal-600 font-body">Serif • Google Fonts • Weights: 300-900</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-charcoal-800">Headline Weights</h4>
              <div className="space-y-3">
                <div className="p-4 bg-vanilla-cream-50 rounded-lg">
                  <p className="text-3xl font-headline font-light">Light 300</p>
                </div>
                <div className="p-4 bg-vanilla-cream-50 rounded-lg">
                  <p className="text-3xl font-headline font-normal">Regular 400</p>
                </div>
                <div className="p-4 bg-vanilla-cream-50 rounded-lg">
                  <p className="text-3xl font-headline font-semibold">Semibold 600</p>
                </div>
                <div className="p-4 bg-vanilla-cream-50 rounded-lg">
                  <p className="text-3xl font-headline font-bold">Bold 700</p>
                </div>
                <div className="p-4 bg-vanilla-cream-50 rounded-lg">
                  <p className="text-3xl font-headline font-extrabold">Extrabold 800</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-strong-cyan-600 uppercase tracking-wider mb-4">Body Font</h3>
              <div className="p-8 bg-gradient-to-br from-strong-cyan-50 to-vanilla-cream-50 rounded-2xl border border-strong-cyan-200">
                <p className="text-6xl font-body font-bold text-charcoal-900 mb-2">Nunito Sans</p>
                <p className="text-charcoal-600 font-body">Sans-serif • Google Fonts • Weights: 300-800</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-charcoal-800">Body Weights</h4>
              <div className="space-y-3">
                <div className="p-4 bg-strong-cyan-50 rounded-lg">
                  <p className="text-2xl font-body font-light">Light 300</p>
                </div>
                <div className="p-4 bg-strong-cyan-50 rounded-lg">
                  <p className="text-2xl font-body font-normal">Regular 400</p>
                </div>
                <div className="p-4 bg-strong-cyan-50 rounded-lg">
                  <p className="text-2xl font-body font-semibold">Semibold 600</p>
                </div>
                <div className="p-4 bg-strong-cyan-50 rounded-lg">
                  <p className="text-2xl font-body font-bold">Bold 700</p>
                </div>
                <div className="p-4 bg-strong-cyan-50 rounded-lg">
                  <p className="text-2xl font-body font-extrabold">Extrabold 800</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-jet-black-900 rounded-3xl">
          <h3 className="text-sm font-bold text-strong-cyan-400 uppercase tracking-wider mb-6">Type Scale & Hierarchy</h3>
          <div className="space-y-6">
            <h1 className="text-6xl font-headline font-bold text-white">Heading 1 - Display</h1>
            <h2 className="text-5xl font-headline font-bold text-white/95">Heading 2 - Page Title</h2>
            <h3 className="text-4xl font-headline font-semibold text-white/90">Heading 3 - Section</h3>
            <h4 className="text-3xl font-headline font-semibold text-white/85">Heading 4 - Subsection</h4>
            <p className="text-xl font-body text-white/80 leading-relaxed max-w-4xl">
              Body text uses Nunito Sans for optimal readability. This versatile sans-serif font pairs beautifully with Rokkitt headlines,
              creating a sophisticated typographic hierarchy that guides the reader through the content with clarity and elegance.
            </p>
            <p className="text-base font-body text-white/70 leading-relaxed max-w-4xl">
              Secondary body text can be used for supporting content, captions, or less prominent information.
              The generous line height of 150% ensures excellent readability across all device sizes.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 border-2 border-vanilla-cream-300 rounded-2xl hover-lift">
            <h3 className="text-4xl font-headline font-bold gradient-text mb-4">Gradient Text Effect</h3>
            <p className="text-charcoal-700 leading-relaxed">
              Headlines can feature the signature gradient applied as a text fill, creating stunning visual impact
              while maintaining perfect readability.
            </p>
          </div>

          <div className="p-8 bg-signature-gradient rounded-2xl hover-lift">
            <h3 className="text-4xl font-headline font-bold text-white mb-4">White on Gradient</h3>
            <p className="text-white/90 leading-relaxed">
              Alternatively, white typography works beautifully against the gradient background,
              providing excellent contrast and contemporary aesthetic appeal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
