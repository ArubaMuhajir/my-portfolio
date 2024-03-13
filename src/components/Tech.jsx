import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {  motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"

const Tech = () => {
  return (

    <>

    <motion.div variants={textVariant()}>
      <p className={styles.heroSubText}>Frameworks & Technologies  </p>
      <h2 className={styles.sectionHeadText}>Expertise</h2>
    </motion.div>

    <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 mb-8 text-[17px]  max-w-3xl leading-[30px]' >
      i have profound skill and expertise in <span className="text-yellow-300">#html #css #javascript #typescript </span>
      <span className="text-green-500">#react #react-native</span>  <span className="text-red-400">#node-js #mongo-db #tailwind-css</span>
      <span className="text-pink-400"> #next-js #git #react-three</span>        
    </motion.p>


     <div className="flex flex-row mt-10 flex-wrap justify-center gap-10">
         {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        
        </div>
        
      ))}
    </div>
    
    </>

  
  

  )
}

export default SectionWrapper(Tech, 'tech')