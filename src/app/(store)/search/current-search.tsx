'use client'

import { useSearchParams } from 'next/navigation'

export function CurrentSearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <p className="text-zinc-400">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  )
}
