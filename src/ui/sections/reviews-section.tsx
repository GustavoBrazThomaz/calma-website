import { ReviewsCard } from "../components/reviews-card";

const reviews = [
  {
    review:
      "Revolucionou completamente minha prática. A simplicidade é impressionante.",
    name: "Dra. Maria Silva",
    position: "Psicóloga Clínica",
  },
  {
    review:
      "Finalmente uma plataforma que entende as necessidades do psicólogo.",
    name: "Dr. João Santos",
    position: "Psicólogo Organizacional",
  },
  {
    review:
      "A plataforma encaixa perfeitamente na rotina do psicólogo. Simples e eficiente.",
    name: "Dr. Lucas Barbosa Puche",
    position: "Psicólogo",
  },
];

export function Reviews() {
  return (
    <section className="pb-24 flex flex-col items-center space-y-24 max-sm:space-y-8 max-sm:pb-12 max-sm:-mt-12">
      <div className="text-center space-y-4 mt-24">
        <h1 className="text-4xl max-sm:text-3xl font-serif">
          O que dizem nossos usuários
        </h1>
      </div>

      <div className="flex flex-wrap gap-8 max-xl:justify-center">
        {reviews.map((item, index) => (
          <ReviewsCard
            key={"review_card_" + index}
            review={item.review}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </section>
  );
}
