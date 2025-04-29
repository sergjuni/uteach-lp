import { motion } from 'framer-motion';
import signUpCardsLeft from '../assets/images/sign_up_cards_left.png'
import signUpCardsRight from '../assets/images/sign_up_cards_right.png'
import Button from '../components/Button'

const Learning = () => {
  return (
    <motion.section 
      className="py-14 bg-yellow-400 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="w-full md:w-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img 
              src={signUpCardsLeft} 
              alt="Students learning" 
              className="h-auto max-w-xs mx-auto"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-[32px] md:text-[60px] font-bold text-[#14183E] mb-4 md:mb-6 leading-tight whitespace-nowrap"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Join a world of learning
            </motion.h2>
            <motion.p 
              className="text-[#14183E] text-base md:text-lg mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              <br />
              Risus elit et fringilla habitant ut facilisi.
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button variant="primary">
                Sign Up Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-auto"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img 
              src={signUpCardsRight} 
              alt="Teachers teaching" 
              className="h-auto max-w-xs mx-auto"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Learning 