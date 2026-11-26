import { useEffect, useState } from 'react'
import { readChecked, writeChecked } from './helpers';

export const useChecklist = (ids: readonly string[]) => {
  const [checked, setChecked] = useState(() => readChecked(ids))

  useEffect(() => {
    writeChecked(checked)
  }, [checked])

  const toggle = (id: string) => {
    setChecked((current) => {
      const next = { ...current, [id]: !current[id] }

      if (!next[id]) {
        delete next[id]
      }

      return next
    })
  }

  return { checked, toggle }
}
