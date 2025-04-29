import featureImageRight from '../assets/images/feature_image_right.png'

const Feature = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14183E] mb-6">
              All the cool <span className="relative inline-block">
                features
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-400 -z-10 transform -rotate-1"></div>
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View all the features
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

          <div>
            <img 
              src={featureImageRight} 
              alt="Feature illustration with cards" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature 