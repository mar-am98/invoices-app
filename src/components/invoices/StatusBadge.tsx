import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: 'paid' | 'pending' | 'draft';
}

function StatusBadge({ status }: StatusBadgeProps) {
    const colors = {
        paid: 'bg-[#33D69F]/5 text-[#33D69F]',
        pending: 'bg-[#FF8F00]/5 text-[#FF8F00]',
        draft: 'bg-secondary-foreground/5 text-secondary-foreground'
    }
    const currentClr = colors[status] || colors.draft;
    
    return (
        <Badge className={`w-26 h-10 flex items-center justify-center gap-2 py-2 capitalize font-bold border-none shadow-none rounded-sm ${currentClr} max-sm:-translate-y-2`}>
            <span className="size-2 rounded-full bg-current" />
            {status}
        </Badge>
    )
}

export default StatusBadge