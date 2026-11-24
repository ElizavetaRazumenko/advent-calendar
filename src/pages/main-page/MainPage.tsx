import { ADVENT_DAYS, MAIN_SUBTITLE, MAIN_TITLE } from './constants.ts'
import { CalendarCard } from './components/calendar-card/CalendarCard.tsx'
import { Snowfall } from './components/snowfall/Snowfall.tsx'
import { getAdventDayStatus } from './helpers.ts'

export const MainPage = () => {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <Snowfall />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-medium tracking-[0.28em] text-gold uppercase sm:text-sm">
            17–31 декабря
          </p>
          <h1 className="font-display text-[2.6rem] leading-none font-semibold text-balance text-cream sm:text-6xl lg:text-7xl">
            {MAIN_TITLE}
          </h1>
          <div className="mx-auto mt-5 h-px w-24 bg-gold/70" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-pretty text-cream/80 sm:text-lg">
            {MAIN_SUBTITLE}
          </p>
        </header>
        <ul className="grid grid-cols-2 gap-3 max-[340px]:grid-cols-1 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {ADVENT_DAYS.map((day) => (
            <li key={day.day} className="h-full">
              <CalendarCard day={day} status={getAdventDayStatus(day.openDate)} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
