'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="items-center gap-2 flex">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
