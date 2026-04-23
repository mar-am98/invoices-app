import { Outlet } from "react-router-dom";
import { SideNavbar } from "./components/global/SideNavbar";
import { ThemeProvider } from "./components/theme-provider";
import { Sheet } from "./components/ui/sheet";
import InvoiceForm from "./components/invoice-form/InvoiceForm";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col lg:flex-row max-h-screen bg-background relative">
        <SideNavbar />

        <main className="flex-1 flex justify-center">
          <Sheet>
            <div className="w-full h-full overflow-y-scroll">
              <Outlet />
            </div>
            <InvoiceForm />
          </Sheet>
          </main>
        </div>
    </ThemeProvider>
  );
}

export default App;