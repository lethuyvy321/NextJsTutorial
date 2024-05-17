import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl roboto-thin text-center">
        Xin chào mọi người, mình là Hadi
      </h1>
      <ul>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/register'}>Register</Link>
        </li>
      </ul>
    </main>
  )
}
