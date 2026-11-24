import { ROUTES } from "src/constants/routes";
import { MONTHS_GENITIVE } from "./constants";

export const formatOpenLabel = (openDate: string): string => {
    const [, month = '1', day = '1'] = openDate.split('-')
    const monthLabel = MONTHS_GENITIVE[Number(month) - 1] ?? ''
  
    return `${Number(day)} ${monthLabel}`
  }
  
  export const getGiftPath = (day: number): string => ROUTES.gift.replace(':day', String(day))