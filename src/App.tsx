import Header from './components/Header'
import Hero from './sections/Hero'
import ContentCards from './sections/ContentCards'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ContentCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
