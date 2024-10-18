import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p> 2024 Bruma. Todos los derechos reservados.</p>
        <a href="https://path-website-five.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image src="/firma.png" alt="Firma" width={90} height={40} />
        </a>
      </div>
    </footer>
  );
}
