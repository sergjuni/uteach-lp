import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">
              Teach students worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              An all-in-one app that connects you with students across the globe. Share your knowledge and grow your teaching business.
            </p>
            <div className="flex gap-4">
              <Button>Start Teaching</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="/hero-image.png" 
              alt="Teaching Platform" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 