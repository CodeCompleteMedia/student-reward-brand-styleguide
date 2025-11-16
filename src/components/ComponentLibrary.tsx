import { Package, Check, AlertCircle, Info } from 'lucide-react';

export function ComponentLibrary() {
  return (
    <section className="py-32 bg-gradient-to-b from-vanilla-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Package className="w-8 h-8 text-strong-cyan-500" />
          <h2 className="text-5xl font-bold text-charcoal-900">Component Library</h2>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-charcoal-900 mb-8">Cards</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-graphite-200 hover-lift">
              <div className="h-48 bg-signature-gradient"></div>
              <div className="p-6">
                <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Gradient Header Card</h4>
                <p className="text-charcoal-600">
                  Perfect for featured content with visual emphasis and clear hierarchy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-graphite-200 hover-lift">
              <div className="w-12 h-12 bg-strong-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-strong-cyan-600" />
              </div>
              <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Icon Card</h4>
              <p className="text-charcoal-600">
                Clean and modern with icon emphasis for feature displays.
              </p>
            </div>

            <div className="bg-gradient-to-br from-vanilla-cream-100 to-strong-cyan-100 rounded-2xl p-6 hover-lift">
              <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Gradient Background</h4>
              <p className="text-charcoal-700">
                Subtle gradient backgrounds add depth while maintaining readability.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-charcoal-900 mb-8">Form Elements</h3>
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl p-8 border border-graphite-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Text Input</label>
                  <input
                    type="text"
                    placeholder="Enter your text"
                    className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Email Input</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Textarea</label>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Select Dropdown</label>
                  <select className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors">
                    <option>Choose an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 text-strong-cyan-500 border-graphite-300 rounded focus:ring-strong-cyan-500"
                  />
                  <label htmlFor="terms" className="text-charcoal-700">
                    I agree to the terms and conditions
                  </label>
                </div>

                <button className="w-full px-8 py-4 bg-signature-gradient text-white font-bold rounded-lg hover-lift">
                  Submit Form
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-charcoal-900 mb-8">Alert Messages</h3>
          <div className="space-y-4 max-w-3xl">
            <div className="p-4 bg-strong-cyan-50 border-l-4 border-strong-cyan-500 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-strong-cyan-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-strong-cyan-900 mb-1">Information</h4>
                <p className="text-strong-cyan-800">This is an informational message using the cyan palette for emphasis.</p>
              </div>
            </div>

            <div className="p-4 bg-vanilla-cream-50 border-l-4 border-vanilla-cream-600 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-vanilla-cream-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-vanilla-cream-900 mb-1">Warning</h4>
                <p className="text-vanilla-cream-800">This is a warning message using the vanilla cream palette for attention.</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-vanilla-cream-50 to-strong-cyan-50 border-l-4 border-signature-gradient rounded-lg flex items-start gap-3">
              <Check className="w-5 h-5 text-strong-cyan-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-charcoal-900 mb-1">Success</h4>
                <p className="text-charcoal-700">This is a success message with gradient background for celebration.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-headline font-semibold text-charcoal-900 mb-8">Navigation</h3>
          <div className="space-y-6">
            <nav className="bg-white rounded-2xl p-4 border border-graphite-200 flex flex-wrap gap-2">
              <a href="#" className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg">
                Home
              </a>
              <a href="#" className="px-6 py-3 text-charcoal-700 hover:bg-vanilla-cream-100 rounded-lg transition-colors">
                About
              </a>
              <a href="#" className="px-6 py-3 text-charcoal-700 hover:bg-vanilla-cream-100 rounded-lg transition-colors">
                Services
              </a>
              <a href="#" className="px-6 py-3 text-charcoal-700 hover:bg-vanilla-cream-100 rounded-lg transition-colors">
                Portfolio
              </a>
              <a href="#" className="px-6 py-3 text-charcoal-700 hover:bg-vanilla-cream-100 rounded-lg transition-colors">
                Contact
              </a>
            </nav>

            <nav className="bg-charcoal-900 rounded-2xl p-4 flex flex-wrap gap-2">
              <a href="#" className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg">
                Home
              </a>
              <a href="#" className="px-6 py-3 text-white hover:bg-charcoal-800 rounded-lg transition-colors">
                About
              </a>
              <a href="#" className="px-6 py-3 text-white hover:bg-charcoal-800 rounded-lg transition-colors">
                Services
              </a>
              <a href="#" className="px-6 py-3 text-white hover:bg-charcoal-800 rounded-lg transition-colors">
                Portfolio
              </a>
              <a href="#" className="px-6 py-3 text-white hover:bg-charcoal-800 rounded-lg transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
