import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { IProduct } from '@/data/types/product'
import { formatPrice } from '@/utils/format-price'

async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <main className=" grid max-h-[920px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt={highlightedProduct.title}
        />
        <div className="absolute bottom-20 right-20 h-12 flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            {formatPrice(highlightedProduct.price, false)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-300"
            width={920}
            height={920}
            quality={100}
            alt={product.title}
          />
          <div className="absolute bottom-0 group-hover:bottom-10 right-10 h-12 flex items-center gap-2 max-w-[240px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
              {formatPrice(product.price, false)}
            </span>
          </div>
        </Link>
      ))}
    </main>
  )
}
