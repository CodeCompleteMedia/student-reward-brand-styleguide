import { Hero } from './components/Hero';
import { TypographyShowcase } from './components/TypographyShowcase';
import { ColorPalette } from './components/ColorPalette';
import { GradientShowcase } from './components/GradientShowcase';
import { ComponentLibrary } from './components/ComponentLibrary';
import { UIComponentsShowcase } from './components/UIComponentsShowcase';
import { Footer } from './components/Footer';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TypographyShowcase />
      <ColorPalette />
      <GradientShowcase />
      <ComponentLibrary />
      <UIComponentsShowcase />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
