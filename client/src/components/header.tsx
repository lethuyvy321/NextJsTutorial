'use client'
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import ButtonLogout from "./button-logout";
import { AccountResType } from "@/schemaValidations/account.schema";
import { useAppContext } from "@/app/app-provider";

export default function Header() {
  const {user} = useAppContext()
  return (
    <div className="flex space-x-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/products">Sản phẩm</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link href={"/me"}>
                Xin chào <strong>{user.name}</strong>
              </Link>
            </li>
            <li>
              <ButtonLogout />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link href="/register">Đăng ký</Link>
            </li>
          </>
        )}
      </ul>
      <ModeToggle />
    </div>
  );
}
