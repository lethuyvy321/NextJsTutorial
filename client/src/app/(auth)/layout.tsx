import Link from "next/link";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <h2>Auth</h2>
    <div>
        <Link href={'/'}>Home Page</Link>
    </div>
    {children}
    </div>;
}
