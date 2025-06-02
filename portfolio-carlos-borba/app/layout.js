import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Portfolio Carlos Borba',
  description: 'Portfólio pessoal de Carlos Borba',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 font-sans min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto p-6 space-y-6">
          {children}
        </main>
      </body>
    </html>
  );
}
