import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'

import { api } from '@/data/api'
import { IProduct } from '@/data/types/product'
import { formatPrice } from '@/utils/format-price'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<IProduct> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const product = await response.json()

  return product
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <main className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={1000}
          height={1000}
          alt=""
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-8">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2 justify-between rounded-full bg-violet-500 whitespace-nowrap font-semibold">
            {formatPrice(product.price, false)}
          </span>
          <span className="text-sm text-zinc-400">
            12x {formatPrice(product.price / 12)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Sizes</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white gap-2 hover:bg-emerald-500"
        >
          <ShoppingBag className="size-5" />
          Add to cart
        </button>
      </div>
    </main>
  )
}
