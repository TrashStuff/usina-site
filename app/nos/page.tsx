import { NavBar } from "../NavBar";
import { Metadata } from "next";

const nosDescription =
"Usina é uma produtora formada pela dupla <a href=\"https://cargocollective.com/hugorocha\" target=\"_blank\">Hugo Rocha</a> e Miguel Mermelstein.\n\n" +
  "Criamos soluções sonoras para projetos audiovisuais.\n\n" +
  "Produzimos trilhas sonoras e cuidamos de todas as etapas de finalização de áudio para filmes, podcasts, publicidade, instalações e teatro.\n\n" +
  "Hugo é formado em Rádio/TV na ECO/UFRJ e é um profissional com mais de 12 anos de experiência em som e audiovisual, com atuação em música, cinema, publicidade, podcasts e artes cênicas. Envolvido em dezenas de projetos em desenho de som, edição de áudio, produção musical, trilha sonora e finalização, seu trabalho combina precisão técnica com uma abordagem artística sensível. Atua também como coordenador de pós-produção, liderando equipes e supervisionando fluxos de trabalho, cronogramas e entregas para múltiplas plataformas. Atuou por 5 anos na Comunicação da Globo, fazendo a gestão de conteúdos audiovisuais para a marca, acompanhando projetos do roteiro à finalização. Teve uma trajetória como editor de vídeo e videomaker e foi fundador da Companhia Volante, realizando projetos autorais coletivos em performance e artes cênicas.";

export const metadata: Metadata = {
  title: "Nós | Usina",
  description: nosDescription,
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? ""),
  openGraph: {
    title: "Nós | Usina",
    description: nosDescription,
    images: ["/nos.jpg"],
  },
};

export default function Nos() {
  return (
    <div className="flex flex-col items-center h-screen">
      <VideoBackground />

      <NavBar currentPage="nos" />

      <div className="container flex items-center justify-between pb-50 z-10 w-full">
        <div className="text-justify text-slate-100 bg-black bg-opacity-80 p-4 rounded font-sans text-base leading-7 md:text-2xl md:leading-9 max-w-4xl text-pretty z-10 text-shadow-lg flex flex-col gap-3">
          <p>
            Usina é uma produtora formada pela dupla Hugo Rocha e Miguel
            Mermelstein.
          </p>
          <p>Criamos soluções sonoras para projetos audiovisuais.</p>
          <p>
            Produzimos trilhas sonoras e cuidamos de todas as etapas de
            finalização de áudio para filmes, podcasts, publicidade, instalações
            e teatro.
          </p>
          <p>
            Hugo é formado em Rádio/TV na ECO/UFRJ e é um profissional com mais de 12 anos de experiência em som e audiovisual, com atuação em música, cinema, publicidade, podcasts e artes cênicas. Envolvido em dezenas de projetos em desenho de som, edição de áudio, produção musical, trilha sonora e finalização, seu trabalho combina precisão técnica com uma abordagem artística sensível. Atua também como coordenador de pós-produção, liderando equipes e supervisionando fluxos de trabalho, cronogramas e entregas para múltiplas plataformas. Atuou por 5 anos na Comunicação da Globo, fazendo a gestão de conteúdos audiovisuais para a marca, acompanhando projetos do roteiro à finalização. Teve uma trajetória como editor de vídeo e videomaker e foi fundador da Companhia Volante, realizando projetos autorais coletivos em performance e artes cênicas.
          </p>
        </div>
      </div>
    </div>
  );
}

function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="object-cover w-full h-full"
      >
        <source src="/usina.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
