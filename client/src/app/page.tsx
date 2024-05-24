import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata : Metadata = {
  title : 'Trang chủ',
  description: 'Trang chủ của Hadi, được tạo bởi Hadi'
}
export default function Home() {
  return (
    <main>
      <h1 className="text-4xl roboto-thin text-center">
        Xin chào mọi người, mình là Hadi
      </h1>
    </main>
  )
}
