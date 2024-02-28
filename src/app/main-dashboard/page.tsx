import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import QuestionDisplayComp from '../../components/QuestionDisplayComp'
import React from 'react'
import { QuestionProps } from '../../components/QuestionDisplayComp'
import Banner from '../../components/Banner'

interface Props {}

type QuestionsProps = {
    
}

const demoQuestions: QuestionProps[] = [
    {
        question: {
            userId: "1234",
            questionTitle: "This is the title 1 of the question",
            questionBody: "This is the body of question 1",
            answersId: ["12345", ""],
            tags: ["python", "code", "love"]
        }
    },
    {
        question: {
            userId: "1234",
            questionTitle: "This is the title 2 of the question",
            questionBody: "This is the body of question 2",
            answersId: ["12345", ""],
            tags: ["python", "code", "love"]
        }
    },
    {
        question: {
            userId: "1234",
            questionTitle: "This is the title 3 of the question",
            questionBody: "This is the body of question 3",
            answersId: ["12345", ""],
            tags: ["python", "code", "love"]
        }
    },
];

const page = () => {

  return (
    <MaxWidthWrapper>
        <Banner/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center mt-7 h-screen'>
            {
                demoQuestions.map(({question}:QuestionProps, i:number) => (
                    <div key={i}>
                        <QuestionDisplayComp question ={question}/>
                    </div>
                ))
            }
        </div>
    </MaxWidthWrapper>
  )
}

export default page