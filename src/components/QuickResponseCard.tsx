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

const QuickResponseCard = () => {
  return (
    <Card className=" md:w-[300px] lg:w-[400px] mb-10">
       <CardHeader className='flex flex-row gap-3'>
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
    </Card>
  )
}

export default QuickResponseCard