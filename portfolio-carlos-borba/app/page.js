// app/page.js
export default function Home() {
  return (
    <main className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Carlos Borba</h1>
      <h2 className="text-2xl text-blue-600">Assessor Técnico na Secretaria de Gestão e Inovação da Prefeitura Municipal da Aliança</h2>
      <p className="text-lg">
        Olá, prazer! Me chamo Carlos Borba, sou pernambucano e tenho 31 anos.
        Formado em Direito, atualmente graduando em Sistemas para Internet, sempre fui apaixonado por tecnologia.
        Sou um desenvolvedor web freelancer apaixonado por criar experiências incríveis na web! 
        Atualmente atuo como Desenvolvedor Front-End e trabalho na Secretaria de Gestão e Inovação da Aliança-PE.
        Conheça alguns de meus projetos clicando <a href="/projetos" className="text-blue-500 underline">aqui</a>.
      </p>
    </main>
  );
}
