'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap gap-6 text-sm font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/sobre" className="hover:text-blue-600 transition-colors">Sobre</Link>
        <Link href="/experiencia-academica" className="hover:text-blue-600 transition-colors">Experiência Acadêmica</Link>
        <Link href="/experiencia-profissional" className="hover:text-blue-600 transition-colors">Experiência Profissional</Link>
        <Link href="/projetos" className="hover:text-blue-600 transition-colors">Projetos</Link>
        <Link href="/jogo-senha" className="hover:text-blue-600 transition-colors">Jogo da Senha</Link>
      </nav>
    </header>
  );
}
