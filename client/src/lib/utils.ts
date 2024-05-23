import { type ClassValue, clsx } from "clsx";
import { UseFormSetError } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { EntityError } from "./http";
import { it } from "node:test";
import { toast } from "@/components/ui/use-toast";
import jwt from 'jsonwebtoken'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleErrorApi = ({
  error,
  setError,
  duration,
}: {
  error: any;
  setError?: UseFormSetError<any>;
  duration?: number;
}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item: { field: string; message: any }) => {
      setError(item.field as "email" | "password", {
        type: "server",
        message: item.message,
      });
    });
  } else {
    toast({
      title: "Lỗi",
      description: error?.payload?.message ?? "Lỗi không xác định",
      variant: "destructive",
      duration: duration ?? 5000,
    });
  }
}
// xóa đi kí tự đầu tiên của path
export const nomalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}


export const decodeJWT = <Payload = any>(token: string) => {
  return jwt.decode(token) as Payload
}