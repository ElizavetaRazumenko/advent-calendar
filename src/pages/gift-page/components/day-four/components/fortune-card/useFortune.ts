import { useState } from 'react'
import { shuffleFortuneSlips } from './helpers.ts'
import type { FortuneSlip } from './types.ts'

export const useFortune = (slips: readonly FortuneSlip[]) => {
  const [order] = useState(() => shuffleFortuneSlips(slips))
  const [opened, setOpened] = useState<Record<string, boolean>>({})

  const open = (id: string) => {
    setOpened((current) => {
      if (current[id]) {
        return current
      }

      return { ...current, [id]: true }
    })
  }

  return { order, opened, open }
}
