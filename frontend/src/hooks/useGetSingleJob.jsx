import { setSingleJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function useGetSingleJob(jobId) {
    const dispatch =useDispatch();
    const {user}=useSelector(store=>store.auth);
    useEffect(()=>{
        const fetchSingleJobs =async()=>{
          try {
              const res= await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
              if(res.data.success){
                  dispatch(setSingleJobs(res.data.job));
              }
          } catch (error) {
              console.log(error);
          }
        }
        fetchSingleJobs();
    },[jobId,dispatch,user?._id])
}

export default useGetSingleJob;
