import Image from "next/image";

export function AppBar() {
  return (
    <nav>
      <div className="flex items-center px-2 py-1 gap-2 fixed top-5 max-sm:top-3 backdrop-blur-sm bg-white/30  rounded-4xl z-20">
        <Image
          className="pointer-events-none size-8"
          width={40}
          height={40}
          src={"/assets/calma.png"}
          alt="logo"
        />
        <p className=" mt-1 text-xl max-sm:text-md font-serif">Calma</p>
      </div>

      {/* <ul className="fixed top-5 flex px-6 py-4 gap-4 left-1/2 transform -translate-x-1/2 mr-auto font-bold text-sm backdrop-blur-sm bg-white/30  rounded-4xl z-20  [&_li]:cursor-pointer [&_li]:hover:underline">
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Download</li>
      </ul> */}
    </nav>
  );
}
