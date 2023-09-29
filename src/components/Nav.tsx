import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-24 py-8 flex gap-4">
      <Link href="/" className="text-blue-500 underline">
        Homepage
      </Link>
      <Link href="/nested/page" className="text-blue-500 underline">
        Sub Page
      </Link>
    </nav>
  );
}
