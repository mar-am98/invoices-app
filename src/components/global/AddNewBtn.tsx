import { Plus } from "lucide-react"
import { Button } from "../ui/button"

function AddNewBtn() {
  return (
    <Button className="bg-primary hover:bg-chart-2 rounded-full pl-2 pr-4 py-6">
        <div className="bg-white rounded-full p-2 mr-2">
            <Plus className="text-primary" size={16} />
        </div>
        New <span className="hidden md:inline ml-1">Invoice</span>
    </Button>
  )
}

export default AddNewBtn