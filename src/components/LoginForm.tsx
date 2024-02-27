
import React from 'react'
import { Button } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'
import { WalletButton } from './solana/solana-provider'

interface Props {}

const LoginForm = () => {
  return (
   <MaxWidthWrapper>
    <div className='flex flex-col justify-center align-items-center'>
      <Button className='bg-gray-400 w-300 max-w-50' size='lg'>Login</Button>
      <WalletButton className='bg-purple-500 gap-y-4 w-500 mt-5'/>
    </div>
     
   </MaxWidthWrapper>
  )
}

export default LoginForm