import type { AdventDayStatus } from 'src/types/main.ts'

export const getDateKey = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const getAdventDayStatus = (openDate: string, today = new Date()): AdventDayStatus => {
  const todayKey = getDateKey(today)

  if (todayKey === openDate) {
    return 'today'
  }

  if (todayKey > openDate) {
    return 'opened'
  }

  return 'locked'
}

