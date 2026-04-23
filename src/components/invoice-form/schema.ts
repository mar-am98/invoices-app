import * as z from "zod";

export const formSchema = z.object({
  streetADD: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  postCode: z.string().min(1, "Post code is required"),
  country: z.string().min(1, "Country is required"),
  clientName: z.string().min(2, "Client's name must be at least 2 characters"),
  clientEmail: z.string().email("Invalid email address"),
  clientStreet: z.string().min(1, "Street address is required"),
  clientCity: z.string().min(1, "City is required"),
  clientPostCode: z.string().min(1, "Post code is required"),
  clientCountry: z.string().min(1, "Country is required"),
  invoiceDate: z.coerce.date("date is required"),
  paymentTerms: z.string().min(1, "Please select payment terms"),
  projectDescription: z.string().min(1, "Description is required"),
  items: z.array(
    z.object({
      name: z.string().min(1, "Item name is required"),
      quantity: z.coerce.number().min(1, "Min 1"),
      price: z.coerce.number().min(0.01, "Min 0.01"),
      total: z.number().optional(),
    })
  ).min(1, "At least one item must be added"),
  status: z.enum(["draft", "pending", "paid"]).default("pending"),
});
