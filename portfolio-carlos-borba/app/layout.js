import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Portfolio Carlos Borba',
  description: 'Portfólio pessoal de Carlos Borba',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
