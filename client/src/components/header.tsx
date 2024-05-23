import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import ButtonLogout from "./ButtonLogout";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/products/add">Thêm sản phẩm</Link>
        </li>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng ký</Link>
        </li>
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <ButtonLogout />
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
