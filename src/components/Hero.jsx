import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { aruba, muhajir, aruba02 } from '../assets';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex flex-col'>
          <h1 className={styles.heroHeadText}>Hi, I'm  <span className='text-[#915eff]'>Muhajir </span></h1>
          <p className={styles.heroSubText}>
            I'm a developer based in Lusaka. <span className='hidden sm:block'> I develop User Interfaces, Web applications, and Mobile applications,</span>
          </p>
        </div>
        <div className='flex-grow'></div>
        <div className='w-[250px] h-[400px] flex justify-end m-3'>
          <Carousel
            autoPlay infiniteLoop showStatus={false}
            showThumbs={false} showIndicators={false} interval={3000}
          >
            <div>
              <img
                loading='lazy'
                src={aruba}
                alt=""
                className='black-gradient w-25 h-50 rounded-4xl flex justify-center items-center cursor-pointer'
              />
            </div>
            <div>
              <img
                loading='lazy'
                src={muhajir}
                alt=""
                className='black-gradient w-25 h-50 rounded-4xl flex justify-center items-center cursor-pointer'
              />
            </div>
            <div>
              <img
                loading='lazy'
                src={aruba02}
                alt=""
                className='black-gradient w-20 h-45 rounded-4xl flex justify-center items-center cursor-pointer'
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Adjust the margin-top value based on your layout */}
      <ComputersCanvas className='absolute top-0 left-0 mt-[120px]' />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='  w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
