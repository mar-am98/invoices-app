
function EmptyInvoice() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4 mt-4">
        <img src="./Email_Flatline.svg" alt="Email_flatline" />
        <h2 className="text-2xl font-bold text-center">
          There is nothing here
        </h2>
        <p className="text-center text-base text-chart-4"> 
          Create an invoice by clicking the 
           <br/>New Invoice button and get started
        </p>
    </div>
  )
}

export default EmptyInvoice