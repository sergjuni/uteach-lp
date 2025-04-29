import { motion } from 'framer-motion';
import smile from '../assets/images/pic_smile.png';

const MainTestimonials = () => {
  return (
    <motion.div 
      className="bg-yellow-400 relative py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <motion.button 
            className="hidden md:flex items-center justify-center w-12 h-12 text-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
            <motion.div 
              className="order-1 mb-8 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-xl">
                <motion.p 
                  className="text-[#14183E] text-2xl md:text-3xl font-light leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. 
                  Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. 
                  Neque suspendisse a habitasse commodo.
                </motion.p>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="text-[#14183E] text-xl font-semibold">Marie Poirot,</h4>
                  <p className="text-[#14183E] font-medium">Bigapp</p>
                </motion.div>
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-12 h-2 bg-[#14183E] rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                  <div className="w-2 h-2 bg-[#14183E]/40 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            <div className="relative order-2">
              <div 
                className="absolute top-1/2 left-1/2 w-[92%] md:w-[85%] h-[130%] bg-[#14183E] rounded-[40px]"
                style={{ 
                  transform: 'translate(-50%, -50%) rotate(-15deg)',
                  zIndex: 1
                }}
              />
              
              <motion.div 
                className="relative" 
                style={{ zIndex: 2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={smile} 
                  alt="smile girl" 
                  className="rounded-2xl w-full"
                />
              </motion.div>
            </div>
          </div>

          <motion.button 
            className="hidden md:flex items-center justify-center w-12 h-12 text-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MainTestimonials; 