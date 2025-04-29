import Col from '../assets/images/Col.png';
import planeIcon from '../assets/icons/plane_icon.png';
import heartIcon from '../assets/icons/heart_icon.png';
import diamondIcon from '../assets/icons/diamond_icon.png';
import hatIcon from '../assets/icons/hat_icon.png';

const MeetCommunity = () => {
  return (
    <section className="pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main content - Two columns */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          {/* Left side - Image Collage */}
          <div className="relative">
            <img 
              src={Col} 
              alt="Collage of international students and teachers" 
              className="w-full rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <div className="flex flex-wrap items-start gap-2 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#14183E] flex-[100%] md:flex-[85%]">
                Meet international students & teachers
              </h2>
              <img 
                src={planeIcon} 
                alt="" 
                className="w-10 h-10 object-contain -mt-3"
              />
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo 
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam 
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, 
              faucibus aenean lorem faucibus integer.
            </p>

            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Explore teachers and students
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Statistics - Full width section */}
      <div className="bg-[#14183E] w-screen relative left-[50%] right-[50%] mx-[-50vw]">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* User Countries */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heartIcon} alt="" className="w-12 h-12" />
                </div>
              </div>
              <div className="text-yellow-400 text-5xl font-bold mb-2">195</div>
              <div className="text-yellow-400">user countries</div>
            </div>

            {/* Valued Teachers */}
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={diamondIcon} alt="" className="w-16 h-16" />
              </div>
              <div className="text-yellow-400 text-5xl font-bold mb-2">1M</div>
              <div className="text-yellow-400">valued teachers</div>
            </div>

            {/* Happy Students */}
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={hatIcon} alt="" className="w-16 h-16" />
              </div>
              <div className="text-yellow-400 text-5xl font-bold mb-2">17M</div>
              <div className="text-yellow-400">happy students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCommunity; 