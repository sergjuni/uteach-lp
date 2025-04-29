import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header'
import Hero from './sections/Hero'
import MainTestimonials from './sections/MainTestimonials'
import Footer from './sections/Footer'
import MeetCommunity from './sections/MeetCommunity'
import UserTestimonials from './sections/UserTestimonials'
import Feature from './sections/Feature'
import Learning from './sections/Learning'
import Form from './sections/Form'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>UTeach - Connect with International Students & Teachers</title>
          <meta name="description" content="Join UTeach to connect with students and teachers worldwide. Access quality education, interactive learning tools, and a global community of learners." />
          <meta name="keywords" content="online education, teaching platform, international students" />
          <meta property="og:title" content="UTeach - Global Education Platform" />
          <meta property="og:description" content="Connect with students and teachers worldwide" />
        </Helmet>

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
      </div>
    </HelmetProvider>
  )
}

export default App
