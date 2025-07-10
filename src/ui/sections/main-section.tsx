import { Notebook } from "../components/notebook";

export function MainSection() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh gap-16">
      <div className="space-y-4 text-center">
        <h1 className="text-9xl font-serif">Calma</h1>
        <h2 className="text-3xl">Organize com calma. Atenda com foco.</h2>
      </div>
      <div className="relative w-full flex justify-center">
        <Notebook />
        <div className="h-2/3 rounded-[48px] w-[80%] absolute bottom-0 bg-orange-300 shadow" />
      </div>
    </section>
  );
}
