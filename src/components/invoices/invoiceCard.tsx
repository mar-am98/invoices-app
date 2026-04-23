import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import StatusBadge from "./StatusBadge";

interface InvoiceProps {
  id: string;
  dueDate: string;
  name: string;
  total: number;
  status: 'paid' | 'pending' | 'draft';
}

export default function InvoiceCard({ id, dueDate, name, total, status }: InvoiceProps) {
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
          
          <StatusBadge status={status}/>

          <ChevronRight className="text-primary size-5 hidden md:block" />
        </div>
      </div>
    </Link>
  )
}