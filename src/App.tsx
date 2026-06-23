import { Navbar } from './components/navBar.tsx';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Pricing } from './components/Pricing.tsx';
import { ContactForm } from './components/ContactForm.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;