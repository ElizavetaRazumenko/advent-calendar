import { ROUTES } from 'src/constants/routes.ts'

export const getGiftPath = (day: number): string => ROUTES.gift.replace(':day', String(day))
