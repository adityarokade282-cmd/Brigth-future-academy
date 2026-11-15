import { About } from '@/components/About';
import { Admission } from '@/components/Admission';
import { Classes } from '@/components/Classes';
import { Contact } from '@/components/Contact';
import { Courses } from '@/components/Courses';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Results } from '@/components/Results';
import { Teachers } from '@/components/Teachers';
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Classes />
        <Teachers />
        <Results />
        <Admission />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
