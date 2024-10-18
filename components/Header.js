import Link from 'next/link';
import Image from 'next/image';

export default function Header({ carritoCount }) {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo-bruma.png" alt="Bruma" width={190} height={80} />
        </Link>
        {/* Menú de navegación */}
        <nav>
          <Link href="/" className="text-lg font-medium hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/productos" className="text-lg font-medium hover:text-blue-500 transition">
            Productos
          </Link>
          <Link href="/contacto" className="text-lg font-medium hover:text-blue-500 transition">
            Contacto
          </Link>
        </nav>
        {/* Carrito */}
        <Link href="/carrito">
          <div className="carrito relative">
            <span>Carrito</span>
            <div className="contador absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {carritoCount}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
