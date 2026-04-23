import { useForm, useFieldArray } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { SheetContent, SheetFooter, SheetHeader } from "../ui/sheet";
import { Button } from "../ui/button";

export default function InvoiceForm() {
  const { register, control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      streetADD: "", city: "", postCode: "", country: "",
      clientName: "", clientEmail: "", clientStreet: "",
      clientCity: "", clientPostCode: "", clientCountry: "",
      invoiceDate: "", paymentTerms: "Net 30 Days",
      projectDescription: "",
      items: [{ name: "", quantity: 1, price: 0 }]
    }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  const onSubmit = (data: any) => {
    alert("Invoice data ready for your data.json!");
  };

  return (
    <SheetContent side="left" showCloseButton={false}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-150 mx-auto bg-white p-8 rounded-r-3 shadow-x relative">
            <SheetHeader>
                <h1 className="text-2xl font-bold mb-10 text-slate-900">New Invoice</h1>
            </SheetHeader>
            
            <div className="w-full h-screen pr-4 overflow-y-scroll">
                <section className="mb-10">
                <p className="text-indigo-500 font-bold text-xs mb-4 uppercase tracking-wider">Bill From</p>
                <div className="space-y-4">
                    <div>
                    <label className="block text-xs text-slate-400 mb-2">Street Address</label>
                    <input {...register("streetADD")} className="w-full border border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-indigo-400 outline-none" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                    <div><label className="text-[10px] text-slate-400">City</label><input {...register("city")} className="w-full border border-slate-200 rounded p-3 text-sm" /></div>
                    <div><label className="text-[10px] text-slate-400">Post Code</label><input {...register("postCode")} className="w-full border border-slate-200 rounded p-3 text-sm" /></div>
                    <div><label className="text-[10px] text-slate-400">Country</label><input {...register("country")} className="w-full border border-slate-200 rounded p-3 text-sm" /></div>
                    </div>
                </div>
                </section>
                <section className="mb-10">
                <p className="text-indigo-500 font-bold text-xs mb-4 uppercase tracking-wider">Bill To</p>
                <div className="space-y-4">
                    <div>
                    <label className="block text-xs text-slate-400 mb-2">Client's Name</label>
                    <input {...register("clientName")} className="w-full border border-slate-200 rounded p-3 text-sm focus:ring-1 focus:ring-indigo-400 outline-none" />
                    </div>
                    <div>
                    <label className="block text-xs text-slate-400 mb-2">Client's Email</label>
                    <input type="email" {...register("clientEmail")} placeholder="e.g. email@example.com" className="w-full border border-slate-200 rounded p-3 text-sm" />
                    </div>
                    <div>
                    <label className="block text-xs text-slate-400 mb-2">Street Address</label>
                    <input {...register("clientStreet")} className="w-full border border-slate-200 rounded p-3 text-sm" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                    <div><label className="text-[10px] text-slate-400">City</label><input {...register("clientCity")} className="w-full border border-slate-200 rounded p-3 text-sm" /></div>
                    <div><label className="text-[10px] text-slate-400">Post Code</label><input {...register("clientPostCode")} className="w-full border border-slate-200 rounded p-3 text-sm" /></div>
                    <div><label className="text-[10px] text-slate-400">Country</label><input {...register("clientCountry")} className="w-full border border-slate-200 rounded p-3 text-sm" /></div>
                    </div>
                </div>
                </section>
                <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                    <label className="block text-xs text-slate-400 mb-2">Invoice Date</label>
                    <div className="relative">
                    <input type="date" {...register("invoiceDate")} className="w-full border border-slate-200 rounded p-3 text-sm" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs text-slate-400 mb-2">Payment Terms</label>
                    <select {...register("paymentTerms")} className="w-full border border-slate-200 rounded p-3 text-sm bg-white">
                    <option>Net 30 Days</option>
                    <option>Net 15 Days</option>
                    <option>Net 1 Day</option>
                    </select>
                </div>
                </div>
                <div className="mb-10">
                <label className="block text-xs text-slate-400 mb-2">Project Description</label>
                <input {...register("projectDescription")} placeholder="e.g. Graphic Design Service" className="w-full border border-slate-200 rounded p-3 text-sm" />
                </div>
                <section className="mb-32">
                <h3 className="text-slate-400 font-bold text-lg mb-4">Item List</h3>
                <div className="space-y-4">
                    {fields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-12 gap-4 items-end">
                        <div className="col-span-4">
                        <input {...register(`items.${index}.name`)} placeholder="Item Name" className="w-full border border-slate-200 rounded p-3 text-sm" />
                        </div>
                        <div className="col-span-2">
                        <input type="number" {...register(`items.${index}.quantity`)} className="w-full border border-slate-200 rounded p-3 text-sm text-center" />
                        </div>
                        <div className="col-span-3">
                        <input type="number" {...register(`items.${index}.price`)} className="w-full border border-slate-200 rounded p-3 text-sm" />
                        </div>
                        <div className="col-span-2 pb-3 font-bold text-slate-400 text-sm">
                        {((watch(`items.${index}.quantity`) || 0) * (watch(`items.${index}.price`) || 0)).toFixed(2)}
                        </div>
                        <button type="button" onClick={() => remove(index)} className="col-span-1 pb-3 text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                        </button>
                    </div>
                    ))}
                </div>
                <button type="button" onClick={() => append({ name: "", quantity: 1, price: 0 })} 
                    className="w-full mt-4 bg-slate-50 text-indigo-500 font-bold py-3 rounded-full hover:bg-slate-100 transition-all text-sm">
                    + Add New Item
                </button>
                </section>
            </div>

            <SheetFooter className="sticky z-50 bottom-0 left-0 w-full bg-white p-6 flex flex-row items-start  justify-between border-t border-slate-50">
            <Button type="button" variant={'ghost'} className="px-4 py-3 font-bold  rounded-full text-sm">Discard</Button>
            <div className="flex gap-2">
                <Button type="button" variant={'outline'} className=" font-bold px-4 py-3 rounded-full text-sm">Save as Draft</Button>
                <Button type="submit" variant={'default'} className="font-bold px-6 py-3 rounded-full text-sm">Save & Send</Button>
            </div>
            </SheetFooter>
        </form>
    </SheetContent>
  );
}