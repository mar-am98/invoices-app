import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

interface InvoiceProps {
  id: string;
  dueDate: string;
  name: string;
  total: number;
  status: 'paid' | 'pending' | 'draft';
}

export default function InvoiceCard({ id, dueDate, name, total, status }: InvoiceProps) {
  const colors = {
    paid: 'bg-[#33D69F]/5 text-[#33D69F]',
    pending: 'bg-[#FF8F00]/5 text-[#FF8F00]',
    draft: 'bg-secondary-foreground/5 text-secondary-foreground'
  }
  const color = colors[status] || colors.draft;



  return (
    <Link to={`/invoice/${id}`}>
      <div className="flex items-center justify-between bg-card p-6 rounded-lg shadow-sm border border-transparent hover:border-purple-500 transition-all mb-4 max-sm:flex-col max-sm:gap-1">
        <div className="flex items-center gap-10 max-sm:items-start max-sm:justify-between max-sm:flex-wrap">
          <div className="flex items-center gap-10 max-sm:flex-col max-sm:gap-6 max-sm:w-60 max-sm:items-start max-sm:flex-1">
            <p className="font-bold text-sm uppercase">
              <span className="text-chart-3">#</span>{id}
            </p>
            <p className="text-chart-4 text-sm">Due {dueDate}</p>
          </div>
          <h3 className="text-chart-4 text-sm">{name}</h3>
        </div>
        <div className="flex items-center gap-8 max-sm:w-full max-sm:justify-between">
          <span className="font-bold text-lg">£{total.toLocaleString()}</span>
          
          <Badge className={`w-26 h-10 flex items-center justify-center gap-2 py-2 capitalize font-bold border-none shadow-none rounded-sm ${color} max-sm:-translate-y-2`}>
             <span className="size-2 rounded-full bg-current" />
             {status}
          </Badge>

          <ChevronRight className="text-primary size-5 hidden md:block" />
        </div>
      </div>
    </Link>
  )
}