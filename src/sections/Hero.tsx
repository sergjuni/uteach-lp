import Button from '../components/Button';
import play_icon from '../assets/icons/play_icon.png';
import group_image from '../assets/images/Group 50.png';
import icon_1 from '../assets/icons/icon_1.png'
import icon_2 from '../assets/icons/icon_2.png';
import icon_3 from '../assets/icons/icon_3.png';
import icon_4 from '../assets/icons/icon_4.png';
import icon_5 from '../assets/icons/icon_5.png';

const Hero = () => {
  return (
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
              {/* Main Image with Background Shapes */}
              <div className="relative">
            
                <img 
                  src={group_image} 
                  alt="Teaching Platform" 
                  className="relative z-10 w-full"
                />
              </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 