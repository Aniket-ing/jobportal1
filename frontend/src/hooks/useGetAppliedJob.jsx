import { setallAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJob=()=>{
       const dispatch =useDispatch();

       useEffect(()=>{
           const fetchAppliedJobs =async ()=>{
               try {
                   const res =await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true});
                   if(res.data.success){
                        dispatch(setallAppliedJobs(res.data.application));
                   }
               } catch (error) {
                   console.log(error);
               }
           }
           fetchAppliedJobs();
       },[]); 
}
export default useGetAppliedJob;