import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

function Filter() {
  return (
    
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="font-bold text-sm cursor-pointer flex items-center gap-2">
            Filter <span className="hidden md:inline">by status</span>
            <span className="text-primary"><ChevronDown /></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Draft</DropdownMenuItem>
          <DropdownMenuItem>Pending</DropdownMenuItem>
          <DropdownMenuItem>Paid</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default Filter