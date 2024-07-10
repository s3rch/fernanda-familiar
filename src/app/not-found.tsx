import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="py-60 w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-red-500 px-2 text-sm rounded rotate-12 absolute">
        Noticias no entontrada
      </div>
      <button className="mt-5">
        <div
          className="relative inline-block text-sm font-medium text-red-500 group focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red-500 group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href="/">Ir a la página de inicio</Link>
          </span>
        </div>
      </button>
    </main>
  )
}