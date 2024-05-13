import Card from "@/app/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl roboto-thin text-center">
        Xin chào mọi người, mình là Hadi
      </h1>
      <div className='w-[700px] h-[700px] bg-red-300'>
        {/* <img src='/images/hinh1.jpg' alt="suffer" className='w-[700px] h-[700px]'/> */}
        <Image src='/images/hinh1.jpg' alt="suffer" width={500} height={500} quality={100}></Image>
      </div>
    </main>
  )
}
