type Props = {
  text: string
}

export const LetterCard: React.FC<Props> = ({ text }) => {
  return (
    <section
      aria-label="Письмо"
      className="relative overflow-hidden rounded-3xl border border-gold/80 bg-burgundy px-5 py-8 text-cream shadow-[0_16px_40px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2.5 rounded-[1.15rem] border border-gold/40 sm:inset-3"
      />
      <div aria-hidden="true" className="relative mb-5 flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-10 bg-gold/70" />
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current">
          <path d="M8 0 9.4 6.1 16 8 9.4 9.9 8 16 6.6 9.9 0 8 6.6 6.1 8 0Z" />
        </svg>
        <span className="h-px w-10 bg-gold/70" />
      </div>
      <p className="relative font-display text-2xl leading-snug font-medium text-pretty text-cream sm:text-[1.75rem]">
        {text}
      </p>
    </section>
  )
}
