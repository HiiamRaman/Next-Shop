import Link from "next/link";
import SearchBar from "./Searchbar";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-slate-800"
        >
          <span className="text-emerald-600">Nova</span>Shop
        </Link>
         

         <SearchBar/>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="transition hover:text-emerald-600">
            Home
          </Link>

          <Link href="/products" className="transition hover:text-emerald-600">
            Products
          </Link>

          <Link href="/cart" className="transition hover:text-emerald-600">
            Cart
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative rounded-full p-2 transition hover:bg-emerald-50"
          >
            🛒
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
              0
            </span>
          </Link>

          {/* Login Button */}
          <Link
            href="/login"
            className="rounded-full bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
