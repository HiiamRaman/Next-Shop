import Link from "next/link";

function Navbar() {
  return (
    <nav className=" bg-green-300 flex justify-between items-center px-6 py-4    ">
      <h1 className="text-xl font-bold">Raman.</h1>

      <div className=" flex gap-5">
        <Link  className="" href={"/"}>Home</Link>

      <Link href={"/products"}>Products</Link>

      <Link href={"/cart"}>Cart</Link>

      <Link href={"/login"}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
