import Header from './components/Header'
import Hero from './sections/Hero'
import MainTestimonials from './sections/MainTestimonials'
import Footer from './sections/Footer'
import MeetCommunity from './sections/MeetCommunity'
import UserTestimonials from './components/UserTestimonials'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <MainTestimonials />
        <MeetCommunity />
        <UserTestimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
