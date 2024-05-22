import { type ClassValue, clsx } from "clsx"
import { UseFormSetError } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { EntityError } from "./http"
import { it } from "node:test"
import { toast } from "@/components/ui/use-toast"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleErrorApi = ({error, setError, duration} : {
  error : any
  setError?: UseFormSetError<any>
  duration?: number 
}) => {
if(error instanceof EntityError && setError){
  error.payload.errors.forEach((item: { field: string; message: any })  => {
    setError(item.field as 'email' | 'password', {
      type: 'server',
      message: item.message
    })
  })
} else{
  toast({
  title: 'Lỗi',
  description:  error?.payload?.message ?? 'Lỗi không xác định',
  variant: 'destructive',
  duration: duration ?? 5000
  })
}
}