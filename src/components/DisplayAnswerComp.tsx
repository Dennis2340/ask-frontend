import React from 'react'
import { 
    Card,  
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter,} from './ui/card'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { ThumbsUp, Timer } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

interface Props {}

const DisplayAnswerComp = () => {
  return (
    <Card className=" md:w-[300px] lg:w-[400px] mb-10">
       <CardHeader className='flex flex-row gap-3'>
            <Avatar>
                <AvatarImage src=''/>
                <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <h3 className='italic'>This is the answer text</h3>     
        </CardHeader>
        <CardContent>
           <div className='flex'>
           <p>Python</p>
           <p>Python</p>
           <p>Python</p>
           <p>Python</p>
           </div>
        </CardContent>
        <CardFooter className='flex justify-end'>
            <Button className='bg-gray-300 text-black hover:text-white'>
              <div className='flex'>
              <p>4</p>  <ThumbsUp className='h-4 w-4 ml-2'/>
              </div>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default DisplayAnswerComp