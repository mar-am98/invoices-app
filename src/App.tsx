import { Outlet } from "react-router-dom";
import { SideNavbar } from "./components/global/SideNavbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col lg:flex-row min-h-screen bg-background">
        <SideNavbar />

        <main className="flex-1 flex justify-center py-8 px-6 lg:py-16">
          <div className="w-full max-w-183 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;