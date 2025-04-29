import smile from '../assets/images/pic_smile.png';

const MainTestimonials = () => {
  return (
    <div className="bg-yellow-400 relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <button className="hidden md:flex items-center justify-center w-12 h-12 text-gray-800">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
            <div className="order-1 mb-8 md:mb-0">
              <div className="max-w-xl">
                <p className="text-[#14183E] text-2xl md:text-3xl font-light leading-relaxed mb-8">
                  Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. 
                  Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. 
                  Neque suspendisse a habitasse commodo.
                </p>
                <div className="mb-8">
                  <h4 className="text-[#14183E] text-xl font-semibold">Marie Poirot,</h4>
                  <p className="text-[#14183E] font-medium">Bigapp</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-2 bg-[#14183E] rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                </div>
              </div>
            </div>

            <div className="relative order-2">
              <div 
                className="absolute top-1/2 left-1/2 w-[92%] md:w-[85%] h-[130%] bg-[#14183E] rounded-[40px]"
                style={{ 
                  transform: 'translate(-50%, -50%) rotate(-15deg)',
                  zIndex: 1
                }}
              />
              
              <div className="relative" style={{ zIndex: 2 }}>
                <img 
                  src={smile} 
                  alt="smile girl" 
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
          <button className="hidden md:flex items-center justify-center w-12 h-12 text-gray-800">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTestimonials; 