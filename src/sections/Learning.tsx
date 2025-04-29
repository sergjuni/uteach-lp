import signUpCardsLeft from '../assets/images/sign_up_cards_left.png'
import signUpCardsRight from '../assets/images/sign_up_cards_right.png'
import Button from '../components/Button'

const Learning = () => {
  return (
    <section className="py-14 bg-yellow-400 overflow-hidden">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Image */}
          <div className="w-full md:w-auto">
            <img 
              src={signUpCardsLeft} 
              alt="Students learning" 
              className="h-auto max-w-xs mx-auto"
            />
          </div>

          {/* Center Content */}
          <div className="text-center">
            <h2 className="text-[32px] md:text-[60px] font-bold text-[#14183E] mb-4 md:mb-6 leading-tight whitespace-nowrap">
              Join a world of learning
            </h2>
            <p className="text-[#14183E] text-base md:text-lg mb-6 md:mb-8">
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              <br />
              Risus elit et fringilla habitant ut facilisi.
            </p>
            <div className="flex justify-center">
              <Button variant="primary">
                Sign Up Now
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-auto">
            <img 
              src={signUpCardsRight} 
              alt="Teachers teaching" 
              className="h-auto max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning 