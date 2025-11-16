import { Hero } from './components/Hero';
import { TypographyShowcase } from './components/TypographyShowcase';
import { ColorPalette } from './components/ColorPalette';
import { GradientShowcase } from './components/GradientShowcase';
import { ComponentLibrary } from './components/ComponentLibrary';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TypographyShowcase />
      <ColorPalette />
      <GradientShowcase />
      <ComponentLibrary />
      <Footer />
    </div>
  );
}

export default App;
