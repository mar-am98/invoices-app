import { SideNavbar } from "./components/global/SideNavbar";
import Filter from "./components/global/Filter";
import AddNewBtn from "./components/global/AddNewBtn";

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      <SideNavbar />

      <main className="flex-1 flex justify-center py-8 px-6 lg:py-16">
        <div className="w-full max-w-183 mx-auto">
          <header className="flex justify-between items-center mb-10 lg:mb-16">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-sidebar-foreground">
                Invoices
              </h1>
              <p className="text-chart-4 text-sm">
                <span className="hidden md:inline">There are 7 total</span> 7 invoices
              </p>
            </div>

            <div className="flex items-center gap-4 lg:gap-10">
              <Filter />
              <AddNewBtn />
            </div>
          </header>
        </div>
      </main>
    </div>
  );
}

export default App;