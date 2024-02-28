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
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"


export interface QuestionProps {
    question: {
        userId: string
        questionTitle: string
        questionBody: string
        answersId: string[]
        tags: string[]
    }
}

type QuestionsProps = QuestionProps[]

const QuestionDisplayComp: React.FC<QuestionProps> = ({question}) => {
  return (
            <Card className=" md:w-[300px] lg:w-[400px] mb-10">
                <CardHeader className='flex flex-row gap-3'>
                    <Avatar>
                        <AvatarImage src=''/>
                        <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <h3 className='italic'>{question.questionTitle}</h3>     
                </CardHeader>
                <CardContent>
                  <div className='flex justify-evenly'>
                    {question.tags.map((tag: string, i:number) => (
                        <p key={i}><strong>.{tag}</strong></p>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <div className='flex mb-[-70px] ml-[-10px]'><Timer className='mr-1 w-4 h-4'/> <p className='text-sm'>10min ago</p></div>
                    <Link
                    className={
                        buttonVariants({ size: "lg", className: "mt-5 bg-gray-300 text-black hover:text-white mb-[-5px] mr-[-7px]"})}
                        href="/main-dashboard/:questionId"
                    >
                    Answers
                    </Link>
                </CardFooter>
            </Card>
  )
}

export default QuestionDisplayComp