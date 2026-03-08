import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Nossa Equipe – Projeto Cavalos-Marinhos RJ",
  description: "Conheça a equipe do Projeto Cavalos-Marinhos do Rio de Janeiro.",
};

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  email?: string;
  lattes?: string;
  photoPosition?: string;
}

const allMembers: TeamMember[] = [
  { name: "Natalie Freret-Meurer", role: "Coordenadora Geral", photo: "/natalie.jfif.jpg", email: "nataliefreret@yahoo.com.br", lattes: "http://lattes.cnpq.br/7107327491707135" },
  { name: "Amanda Vaccani", role: "Coordenadora de Pesquisa", photo: "/AMANDA.png", email: "amandavaccani@hotmail.com", lattes: "http://lattes.cnpq.br/4202399450460323" },
  { name: "Tatiane Fernandez", role: "Coordenadora de Campo", photo: "/DCFC3888-A988-4990-80AA-175350F8CB2B - Tatiane Fernández.jpeg", email: "taty045@hotmail.com", lattes: "http://lattes.cnpq.br/6406651216960675" },
  { name: "Gabriela Cabiró", role: "Bióloga", photo: "/IMG_7153.PNG.jpg", email: "gabrielacabiro@hotmail.com", lattes: "http://lattes.cnpq.br/5853281727677631" },
  { name: "Dedina Bernardelli", role: "Educadora Ambiental", photo: "/Dedina.jpg", email: "dedinabernardelli@cavalosmarinhosrj.com", lattes: "http://lattes.cnpq.br/5343544620533557" },
  { name: "Anderson Vilasboa", role: "Pesquisador Colaborador", photo: "/anderson-vilasboa.jpg", email: "andersonvilasboa@gmail.com", lattes: "http://lattes.cnpq.br/2627503801412287" },
  { name: "José Araújo Souto Neto", role: "Pesquisador Colaborador", photo: "/Screenshot_20221214_095424_Photos - José Araújo Souto Neto - Copia.png", email: "soutoneto_16@hotmail.com", lattes: "http://lattes.cnpq.br/1901430132626736" },
  { name: "Maria Teresa Gouveia", role: "Mentora de Educação Ambiental", photo: "/teresa.avif", email: "mtjgouveia@gmail.com", lattes: "http://lattes.cnpq.br/9184294521691487" },
  { name: "Paula Alqueres", role: "Graduanda", photo: "/WhatsApp Image 2023-02-17 at 14.30.14.jpeg", email: "paulaalqueres@cavalosmarinhosrj.com" },
  { name: "Lydia Machado", role: "Bióloga", photo: "/WhatsApp Image 2023-03-07 at 11.18.55.jpeg", email: "lydiamchd@gmail.com", lattes: "http://lattes.cnpq.br/2230197855697615" },
  { name: "Caio Godinho de Carvalho", role: "Graduando", photo: "/caiofoto.avif", email: "caio.carvalho4780@souusu.com.br", lattes: "https://lattes.cnpq.br/6250980486149828" },
  { name: "Júlia Jannuzzi", role: "Graduanda", photo: "/julia.jpg", email: "julia.jannuzzi@edu.unirio.br", lattes: "http://lattes.cnpq.br/4807695701889028" },
  { name: "Thaissa Dutra", role: "Graduanda", photo: "/Imagem do WhatsApp de 2025-04-13 à(s) 14.38.30_a6df82d2.jpg", email: "thaissaandrademd@gmail.com", lattes: "http://lattes.cnpq.br/2955548396753988" },
];

export default function EquipePage() {
  return (
    <SubpageLayout
      heroTitle="Nossa Equipe"
      heroLead="A equipe do Projeto Cavalos-Marinhos do Rio de Janeiro conta com estudantes de graduação, pesquisadores e colaboradores."
      heroImage="/bannereqp.avif"
      depth="abyss"
    >
      <section className="page-section wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
          marginTop: 32,
        }}>
          {allMembers.map((m) => (
            <div
              key={m.name}
              className="info-card page-animate"
              style={{ textAlign: "center", padding: "0 0 24px" }}
            >
              {/* Foto grande */}
              <div style={{
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
                marginBottom: 16,
              }}>
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "100%", objectPosition: m.photoPosition || "center" }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "0 16px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 4 }}>
                  {m.name}
                </h3>
                <p style={{
                  fontSize: "0.82rem",
                  color: "var(--teal)",
                  fontWeight: 600,
                  marginBottom: 12,
                }}>
                  {m.role}
                </p>

                {m.email && (
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: 4 }}>
                    <a href={`mailto:${m.email}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                      {m.email}
                    </a>
                  </p>
                )}
                {m.lattes && (
                  <p style={{ fontSize: "0.78rem" }}>
                    <a
                      href={m.lattes}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--teal)", textDecoration: "none", fontWeight: 600 }}
                    >
                      Currículo Lattes &#8594;
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" style={{ textAlign: "center" }}>
        <div className="page-animate">
          <h2 style={{ fontFamily: "var(--font)", fontSize: "1.3rem", fontWeight: 700 }}>
            PELA CONSERVAÇÃO DOS CAVALOS-MARINHOS
          </h2>
        </div>
      </section>
    </SubpageLayout>
  );
}
