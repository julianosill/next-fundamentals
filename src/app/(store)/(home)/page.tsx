import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <main className=" grid max-h-[920px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/moletom-ai-side.png"
          className="group-hover:scale-105 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          className="group-hover:scale-105 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[240px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Camiseta DoWhile 2022</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 80
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[240px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>
    </main>
  )
}
