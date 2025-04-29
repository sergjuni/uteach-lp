import Button from '../components/Button';
import play_icon from '../assets/icons/play_icon.png';
import group_image from '../assets/images/Group 50.png';
import icon_1 from '../assets/icons/icon_1.png'
import icon_2 from '../assets/icons/icon_2.png';
import icon_3 from '../assets/icons/icon_3.png';
import icon_4 from '../assets/icons/icon_4.png';
import icon_5 from '../assets/icons/icon_5.png';
import desktop from '../assets/images/Desktop.png';
import blob from '../assets/images/Blob.png';

const Hero = () => {
  return (
    <>
      {/* First Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-6">
                <span className="text-orange-500">Teach</span> students worldwide
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Amet nunc diam orci duis ut sit diam arcu, nec.
                Eleifend proin massa tincidunt viverra lectus pulvinar.
                Nunc ipsum est pellentesque turpis ultricies.
              </p>
              <div className="flex gap-4 mb-12">
                <Button variant="primary">Sign Up Now</Button>
                <Button 
                  variant="icon_button" 
                  icon={play_icon}
                  className="items-center"
                >
                  View Demo
                </Button>
              </div>

              {/* Trusted By Section */}
              <div>
                <div className="flex items-center gap-8">
                  <p className="text-gray-600">
                    Trusted by
                    leading companies
                  </p>
                  <div className="flex gap-6 items-center">
                    <img src={icon_1} alt="Company 1" className="h-7" />
                    <img src={icon_2} alt="Company 2" className="h-7" />
                    <img src={icon_3} alt="Company 3" className="h-7" />
                    <img src={icon_4} alt="Company 4" className="h-7" />
                    <img src={icon_5} alt="Company 5" className="h-7" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content with Image and Chat Bubbles */}
            <div className="flex-1 relative">
              <div className="relative">
                {/* Chat Bubbles */}
                <div className="absolute -top-8 right-0 bg-white rounded-lg p-3 shadow-lg z-10">
                  Nunc, at libero neque
                </div>
                <div className="absolute top-16 right-12 bg-white rounded-lg p-3 shadow-lg z-10">
                  Viverra sed
                </div>
                <div className="absolute top-32 left-0 bg-[#0F172A] text-white rounded-lg p-3 shadow-lg z-10">
                  Turpis platea nunc mattis
                </div>
                <div className="absolute bottom-16 left-8 bg-[#0F172A] text-white rounded-lg p-3 shadow-lg z-10">
                  Vitae viverra ut non
                </div>

                {/* Main Image with Background Shapes */}
                <div className="relative">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full" />
                  <img 
                    src={group_image} 
                    alt="Teaching Platform" 
                    className="relative z-10 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-10">
                An all-in-one app<br />
                that makes it easier
              </h2>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Est et in pharetra magna adipiscing ornare aliquam.</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Tellus arcu sed consequat ac velit ut eu blandit.</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ullamcorper ornare in et egestas dolor orci.</span>
                </li>
              </ul>

              <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700">
                Find more about the app
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                {/* Video Preview with Background */}
                <div className="relative">
                  {/* Orange Blob Background */}
                  <div className="absolute -top-20 -left-20 md:-top-32 md:-left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] z-0">
                    <img 
                      src={blob} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Desktop Image with Play Button */}
                  <div className="relative z-10 rounded-xl overflow-hidden">
                    <img 
                      src={desktop} 
                      alt="App Demo" 
                      className="w-full rounded-xl"
                    />
                    
                  </div>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 -mt-16 md:-mt-32">
                  {/* Featured Card */}
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <span className="text-purple-600 bg-purple-50 text-sm font-medium px-3 py-1 rounded-md">Featured</span>
                    <h3 className="font-semibold mt-2 text-base">The map of mathematics</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      Egestas elit dui scelerisque et eu purus aliquam vitae habitasse.
                    </p>
                    <button className="text-blue-600 text-sm font-medium mt-4 hover:text-blue-700">
                      Take Lesson
                    </button>
                  </div>

                  {/* Popular Card */}
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <span className="text-blue-600 bg-blue-50 text-sm font-medium px-3 py-1 rounded-md">Popular</span>
                    <h3 className="font-semibold mt-2 text-base">Design for how people think</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      Aliquam ut euismod condimentum elementum ultricies volupat sit non.
                    </p>
                    <button className="text-blue-600 text-sm font-medium mt-4 hover:text-blue-700">
                      Take Lesson
                    </button>
                  </div>

                  {/* New Card */}
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <span className="text-green-600 bg-green-50 text-sm font-medium px-3 py-1 rounded-md">New</span>
                    <h3 className="font-semibold mt-2 text-base whitespace-normal">
                      International & commercial law
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      Molestie integer eu arcu, mauris bibendum nunc imperdiet dui.
                    </p>
                    <button className="text-blue-600 text-sm font-medium mt-4 hover:text-blue-700">
                      Take Lesson
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 