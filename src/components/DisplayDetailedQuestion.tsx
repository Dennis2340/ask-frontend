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
import { Timer } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {}

const DisplayDetailedQuestion = () => {
  return (
    <Card className=" md:w-[300px] lg:w-[400px] xl:w-[400px] mb-10">
        <CardHeader className='flex flex-row gap-3'>
            <Avatar>
                <AvatarImage src=''/>
                <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <h3 className='italic'>This is the title</h3>     
        </CardHeader>
        <CardContent>
            <div>This is the body of the card</div>
            <span>Python</span>
            <span>Python</span>
            <span>Python</span>
        </CardContent>
    </Card>
  )
}

export default DisplayDetailedQuestion