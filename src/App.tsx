import Header from './components/Header'
import Hero from './sections/Hero'
import ContentCards from './sections/ContentCards'
import Footer from './sections/Footer'
import Testimonials from './sections/Testimonials'
import MeetCommunity from './sections/MeetCommunity'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <MeetCommunity />
        <ContentCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
