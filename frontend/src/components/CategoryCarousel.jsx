import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setsearchQuery } from '@/redux/jobSlice'

const category =[
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "graphic Designer",
    "FullStack Developer"
]
function CategoryCarousel() {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const searchJobHandeler=(query)=>{
           dispatch(setsearchQuery(query));
          navigate("/browse");
    }
  return (
    <div>
           <Carousel className='w-full max-w-xl mx-auto my-20'>
              <CarouselContent>
                    {
                    category.map((cat,index)=>( 
                            <CarouselItem className='md:basis-1/2 lg-basis-1/3'>
                               <Button onClick={()=>searchJobHandeler(cat)} variant="outline" className='rounded-full '>{cat}</Button>
                            </CarouselItem>
                    ))
                    }
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
           </Carousel>
    </div>
  )
}

export default CategoryCarousel
