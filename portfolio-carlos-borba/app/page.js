export default function Home() {
  return (
    <main className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mt-8 space-y-6">
      <h1 className="text-4xl font-bold text-blue-700">Carlos Borba</h1>

      <h2 className="text-xl font-semibold text-gray-800">
        Assessor Técnico na Secretaria de Gestão e Inovação da Prefeitura Municipal da Aliança
      </h2>

      <p className="text-lg leading-relaxed text-gray-700">
        Olá, prazer! Me chamo Carlos Borba, sou pernambucano e tenho 31 anos.
        Formado em Direito, atualmente graduando em Sistemas para Internet. Sempre fui apaixonado por tecnologia
        e sou um desenvolvedor web freelancer apaixonado por criar experiências incríveis na web!
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Atualmente atuo como Desenvolvedor Front-End e trabalho na Secretaria de Gestão e Inovação da Aliança-PE.
        Conheça alguns de meus projetos clicando{" "}
        <a href="/projetos" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">aqui</a>.
      </p>
    </main>
  );
}
