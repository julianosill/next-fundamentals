'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart-context'

export interface addToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: addToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white gap-2 hover:bg-emerald-500"
    >
      <ShoppingBag className="size-5" />
      Add to cart
    </button>
  )
}
