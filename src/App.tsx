import Header from './components/Header'
import Hero from './sections/Hero'
import MainTestimonials from './sections/MainTestimonials'
import Footer from './sections/Footer'
import MeetCommunity from './sections/MeetCommunity'
import UserTestimonials from './components/UserTestimonials'
import Feature from './sections/Feature'
import Learning from './sections/Learning'
import Form from './sections/Form'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <MainTestimonials />
        <MeetCommunity />
        <UserTestimonials />
        <Feature />
        <Learning />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default App
