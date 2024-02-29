"use client"
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { WalletButton } from './solana/solana-provider'
import MenubarComp from './MenubarComp'
import UserAccountNav from './UserAccountNav'
import { useWallet } from '@solana/wallet-adapter-react'
interface Props {}

const Navbar = () => {
    const {publicKey } = useWallet()
    const actualPublicKey = publicKey?.toBase58()
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
              <div className='sm:hidden'><MenubarComp/></div>
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
              <span className='text-2xl'>ASK.</span>
            </Link>
          </div>
            <div className='flex'>
            <div className='mt-2'>
                 {actualPublicKey ? <UserAccountNav/>:null}
                </div>
              <div className='bg-purple-500 rounded mr-3'>
               <WalletButton />
              </div>
                
              </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar