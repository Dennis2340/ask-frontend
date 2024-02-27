
import React from 'react'
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

interface Props {}

const SignupForm = () => {

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
                  <Input id="name" placeholder="Username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Email</Label>
                  <Input id="name" type='email' placeholder="Email" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className='bg-gray-400 w-300' size="lg">Submit</Button>
          </CardFooter>
        </Card>
    </div>
     
   </MaxWidthWrapper>
  )
}

export default SignupForm