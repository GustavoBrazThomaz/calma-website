import Image from "next/image";

export function AppBar() {
  return (
    <nav>
      <div className="flex items-center gap-2 fixed top-5 backdrop-blur-sm bg-white/30  rounded-4xl z-20">
        <Image
          className="pointer-events-none"
          width={40}
          height={40}
          src={"/assets/calma.png"}
          alt="logo"
        />
        <p className=" mt-1 text-xl font-serif">Calma</p>
      </div>

      <ul className="fixed top-5 flex px-6 py-4 gap-4 left-1/2 transform -translate-x-1/2 mr-auto font-bold text-sm backdrop-blur-sm bg-white/30  rounded-4xl z-20  [&_li]:cursor-pointer [&_li]:hover:underline">
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Download</li>
      </ul>
    </nav>
  );
}
