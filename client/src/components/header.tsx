import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/login'>
                        Đăng nhập
                    </Link>
                    <Link href='/register'>
                        Đăng ký
                    </Link>
                    <Link href={'/'}>Home Page</Link>
                </li>
            </ul>
            <ModeToggle />
        </div>
    )
}