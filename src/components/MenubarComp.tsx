import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { Book, Home, Menu, Search, Trophy } from 'lucide-react'
interface Props {}

const MenubarComp = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-purple-400'>
           <Menu/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
         <DropdownMenuLabel>Main menu</DropdownMenuLabel>
         <DropdownMenuSeparator/>
         <DropdownMenuGroup>
            <DropdownMenuItem>
                <Home mr-2 w-4 h-4/>
                <span>Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Search/>
                <span>Questions</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Trophy/>
                <span>Leaderboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Book/>
                <span>Top Weekly Answers</span>
            </DropdownMenuItem>
         </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenubarComp