
import { Avatar, AvatarImage } from "../ui/avatar";
import DarkMode from "./DarkMode";

export function SideNavbar() {
  return (
    <nav className="bg-sidebar z-50 flex flex-row justify-between items-center lg:flex-col lg:h-screen lg:w-26 lg:rounded-r-[20px] w-full h-18">
      <div className="relative bg-primary flex items-center justify-center lg:w-full lg:h-26 w-18 h-18 rounded-r-2xl overflow-hidden">
        <div className="absolute bottom-0 bg-chart-2 w-full h-1/2 rounded-tl-2xl" />
        <img src="/CombinedShape.svg" alt="Logo" className="z-10 w-7 h-7 lg:w-10 lg:h-10" />
      </div>

      <div className="flex flex-row items-center lg:flex-col lg:w-full">
        <div className="px-8 lg:py-8 border-r lg:border-r-0 lg:border-b border-muted-foreground">
          <DarkMode />
        </div>
        <Avatar className="w-8 h-8 mx-6 lg:my-6 lg:w-10 lg:h-10">
          <AvatarImage src="profileImg.jpeg"/>
        </Avatar>
      </div>
    </nav>
  );
}