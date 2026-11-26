import { ADVENT_DAYS } from 'src/constants/calendar.ts'
import type { AdventDay } from 'src/types/main.ts'

export const parseGiftDay = (value: string | undefined): number | null => {
  if (!value || !/^\d+$/.test(value)) {
    return null
  }

  return Number(value)
}

export const getGiftDay = (value: string | undefined): AdventDay | undefined => {
  const day = parseGiftDay(value)

  if (day === null) {
    return undefined
  }

  return ADVENT_DAYS.find((item) => item.day === day)
}
