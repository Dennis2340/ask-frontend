import DisplayAnswerComp from '@/components/DisplayAnswerComp'
import DisplayDetailedQuestion from '@/components/DisplayDetailedQuestion'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PostYourAnswerComp from '@/components/PostYourAnswerComp'
import { Button } from '@/components/ui/button'
import React from 'react'

interface Props {}

const Page = () => {
  return (
    <MaxWidthWrapper>
        <div className='flex justify-between mt-3'>
            <h5 className='text-2xl'>Question</h5>
            <Button size='sm' className='bg-gray-300 text-black hover:text-white'>quick response</Button>
        </div>
        <div className='mt-3'>
            <DisplayDetailedQuestion/>
        </div>
        <div className='flex mt-4 space-x-2'>
            <h5 className='text-2xl'>Answers</h5>
            <div className='bg-gray-300 text-black ml-3 mb-5 w-10 h-8 flex justify-center items-center rounded'>
                <p>4</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center mb-[200px] mt-7 h-screen'>
            <DisplayAnswerComp/>
            <DisplayAnswerComp/>
            <DisplayAnswerComp/>
            <DisplayAnswerComp/>
        </div>
        <br/>
        <div className='mt-[200px]'>
         <PostYourAnswerComp/>
        </div>
    </MaxWidthWrapper>
  )
}

export default Page