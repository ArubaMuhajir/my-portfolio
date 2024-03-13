import React from 'react'
import { SectionWrapper } from '../hoc'

function Footer() {
  return (

   <section className='flex flex-row space-x-8'>

        <div className='w-40 h-1 sm:w-80  violet-gradient ' />

        <div >
        <h3 className='font-bold text-center '> made with lots of <span className='text-pink-400'>love </span> 
        and <span className='text-green-300'> hope</span> by Muhajir Aruba</h3>
        </div>

        <div className='w-40 h-1 sm:w-80  violet-gradient ' />

   </section>

   
  )

}

export default  SectionWrapper(Footer, '')
