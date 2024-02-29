import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

interface Props {}

const Banner = () => {
  return (
    <Card className='bg-purple-300 mt-7 h-[200px]'>
        <CardTitle className='mt-4 ml-3'> Ask Learn & Earn</CardTitle>
        <CardContent>

        </CardContent>
        <CardFooter className='flex justify-end'>
           <Link
                className={
                    buttonVariants({ 
                        size: "sm", className: "mt-5 bg-gray-300 justify-end shadow-md mb-[-200px] mr-[-10px] text-black"
                    })}
                href="/ask-question"
                >
                Ask Question
            </Link>
        </CardFooter>
    </Card>
  )
}

export default Banner