import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import banner from '../assets/banner.json'
import { Link } from 'react-router-dom'

const Home = () => {
    const [categoryjob, setCategoryjob] = useState([])
    useEffect(()=>{
        fetch("categoryjob.json")
        .then(res=>res.json())
        .then(data=>setCategoryjob(data))
    },[])



  return (
   <>
      <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-2'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          One Step  <br className='hidden md:block' /> Closer To Your <br />
            <span className='inline-block text-yellow-600'>Dream Job</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/error' className='btn md:w-auto md:mr-4'>
              <p>Get Started</p>
          </Link>
          
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={banner} loop={true} />
        </div>
      </div>
    </div>
   {/* job category list */}
    <div className='my-container'>
        <div>
           <h1 className='text-center text-4xl font-bold mt-12 mb-3'>Job <span className='inline-block text-yellow-600'>Category</span> List</h1>
           <p className='text-center text-xl mt-2 mb-10 text-gray-700'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 my-5 mb-5 '>
           {
            categoryjob.map((category) =>(
                <div className='border border-gray-400 rounded-lg p-4 bg-orange-100'> 
                    <img src={category.logo} alt="" />
                    <p className='font-medium mt-2 mb-2'>{category.name}</p>
                    <p>{category.jobs_available}+ available job</p>
                </div>
            ))
           }
        </div>
    </div>

   </>
  )
}

export default Home
