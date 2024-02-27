"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { User } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';

interface Props {}

const UserAccountNav = () => {
    const { publicKey } = useWallet()
    const actualKey = publicKey?.toBase58()
  return (
    <DropdownMenu>
        <DropdownMenuTrigger
        asChild
        className='overflow-visible'
        >
            <Button className='rounded-full w-8 h-8 aspect-square bg-purple-400'>
              <Avatar className='relative w-8 h-8'>
                <AvatarFallback className='bg-purple-300 text-black'>
                    Dk
                </AvatarFallback>
              </Avatar>
           </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white' align='end'>
            <p>username: </p>
            <DropdownMenuItem>
                <User/>
                <span>Dennis S Kamara</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <p>publickey: </p>
            <DropdownMenuItem>
                {actualKey}
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserAccountNav