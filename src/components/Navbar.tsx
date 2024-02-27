import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { WalletButton } from './solana/solana-provider'
interface Props {}

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                
                   {/* Logo */}
          <div className='flex items-center space-x-2'>
            <Image
              src="/ASKII-logo.jpg"
              width={50}
              height={50}
              alt="Logo"
              quality={100}
              className='rounded-full'
            />
            <Link href="/" className='flex z-40 font-semibold'>
              <span>ASK.</span>
            </Link>
          </div>
          <div className='bg-purple-500 rounded'>
            <WalletButton />
          </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar