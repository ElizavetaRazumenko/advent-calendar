type Props = {
  day: number
  dateLabel: string
  title: string
}

export const DayHero = ({ day, dateLabel, title }: Props) => {
  return (
    <header className="px-2 pb-2 text-center">
      <p className="font-display text-6xl leading-none font-semibold text-gold">{day}</p>
      <p className="mt-4 text-xs font-medium tracking-[0.28em] text-gold uppercase">{dateLabel}</p>
      <h1 className="mt-3 font-display text-[2.6rem] leading-none font-semibold text-balance text-cream sm:text-5xl">
        {title}
      </h1>
      <div className="mx-auto mt-5 h-px w-16 bg-gold/70" />
    </header>
  )
}
