export function AppBar() {
  return (
    <ul className="fixed top-5 flex px-6 py-4 gap-4 left-1/2 transform -translate-x-1/2 mr-auto font-bold text-sm backdrop-blur-sm bg-white/30  rounded-4xl z-20  [&_li]:cursor-pointer [&_li]:hover:underline">
      <li>Home</li>
      <li>Sobre nós</li>
      <li>Download</li>
    </ul>
  );
}
