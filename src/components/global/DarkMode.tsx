import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

function DarkMode() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant={'default'} size={'icon'} className="bg-transparent hover:bg-none!" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Moon className="size-6 fill-chart-3 text-transparent scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
        
        <Sun className="absolute size-6 fill-chart-3 text-chart-3 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
    </Button>
  )
}


export default DarkMode