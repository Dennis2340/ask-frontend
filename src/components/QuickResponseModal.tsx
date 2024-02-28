import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import DisplayDetailedQuestion from './DisplayDetailedQuestion'
import QuickResponseCard from './QuickResponseCard'

interface Props {}

const QuickResponseModal = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button size='sm' className='bg-gray-300 text-black hover:text-white'>quick response</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader className='flex justify-center'>
              <DialogTitle>Question</DialogTitle>
            </DialogHeader>
            <div>
                <DisplayDetailedQuestion/>
            </div>
            <DialogHeader className='flex justify-center'>
              <DialogTitle >Quick Response</DialogTitle>
            </DialogHeader>
            <div>
                <QuickResponseCard/>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default QuickResponseModal