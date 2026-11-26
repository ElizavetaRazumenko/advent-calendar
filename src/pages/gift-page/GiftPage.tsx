import { useParams } from 'react-router-dom'
import { Snowfall } from 'src/components/common/snowfall/Snowfall.tsx'
import { BackLink } from './components/back-link/BackLink.tsx'
import { DayOne } from './components/day-one/DayOne.tsx'
import { DayPlaceholder } from './components/day-placeholder/DayPlaceholder.tsx'
import { getGiftDay } from './helpers.ts'

export const GiftPage = () => {
  const { day } = useParams()
  const adventDay = getGiftDay(day)

  return (
    <main className="relative min-h-svh overflow-hidden">
      <Snowfall />
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col px-4 pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-10">
        <BackLink />
        {adventDay?.day === 1 ? <DayOne day={adventDay} /> : <DayPlaceholder />}
      </div>
    </main>
  )
}
