"use client";

import SubpageLayout from "@/components/SubpageLayout";

export default function ContatoPage() {
  return (
    <SubpageLayout
      heroTitle="Contato"
      heroLead="Fale com a gente — Entre em contato com a nossa equipe"
      depth="abyss"
    >
      <section className="page-section">
        <div className="page-animate">
          <p className="story-phrase">
            Junte-se a nós na <em>preservação</em>.
          </p>
        </div>

        <div className="info-cards">
          <div className="info-card page-animate" style={{ textAlign: "center" }}>
            <h3>E-mail</h3>
            <p>projetocavalosmarinhos@gmail.com</p>
            <a href="mailto:projetocavalosmarinhos@gmail.com" className="btn-contact" style={{ marginTop: 12 }}>
              Enviar mensagem
            </a>
          </div>
          <div className="info-card page-animate" style={{ textAlign: "center", borderColor: "var(--coral)", background: "rgba(255,107,107,0.04)" }}>
            <h3>Doar</h3>
            <p>Sua doação vai ajudar no desenvolvimento das ações, que priorizam a construção de conhecimentos novos e a conservação dos cavalos-marinhos.</p>
            <a href="/doacao" className="btn-donate" style={{ marginTop: 12 }}>DOAR</a>
          </div>
          <div className="info-card page-animate" style={{ textAlign: "center" }}>
            <h3>Redes Sociais</h3>
            <p>Segue a gente ;)</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 12 }}>
              <a href="https://www.instagram.com/projetocavalosmarinhos/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>Instagram</a>
              <a href="https://www.facebook.com/ProjetoCavalosMarinhos" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>Facebook</a>
              <a href="https://www.youtube.com/@projetocavalosmarinhos" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>YouTube</a>
            </div>
          </div>
        </div>
      </section>

      {/* Como contribuir */}
      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Como contribuir com nosso projeto</h2>
          <ul style={{ lineHeight: 2 }}>
            <li><strong>Siga as nossas redes sociais</strong> e compartilhe as informações com seus seguidores.</li>
            <li><strong>Seja um voluntário!</strong> Informamos sempre em nossas redes sociais a abertura de novas vagas.</li>
            <li><strong>Denuncie crimes ambientais:</strong> os cavalos-marinhos são protegidos pela Portaria 148/2022, em que é proibida a captura, transporte, armazenamento, guarda, manejo, beneficiamento e comercialização.</li>
            <li><strong>Se achar um cavalo-marinho machucado,</strong> com dificuldade de nadar ou morto, nos acione pelo canal de emergência.</li>
            <li><strong>Se achar um cavalo-marinho vivo,</strong> venha fazer parte de nossa rede de ciência cidadã e nos informe o dia e local onde encontrou.</li>
            <li><strong>Apoie financeiramente nosso projeto.</strong></li>
          </ul>
        </div>
      </section>

      {/* Denúncias */}
      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Denúncias Ambientais</h2>
          <p>
            Os cavalos-marinhos são protegidos pela Portaria 148/2022. Captura, transporte,
            armazenamento, guarda, manejo, beneficiamento e comercialização são proibidos.
          </p>
          <p>Entre em contato com:</p>
          <ul>
            <li><strong>Linha Verde do Ibama:</strong> telefone 0800 61 8080 (ligação gratuita para todo o Brasil) ou e-mail: linhaverde.sede@ibama.gov.br</li>
            <li><strong>Secretaria do Meio Ambiente local</strong> onde ocorreu o crime, pela ouvidoria ou canal de denúncia.</li>
          </ul>
        </div>

        <div className="cta-block page-animate">
          <h3>Saiba tudo que acontece por aqui</h3>
          <p>Receba novidades sobre pesquisas e ações do projeto.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: 400, margin: "0 auto" }}>
            <input type="email" placeholder="Seu e-mail" aria-label="E-mail" required />
            <button type="submit" className="btn-newsletter">Inscrever</button>
          </form>
        </div>
      </section>
    </SubpageLayout>
  );
}
