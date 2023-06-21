export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center justify-center bg-[#00ADD8] h-[100svh]">
      <h1 className="font-mono text-white text-xl lg:text-2xl">
        Hello, <span className="font-bold">GopherCon Korea!</span>
      </h1>
      <img className="w-40 lg:w-64" src="/gopher-plane.svg" />
    </main>
  );
}
