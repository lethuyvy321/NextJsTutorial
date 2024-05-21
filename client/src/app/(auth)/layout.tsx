import Link from "next/link";
import RegisterForm from "./register/register-form";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <h1 className="text-xl semi font-semibold text-center"></h1>
    <div className="flex justify-center">
      {children}
    </div>
    </div>;
}
