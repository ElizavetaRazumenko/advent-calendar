import type { DivinationNight, DivinationStep } from './types.ts'

type Props = {
  label: string
  title: string
  text: string
  whenTitle: string
  nights: readonly DivinationNight[]
  howTitle: string
  howText: string
  steps: readonly DivinationStep[]
}

export const DivinationCard: React.FC<Props> = ({
  label,
  title,
  text,
  whenTitle,
  nights,
  howTitle,
  howText,
  steps,
}) => {
  return (
    <section className="rounded-3xl border border-gold/40 bg-cream px-5 py-6 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <p className="text-xs font-medium tracking-[0.22em] text-burgundy uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl leading-none font-semibold text-balance sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-pretty sm:text-base">{text}</p>
      <h3 className="mt-6 font-display text-2xl leading-none font-semibold">{whenTitle}</h3>
      <ul className="mt-3">
        {nights.map((night) => (
          <li key={night.id} className="border-b border-burgundy/15 py-3 last:border-b-0">
            <p className="text-sm font-medium leading-relaxed sm:text-base">{night.date}</p>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-burgundy sm:text-base">{night.text}</p>
          </li>
        ))}
      </ul>
      <h3 className="mt-6 font-display text-2xl leading-none font-semibold">{howTitle}</h3>
      <p className="mt-3 text-sm leading-relaxed text-pretty sm:text-base">{howText}</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li key={step.id} className="flex gap-3 text-sm leading-relaxed sm:text-base">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-burgundy text-xs font-semibold text-cream">
              {index + 1}
            </span>
            <span className="text-pretty">{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
