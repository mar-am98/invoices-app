import AddNewBtn from "@/components/global/AddNewBtn"
import Filter from "@/components/global/Filter"
import InvoiceCard from "@/components/invoices/invoiceCard"

function Home() {
  return (
    <div>
        <header className="flex justify-between items-center mb-10 lg:mb-16 flex-wrap">
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-sidebar-foreground">
                    Invoices
                </h1>
                <p className="text-chart-4 text-sm">
                    <span className="hidden md:inline">There are  total</span> invoices
                </p>
            </div>

            <div className="flex items-center gap-4 lg:gap-10 flex-wrap">
                <Filter />
                <AddNewBtn />
            </div>
        </header>
        <section>
            <InvoiceCard 
                id="RT3080" 
                dueDate="19 Aug 2021" 
                name="Jensen Huang" 
                total={1800.90} 
                status="draft"
            />
        </section>
    </div>
  )
}

export default Home