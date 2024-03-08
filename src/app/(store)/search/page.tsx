import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { IProduct } from '@/data/types/product'
import { formatPrice } from '@/utils/format-price'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<IProduct[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams
  if (!query) redirect('/')

  const products = await searchProducts(query)

  return (
    <main className="flex flex-col gap-6">
      <p className="text-zinc-400">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-300"
              width={480}
              height={480}
              quality={80}
              alt=""
            />
            <div className="absolute bottom-0 group-hover:bottom-10 right-10 h-12 flex items-center gap-2 max-w-[240px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
                {formatPrice(product.price, false)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
