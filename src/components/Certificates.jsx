import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import {  motion } from 'framer-motion'
import { styles } from '../styles'
import { certificates, } from '../constants'
import { fadeIn, textVariant, } from '../utils/motion'


const CertificateCard = ( {index, name, description,  image, }) => {
 return (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className='bg-tertiary  rounded-2xl sm:w-[360px] w-full'>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450
    }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'>

      <motion.img
        whileHover={{scale: 1.5 }}
        className='relative w-full h-[230px]  object-cover rounded-2xl'
         src={image}
         alt={name}
         />
       
     </Tilt>

      <div>
        <h3 className='text-white p-2 font-semibold text-[24px]'>{name}</h3>
        <p className='mt-2 p-2 text-secondary text-[14px]'>{description}</p>
      </div>

  
    
  </motion.div>
 )
}


const Certificates = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <p className={styles.heroSubText}>My Certificates</p>
      <h2 className={styles.sectionHeadText}>Qualifications</h2>
    </motion.div>
    
    <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} 
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] ' >
         The Certificates below are a testament to my Web and Mobile app development skills. I enrolled in the Google
         Developer Programme and underwent detailed training in various aspects of web and mobile app development. 
         I also participated in various Hackathons which enabled me to enhance my 'collegue-cooperation' skills    
        </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {certificates.map((certificate, index) => (
        <CertificateCard key={`project-${index}`}
        index={index} {...certificate}  
        
        />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(Certificates, 'certificates');