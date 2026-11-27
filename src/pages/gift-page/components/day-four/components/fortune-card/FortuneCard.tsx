import type { FortuneSlip } from './types.ts'
import { useFortune } from './useFortune.ts'

type Props = {
  label: string
  title: string
  text: string
  slips: readonly FortuneSlip[]
}

export const FortuneCard: React.FC<Props> = ({ label, title, text, slips }) => {
  const { order, opened, open } = useFortune(slips)

  return (
    <section className="rounded-3xl border border-[#c6a15c] bg-gold px-5 py-6 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <div aria-hidden="true" className="mb-4 h-1 w-12 rounded-full bg-burgundy" />
      <p className="text-xs font-medium tracking-[0.22em] text-burgundy uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl leading-none font-semibold text-balance sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-pretty sm:text-base">{text}</p>
      <ul className="mt-5 space-y-3">
        {order.map((slip, index) => {
          const isOpened = Boolean(opened[slip.id])

          return (
            <li key={slip.id}>
              <button
                type="button"
                aria-pressed={isOpened}
                onClick={() => open(slip.id)}
                className={
                  isOpened
                    ? 'min-h-11 w-full rounded-2xl border border-burgundy bg-cream px-4 py-3 text-left font-display text-xl leading-snug font-medium text-pretty text-burgundy focus-visible:ring-2 focus-visible:ring-burgundy/40'
                    : 'min-h-11 w-full rounded-2xl border border-burgundy/35 bg-cream/70 px-4 py-3 text-left text-sm font-medium text-ink transition hover:border-burgundy hover:bg-cream focus-visible:ring-2 focus-visible:ring-burgundy/40'
                }
              >
                {isOpened ? slip.text : `Бумажка ${index + 1}`}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
