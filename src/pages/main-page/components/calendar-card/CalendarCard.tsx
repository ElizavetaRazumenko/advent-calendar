import type React from 'react';
import { Link } from 'react-router-dom'
import { formatOpenLabel, getGiftPath } from './helpers.ts'
import type { AdventDay, AdventDayStatus } from 'src/types/main.ts'
import { Ribbon } from './components/ribbon/Ribbon.tsx';

type Props = {
  day: AdventDay
  status: AdventDayStatus
}

export const CalendarCard: React.FC<Props> = ({ day, status }) => {
  const isBerry = day.day % 2 === 0
  const openLabel = formatOpenLabel(day.openDate)
  const isAvailable = status !== 'locked'

  const faceClassName = [
    'relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-3xl border p-4 text-left transition',
    isAvailable
      ? 'border-gold/80 bg-cream text-ink shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold'
      : isBerry
        ? 'border-gold/35 bg-[#72283a] text-cream'
        : 'border-gold/35 bg-[#1b4a3b] text-cream',
    status === 'today' ? 'ring-2 ring-gold ring-offset-2 ring-offset-pine-deep' : '',
  ].join(' ')

  const content = (
    <>
      {!isAvailable && <Ribbon />}
      {status === 'today' && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-burgundy px-2.5 py-1 text-[11px] font-semibold tracking-wide text-cream uppercase">
          Сегодня
        </span>
      )}
      <div className="relative z-10">
        <span className="font-display text-4xl leading-none font-semibold sm:text-5xl lg:text-6xl">
          {day.day}
        </span>
      </div>
      <div className="relative z-10">
        {isAvailable ? (
          <>
            <p className="text-sm leading-snug font-medium">{day.title}</p>
            <p className="mt-2 text-xs tracking-wide text-burgundy">Открыть</p>
          </>
        ) : (
          <p className="text-xs tracking-wide text-cream/75">{openLabel}</p>
        )}
      </div>
    </>
  )

  if (!isAvailable) {
    return (
      <div className={faceClassName} aria-label={`День ${day.day}, откроется ${openLabel}`}>
        {content}
      </div>
    )
  }

  return (
    <Link to={getGiftPath(day.day)} className={faceClassName} aria-label={`День ${day.day}: ${day.title}`}>
      {content}
    </Link>
  )
}
