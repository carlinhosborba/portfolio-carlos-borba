'use client';
import { useState } from 'react';

export default function JogoSenha() {
  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState([]);
  const [senha, setSenha] = useState(gerarSenha());
  const [venceu, setVenceu] = useState(false);

  function gerarSenha() {
    const digitos = [];
    while (digitos.length < 4) {
      const num = Math.floor(Math.random() * 10);
      if (!digitos.includes(num)) digitos.push(num);
    }
    return digitos;
  }

  function verificarPalpite() {
    const arrPalpite = palpite.split('').map(Number);
    if (arrPalpite.length !== 4 || new Set(arrPalpite).size !== 4) {
      alert('Digite 4 números diferentes.');
      return;
    }

    let bulls = 0;
    let cows = 0;

    arrPalpite.forEach((dig, idx) => {
      if (dig === senha[idx]) {
        bulls++;
      } else if (senha.includes(dig)) {
        cows++;
      }
    });

    const novaTentativa = { palpite, bulls, cows };
    const novasTentativas = [novaTentativa, ...tentativas];
    setTentativas(novasTentativas);
    setPalpite('');

    if (bulls === 4 || novasTentativas.length === 10) {
      setVenceu(true);
    }
  }

  function mostrarSenha() {
    alert(`A senha secreta era: ${senha.join('')}`);
  }

  function novoJogo() {
    setSenha(gerarSenha());
    setTentativas([]);
    setPalpite('');
    setVenceu(false);
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Jogo da Senha (Bulls and Cows)</h1>

      {!venceu && (
        <>
          <input
            className="border p-2 mr-2 w-36"
            type="text"
            maxLength={4}
            placeholder="Ex: 1234"
            value={palpite}
            onChange={(e) => setPalpite(e.target.value.replace(/[^0-9]/g, ''))}
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={verificarPalpite}>
            Enviar
          </button>
        </>
      )}

      {venceu && (
        <div className="my-4 text-green-600 font-semibold">
          {tentativas[tentativas.length - 1]?.bulls === 4
            ? '🎉 Você acertou a senha!'
            : 'Fim de jogo!'}
          <br />
          <button onClick={mostrarSenha} className="text-blue-600 underline mr-4">Ver senha</button>
          <button onClick={novoJogo} className="bg-blue-600 text-white px-4 py-2 rounded">Novo jogo</button>
        </div>
      )}

      <ul className="mt-6 space-y-2">
        {tentativas.map((tent, i) => (
          <li key={i} className="border p-2">
            <strong>{tent.palpite}</strong> – {tent.bulls} Bulls, {tent.cows} Cows
          </li>
        ))}
      </ul>
    </main>
  );
}
