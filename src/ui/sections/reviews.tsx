import { ReviewsCard } from "../components/reviews-card";

export function Reviews() {
  return (
    <section className="pb-24 flex flex-col items-center space-y-24">
      <div className="text-center space-y-4 mt-24">
        <h1 className="text-4xl font-serif">O que dizem nossos usuários</h1>
      </div>

      <div className="flex flex-wrap gap-8">
        <ReviewsCard
          review="Revolucionou completamente minha prática. A simplicidade é impressionante."
          name="Dra. Maria Silva"
          position="Psicóloga Clínica"
        />

        <ReviewsCard
          review="Finalmente uma plataforma que entende as necessidades do psicólogo."
          name="Dr. João Santos"
          position="Psicólogo Organizacional"
        />

        <ReviewsCard
          review="A plataforma encaixa perfeitamente na rotina do psicólogo. Simples e eficiente."
          name="Dr. Lucas Puche"
          position="Psicólogo"
        />
      </div>
    </section>
  );
}
