"use client";
import { Button } from "../components";

export function ReadySection() {
  return (
    <section className="flex flex-col items-center justify-center bg-calma-primary gap-16 px-8 py-16">
      <div className="space-y-6 text-center text-white">
        <h1 className="text-4xl">Pronto para começar?</h1>
        <h2 className="text-2xl">
          Junte-se a centenas de psicólogos que já transformaram sua prática
        </h2>
      </div>
      <Button
        className="max-w-sm"
        onClick={() =>
          (window.location.href = "https://calma-seven.vercel.app/")
        }
      >
        Começar teste gratuito
      </Button>
    </section>
  );
}
