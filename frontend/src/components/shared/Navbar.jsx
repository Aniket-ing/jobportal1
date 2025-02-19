import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() { 
    const {user} =useSelector(store=>store.auth);
  return (
    <div className='bg-white'>
        <div className='flex item-center justify-between mx-auto max-w-7xl h-16'>
            <div>
                 <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex font-medium items-center gap-5'>
                    <li><Link to={"/"}>Home</Link></li> 
                    <li><Link to="/jobs">Job</Link></li> 
                    <li><Link to="/browse">Browse</Link></li> 
                </ul>
                  
                  {
                    !user?(
                        <div className='flex items-center gap-2'>
                            <Link to="/login"><Button variant='outline'>Login</Button></Link>
                            <Link to="/signup"><Button className='bg-[#6A38C2] hover:bg-[#695292]'>Signup</Button></Link> 
                        </div>
                    ):(
                        <Popover >
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage  className="w-12 h-12 rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" /> 
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='w-80 border border-gray-100 rounded-md shadow-xl'>
                            <div>
                                <div className='flex gap-4 space-y-2'>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage  className="w-12 h-12 rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" /> 
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium'>
                                            Aniket mern stack
                                        </h4>
                                        <p className='text-small text-muted-foreground'>LOren ipsum dolor sit amet</p>
                                    </div> 
                                </div>
                                <div className='flex flex-col my-2 text-grey-600'>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <User2/> 
                                        <Button variant='link'><Link to="/profile">view Profile</Link></Button> 
                                    </div>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOut/> 
                                        <Button variant='link'>Logout</Button> 
                                    </div>
     
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    )
                  }
               
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
