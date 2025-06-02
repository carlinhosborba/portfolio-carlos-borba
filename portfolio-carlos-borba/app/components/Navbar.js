'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="max-w-4xl mx-auto flex flex-wrap gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/sobre" className="hover:underline">Sobre</Link>
        <Link href="/experiencia-academica" className="hover:underline">Experiência Acadêmica</Link>
        <Link href="/experiencia-profissional" className="hover:underline">Experiência Profissional</Link>
        <Link href="/projetos" className="hover:underline">Projetos</Link>
        <Link href="/jogo-senha" className="hover:underline">Jogo da Senha</Link>
      </nav>
    </header>
  );
}
