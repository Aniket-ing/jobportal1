import React from 'react'
import { RadioGroup } from './ui/radio-group'
import { Label } from './ui/label'
import { RadioGroupItem } from './ui/radio-group'

const filterData =[
    {
        filterType:"Location",
        array:["Dehli NCR","Bangalore","Hyderbad","pune","mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer","FullStack Developer"]
    },
    {
        filterType:"Salary",
        array:["0-40k","42k-1lakh","1lakh to 5lakh"]
    },
]

function FilterCard() {
  return (
    <div className='w-full bg-white p-3 rounded-md'> 
        <h1 className='font-bold text-lg'>Filter jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
            {
                filterData.map((data,index)=>(
                    <div className='font-bold text-lg'>
                        <h1>{data.filterType}</h1>{
                            data.array.map((item,index)=>{
                                    return (
                                        <div className='flex item-center space-x-2 my-2'>
                                            <RadioGroupItem value={item}/>
                                            <Label>{item}</Label>
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
