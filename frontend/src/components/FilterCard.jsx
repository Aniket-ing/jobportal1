import React, { useEffect, useState } from 'react'
import { RadioGroup } from './ui/radio-group'
import { Label } from './ui/label'
import { RadioGroupItem } from './ui/radio-group'
import { useDispatch } from 'react-redux'
import { setsearchQuery } from '@/redux/jobSlice'

const filterData =[
    {
        filterType:"Location",
        array:["Dehli NCR","Bangalore","Hyderabad","pune","mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer","Full Stack Developer","Data Science"]
    },
    {
        filterType:"Salary",
        array:["0-40k","42k-1lakh","1lakh to 5lakh"]
    },
]

function FilterCard() {
    const dispatch =useDispatch();
    const [selectedValue,setSelectedValue]=useState('');
    const changeHandeler =(value)=>{
            setSelectedValue(value);
    }
    useEffect(()=>{
           dispatch(setsearchQuery(selectedValue));
    },[selectedValue])
  return (
    <div className='w-full bg-white p-3 rounded-md'> 
        <h1 className='font-bold text-lg'>Filter jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup value={selectedValue} onValueChange={changeHandeler}>
            {
                filterData.map((data,index)=>(
                    <div className='font-bold text-lg'>
                        <h1>{data.filterType}</h1>{
                            data.array.map((item,idx)=>{
                                const itemId=`id${index}-${idx}`
                                    return (
                                        <div className='flex item-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId}/>
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard
