import AddNewBtn from "@/components/global/AddNewBtn"
import Filter from "@/components/global/Filter"
import EmptyInvoice from "@/components/invoices/EmptyInvoice"
import InvoiceCard from "@/components/invoices/invoiceCard"
import { SheetTrigger } from "@/components/ui/sheet"
import invoicesData from '@/data.json'


interface Invoice{
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
}

function Home() {
  const invoices = invoicesData as Invoice[];
  return (
    <div className="max-w-3xl mx-auto my-14">
        <header className="flex justify-between items-center mb-10 lg:mb-16 flex-wrap">
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-sidebar-foreground">
                    Invoices
                </h1>
                <p className="text-chart-4 text-sm">
                    <span className="hidden md:inline">{invoicesData.length > 0 ? `There are ${invoicesData.length} total`: 'No'}</span> <span className="inline md:hidden">{invoicesData.length > 0 ? invoicesData.length : 'No'} </span>invoices
                </p>
            </div>

            <div className="flex items-center gap-4 lg:gap-10 flex-wrap">
                <Filter />
                <SheetTrigger>
                    <AddNewBtn />
                </SheetTrigger>
            </div>
        </header>
        <section>
            {invoices.length === 0 && <EmptyInvoice />}
            {invoices.map(invoice =>(
                <InvoiceCard 
                    key={invoice.id}
                    id={invoice.id} 
                    dueDate={invoice.paymentDue}
                    name={invoice.clientName} 
                    total={invoice.total} 
                    status={invoice.status as 'paid' | 'pending' | 'draft'} 
                />
            ))}
        </section>
    </div>
  )
}

export default Home