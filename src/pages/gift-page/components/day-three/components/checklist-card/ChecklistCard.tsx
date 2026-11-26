import type { ChecklistItem } from './types.ts';
import { useChecklist } from './useChecklist.ts'

type Props = {
  label: string
  title: string
  text: string
  items: readonly ChecklistItem[]
  quote: string
}

export const ChecklistCard: React.FC<Props> = ({ label, title, text, items, quote }) => {
  const { checked, toggle } = useChecklist(items.map((item) => item.id))

  return (
    <section className="rounded-3xl border border-[#c6a15c] bg-gold px-5 py-6 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <div aria-hidden="true" className="mb-4 h-1 w-12 rounded-full bg-burgundy" />
      <p className="text-xs font-medium tracking-[0.22em] text-burgundy uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl leading-none font-semibold text-balance sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-pretty sm:text-base">{text}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => {
          const isChecked = Boolean(checked[item.id])

          return (
            <li key={item.id}>
              <label className="flex cursor-pointer gap-3 text-sm leading-relaxed sm:text-base">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                />
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-burgundy/40 text-transparent peer-checked:border-burgundy peer-checked:bg-burgundy peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-burgundy/40">
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
                    <path
                      d="M3.2 8.4 6.3 11.4 12.8 4.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className={isChecked ? 'text-pretty line-through decoration-burgundy/40' : 'text-pretty'}>
                  {item.label}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
      <p className="mt-6 border-t border-burgundy/15 pt-5 font-display text-2xl leading-snug font-medium text-pretty text-burgundy sm:text-3xl">
        {quote}
      </p>
    </section>
  )
}
