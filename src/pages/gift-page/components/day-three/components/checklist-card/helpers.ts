import { STORAGE_KEY } from "./constants";

export const readChecked = (ids: readonly string[]): Record<string, boolean> => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
  
      if (!raw) {
        return {}
      }
  
      const parsed: unknown = JSON.parse(raw)
  
      if (!parsed || typeof parsed !== 'object') {
        return {}
      }
  
      const allowed = new Set(ids)
      const checked: Record<string, boolean> = {}
  
      for (const [id, value] of Object.entries(parsed)) {
        if (allowed.has(id) && value === true) {
          checked[id] = true
        }
      }
  
      return checked
    } catch {
      return {}
    }
  }
  
export const writeChecked = (checked: Record<string, boolean>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
    } catch {
      return
    }
  }