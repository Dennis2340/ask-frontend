"use client"
import React, { useRef, useState } from 'react'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { Card, CardContent } from '../../components/ui/card'
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '../../components/ui/button'
import { Plus } from 'lucide-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useToast  } from '../../components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useMutation } from 'react-query'
import { createQuestion } from '../../lib/api'

interface Props {}

type Question = {
    userPublicKey:string
    useremail:string, 
    questionTitle:string, 
    questionBody:string,
    tags:string[]
}

const Page = () => {

    const { publicKey } = useWallet()
    const actualPublicKey = publicKey?.toBase58()
    
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    const router = useRouter()
    
    const [questionDetails, setQuestionDetails] = useState<Question | null>({
        userPublicKey: actualPublicKey ?? '',
        useremail: '',
        questionTitle: '',
        questionBody: '',
        tags: [],
    })

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setQuestionDetails((prevData:any) => ({
          ...prevData,
          userPublicKey: actualPublicKey,
          [name]: value,
      }));
          
    };

    const handleAddTag = () => {
        const tagInput = document.getElementById('tag') as HTMLInputElement;
        const tag = tagInput.value.trim();
        if (tag) {
            setQuestionDetails((prevData:any) => ({
                ...prevData,
                tags: [...prevData.tags, tag],
            }));
            tagInput.value = ''; // Clear input field after adding tag
        }
    };

    const handleRemoveTag = (tag: string) => {
        setQuestionDetails((prevData:any) => ({
            ...prevData,
            tags: prevData.tags.filter((t:any) => t !== tag),
        }));
    };

   const editorRef = useRef<any>(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
       setQuestionDetails((prevData:any) => ({
        ...prevData,
        questionBody: editorRef.current.getContent(),
    }));
     }
   };

    const mutation = useMutation(createQuestion, {
        onError: (error) => {
        toast({
            title: "Create Question Error",
            description: "Error when creating question! please, try again later",
        })
        },
        onSuccess: (data) => {
        toast({
            title: "Question Created Successfully",
            description: "",
        })
        },
        onSettled: () => {
        setIsLoading(false);
        router.push("/main-dashboard")
        }
    })

    const handleSubmit = async() => {
        try {
          await mutation.mutateAsync(questionDetails)
        } catch (error) {
          console.log(error)
        }finally{
          setIsLoading(false)
        }
      }

  return (
    <MaxWidthWrapper> 
        <div className='flex justify-center'>
        <h3 className='text-4xl text-black mt-10 items-center'><strong>Ask a Question</strong></h3>
        </div>
        <Card className='mt-10'>
        <Label className='text-2xl ml-5' htmlFor="title">Title</Label>
           <CardContent>
           <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="title" onChange={handleInputChange} value={questionDetails?.questionTitle} name='questionTitle' placeholder="write your question in a precise format..." />
                </div>
              </div>
            </form>
           </CardContent>
        </Card>
        <div className='mt-10'>
         <Label className="mb-1 text-2xl" htmlFor='body'>Full Context</Label>   
        <Editor
            apiKey='7t3m9mltz12yax7o7t327uq08l27cifwtnk8bbfxw0t4iqi8'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            onChange={log}
            value={questionDetails?.questionBody}
            init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
        </div>
        <div className='mt-7'>
            <Label className='text-2xl'>Tags</Label>
            <div className='flex space-x-4'>
             <Input id="tag" placeholder="eg Python,Javascript,SQL etc..." />
             <Button onClick={handleAddTag} className='bg-slate-300 text-black hover:text-white'><Plus className='w-4 h-4'/> Add</Button>
            </div>
            {questionDetails?.tags.map((tag:string, i:number) => (
               <div key={i} className="bg-gray-200 mt-2 w-auto h-auto rounded-md p-2 inline-block m-1">
                <span className="text-gray-700 h-6 w-200"><strong>{tag}</strong></span>
               </div>
            ))}
        </div>
        <div className='mt-5 mb-5 flex justify-center'>
         <Button onClick={() => handleSubmit} size="lg" className='text-2xl text-black bg-slate-300 w-[300px] hover:text-white'>Submit</Button>
        </div>
        {questionDetails?.questionBody} {questionDetails?.questionTitle} {questionDetails?.userPublicKey} {questionDetails?.tags}
    </MaxWidthWrapper>
  )
}

export default Page