import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/invoices/StatusBadge";
import invoicesData from "@/data.json";
import { Card, CardHeader } from "@/components/ui/card";

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

function InvoiceDetails() {
  const { id } = useParams<{ id: string }>();
  const invoices = invoicesData as Invoice[];
  const invoice = invoices.find((currentInvoice) => currentInvoice.id === id);
  const calTotal = invoice?.items.reduce((acc, item) => acc + item.total, 0);

  if(!invoice){
    return ''
  }

  return (
    <div className="max-w-3xl mx-auto my-10 relative overflow-x-hidden">
      <Link to="/" className="flex items-center gap-4 text-base font-bold mb-4 hover:text-chart-3">
        <ChevronLeft className="text-primary size-4" />
        Go back
      </Link>
      <div className="bg-card rounded-lg p-6 flex items-center justify-between shadow-sm mb-6">
        <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
          <span className="text-chart-4 text-sm">Status</span>
          <StatusBadge status={invoice.status as "paid" | "pending" | "draft"} />
        </div>
        <div className="flex items-center gap-2 max-sm:absolute max-sm:-bottom-30 max-sm:h-20 max-sm:w-full max-sm:bg-white">
          <Button variant={'outline'} className="rounded-full px-6 font-bold text-chart-3  cursor-pointer">
            Edit
          </Button>
          <Button className="rounded-full px-6 h-12 font-bold cursor-pointer bg-red-500">
            Delete
          </Button>
          <Button className="rounded-full px-6 h-12 font-bold bg-primary hover:bg-chart-2 cursor-pointer">
            Mark as Paid
          </Button>
        </div>
      </div>
      <Card className="bg-card rounded-lg px-14  sm:py-6 shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
          <div>
            <h1 className="text-lg font-bold uppercase mb-1">
              <span className="text-chart-3">#</span>
              {invoice.id}
            </h1>
            <p className="text-chart-4 text-sm">{invoice.description}</p>
          </div>
          <div className="text-chart-4 text-sm sm:text-right">
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </div>
        </CardHeader>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-chart-4 text-sm mb-3">Invoice Date</p>
              <p className="text-lg font-bold">{new Date(invoice.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-chart-4 text-sm mb-3">Payment Due</p>
              <p className="text-lg font-bold">{new Date(invoice.paymentDue).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
          </div>

          <div>
            <p className="text-chart-4 text-sm mb-3">Bill To</p>
            <p className="text-lg font-bold mb-2">{invoice.clientName}</p>
            <div className="text-chart-4 text-sm">
              <p>{invoice.clientAddress.street}</p>
              <p>{invoice.clientAddress.city}</p>
              <p>{invoice.clientAddress.postCode}</p>
              <p>{invoice.clientAddress.country}</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-chart-4 text-sm mb-3">Sent To</p>
            <p className="text-lg font-bold">{invoice.clientEmail}</p>
          </div>
        </div>

        <div className="bg-muted rounded-t-lg overflow-hidden">
          <div className="hidden sm:grid grid-cols-4 p-8 pb-4 text-chart-4 text-xs">
            <div className="text-left">Item Name</div>
            <div className="text-right">QTY.</div>
            <div className="text-right">Price</div>
            <div className="text-right">Total</div>
          </div>

          <div className="flex flex-col gap-6 p-6 sm:p-8 pt-6">
            {invoice.items.map((item, index) => (
              <div key={index} className="grid grid-cols-2 sm:grid-cols-4 items-center">
                <div>
                  <p className="font-bold text-sm mb-1">{item.name}</p>
                  <p className="sm:hidden text-chart-4 font-bold">
                    {item.quantity} x £{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="hidden sm:block text-right text-chart-4 font-bold text-sm">
                  {item.quantity}
                </div>
                <div className="hidden sm:block text-right text-chart-4 font-bold text-sm">
                  £{item.price}
                </div>
                <div className="text-right font-bold text-sm">
                  £{item.total}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-sidebar p-6 sm:p-8 rounded-b-lg flex items-center justify-between text-white">
          <span className="text-sm sm:text-base">Amount Due</span>
          <span className="text-2xl sm:text-3xl font-bold">
            £{calTotal}
          </span>
        </div>
      </Card>
    </div>
  );
}

export default InvoiceDetails;