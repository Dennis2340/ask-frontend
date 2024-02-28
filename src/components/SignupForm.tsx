"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'
import { WalletButton } from './solana/solana-provider'
import { 
  Card,  
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,} from './ui/card'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import { useWallet } from '@solana/wallet-adapter-react'

import { useMutation } from 'react-query'
import { createUser } from '@/lib/api'
import { useToast } from './ui/use-toast'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'

interface Props {}

type User = {
  userId?: string
  useremail: string
  username:string
  userPublicKey:string
}
const SignupForm = () => {

  const { publicKey } = useWallet()
  const actualPublicKey = publicKey?.toBase58()
  const [userDetails, setUserDetails] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setUserDetails((prevData:any) => ({
        ...prevData,
        userPublicKey: actualPublicKey,
        [name]: value,
    }));
        
  };
  
  const mutation = useMutation(createUser, {
    onError: (error) => {
      toast({
        title: "Sign Up Error",
        description: "Error when signing Up! please, try again later",
      })
    },
    onSuccess: (data) => {
      toast({
        title: "Sign Up Successfully",
        description: "",
      })
    },
    onSettled: () => {
      setIsLoading(false);
      router.push("/main-dashboard")
    }
  })
  //// make api call here //////
  const handleSubmit = async() => {
    try {
      await mutation.mutateAsync(userDetails)
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
   <MaxWidthWrapper>
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='mb-10'>
          <Image
          src="/ASKII-logo.jpg"
          height={150}
          width={150}
          alt="Logo"
          quality={100}
          className='rounded-full'
          />
        
        </div>
        <Card className="w-[350px] mb-10">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Signing Up for the first time enter details.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                  id="name" 
                  name='username'
                  value={userDetails?.username} 
                  placeholder="Username" 
                  onChange={(e:any) => {
                    handleInputChange(e);
                  }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Email</Label>
                  <Input 
                  id="email" 
                  value={userDetails?.useremail} 
                  name='useremail'
                  type='email' 
                  placeholder="Email" 
                  onChange={(e:any) => {
                    handleInputChange(e);
                  }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button onClick={() => handleSubmit()} className='bg-gray-400 w-300' size="lg">Submit</Button>
          </CardFooter>
        </Card>
    </div>
     {userDetails?.username} {userDetails?.useremail} {userDetails?.userPublicKey}
   </MaxWidthWrapper>
  )
}

export default SignupForm