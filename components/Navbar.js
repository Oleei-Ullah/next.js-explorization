import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-between w-1/3 mx-auto bg-black text-white font-bold text-md px-4 py-3 rounded-full">
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>about</Link>
            </li>
            <li>
                <Link href='/blog'>Blog</Link>
            </li>
            <li>
                <Link href='/portfolio'>Portfilo</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar