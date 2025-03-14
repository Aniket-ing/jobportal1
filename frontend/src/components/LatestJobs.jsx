import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 import { motion } from 'framer-motion';
function LatestJobs() {
  const {allJobs}=useSelector(store=>store.job);
  const navigate =useNavigate();
  return (
    <div className='max-w-7xl mx-8 my-20'>
         <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span>Job Openings </h1>
         <div className='grid grid-cols-3 gap-4 my-5'>
            {
               allJobs.length<=0?<span>NO JOB AVAILABLE</span> :
               allJobs?.slice(0,6).map((job)=>(
               <motion.div 
              initial={{opacity:0,x:100}}
               animate={{opacity:1,x:0}}
               exit={{opacity:0,x:-100}}
               transition={{duration:0.3}}
               >

                   <LatestJobCards key={job._id} job={job}/>
               </motion.div>))
            }
         </div> 
    </div>
  )
}

export default LatestJobs
