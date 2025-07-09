import Image from "next/image";

export function Notebook() {
  return (
    <div className="border-2 border-b-0 border-gray-300 rounded-t-[34px] z-10  w-[772px] h-[450px]">
      <div className="relative w-[768px] h-[450px] border-16 border-b-0 rounded-t-4xl bg-black">
        <Image
          layout="fill"
          src={"/assets/calma-dashboard.png"}
          alt="calma-dashboard"
          className="rounded-t-xl pointer-events-none"
        />
      </div>
    </div>
  );
}
