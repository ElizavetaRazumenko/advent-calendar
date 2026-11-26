type Props = {
  label: string
  title: string
  text: string
  steps: readonly string[]
}

export const PracticeCard: React.FC<Props> = ({ label, title, text, steps }) => {
  return (
    <section className="rounded-3xl border border-[#c6a15c] bg-gold px-5 py-6 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <div aria-hidden="true" className="mb-4 h-1 w-12 rounded-full bg-burgundy" />
      <p className="text-xs font-medium tracking-[0.22em] text-burgundy uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl leading-none font-semibold text-balance sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-pretty sm:text-base">{text}</p>
      <ol className="mt-5 space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm leading-relaxed sm:text-base">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-burgundy text-xs font-semibold text-cream">
              {index + 1}
            </span>
            <span className="text-pretty">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
