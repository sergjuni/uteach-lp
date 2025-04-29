import { motion } from 'framer-motion';
import Col from '../assets/images/Col.png';
import planeIcon from '../assets/icons/plane_icon.png';
import heartIcon from '../assets/icons/heart_icon.png';
import diamondIcon from '../assets/icons/diamond_icon.png';
import hatIcon from '../assets/icons/hat_icon.png';

const MeetCommunity = () => {
  return (
    <section className="pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src={Col} 
              alt="Collage of international students and teachers" 
              className="w-full rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-start gap-2 mb-6 relative">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-[#14183E] flex-[100%] md:flex-[85%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Meet <span className="relative">international<img 
                  src={planeIcon} 
                  alt="" 
                  className="w-10 h-10 md:w-15 md:h-15 absolute md:-top-10 -top-7 md:left-[201px] left-[155px]"
                /></span><br />students & teachers
              </motion.h2>
            </div>

            <motion.p 
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo 
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam 
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, 
              faucibus aenean lorem faucibus integer.
            </motion.p>

            <motion.a 
              href="#" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 10 }}
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
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="bg-[#14183E] w-screen relative left-[50%] right-[50%] mx-[-50vw]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: heartIcon, number: "195", text: "user countries" },
              { icon: diamondIcon, number: "1M", text: "valued teachers" },
              { icon: hatIcon, number: "17M", text: "happy students" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`${index === 0 ? 'bg-yellow-400 rounded-full' : ''} w-16 h-16 flex items-center justify-center`}>
                    <img src={item.icon} alt="" className={`${index === 0 ? 'w-12 h-12' : 'w-16 h-16'}`} />
                  </div>
                </motion.div>
                <motion.div 
                  className="text-yellow-400 text-5xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 * (index + 1) }}
                >
                  {item.number}
                </motion.div>
                <motion.div 
                  className="text-yellow-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 * (index + 1) }}
                >
                  {item.text}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MeetCommunity; 