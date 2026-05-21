import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Services from './sections/Services'
import Bridal from './sections/Bridal'
import Testimonials from './sections/Testimonials'
import WhyUs from './sections/WhyUs'
import Gallery from './sections/Gallery'
import MeetExpert from './sections/MeetExpert'
import BookAppointment from './sections/BookAppointment'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Bridal />
        <Testimonials />
        <WhyUs />
        <Gallery />
        <MeetExpert />
        <BookAppointment />
        <Contact />
        <Footer />
      </main>
      <FloatingActions />
    </div>
  )
}
