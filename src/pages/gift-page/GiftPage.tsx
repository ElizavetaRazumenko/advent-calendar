import { useParams } from 'react-router-dom'
import { Snowfall } from 'src/components/common/snowfall/Snowfall.tsx'
import { BackLink } from './components/back-link/BackLink.tsx'
import { DayPlaceholder } from './components/day-placeholder/DayPlaceholder.tsx'
import { getGiftDay } from './helpers.ts'
import { GIFT_DAY_VIEWS } from './constants.ts';

export const GiftPage: React.FC = () => {
  const { day } = useParams()
  const adventDay = getGiftDay(day)
  const DayView = adventDay ? GIFT_DAY_VIEWS[adventDay.day] : undefined

  return (
    <main className="relative min-h-svh overflow-hidden">
      <Snowfall />
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col px-4 pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-10">
        <BackLink />
        {DayView && adventDay ? <DayView day={adventDay} /> : <DayPlaceholder />}
      </div>
    </main>
  )
}
