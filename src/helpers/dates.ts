import { MONTHS_GENITIVE } from 'src/constants/dates.ts'

export const formatOpenLabel = (openDate: string): string => {
  const [, month = '1', day = '1'] = openDate.split('-')
  const monthLabel = MONTHS_GENITIVE[Number(month) - 1] ?? ''

  return `${Number(day)} ${monthLabel}`
}
