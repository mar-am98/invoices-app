import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"

function Filter() {
  return (
    <Button variant={'ghost'} className="font-bold text-sm cursor-pointer flex items-center gap-2">
        Filter <span className="hidden md:inline">by status</span>
        <span className="text-primary"><ChevronDown /></span>
    </Button>
  )
}

export default Filter