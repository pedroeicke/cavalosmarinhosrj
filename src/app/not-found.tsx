import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-section">
      <div className="not-found-icon">🐴</div>
      <h1>404</h1>
      <p>Ops! Você nadou para águas desconhecidas.</p>
      <Link href="/" className="btn-home">
        ← Voltar à superfície
      </Link>
    </div>
  );
}
