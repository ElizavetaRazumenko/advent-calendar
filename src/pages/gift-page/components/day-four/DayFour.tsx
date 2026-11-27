import { DayHero } from 'src/components/common/day-hero/DayHero.tsx'
import { LetterCard } from 'src/components/common/letter-card/LetterCard.tsx'
import { formatOpenLabel } from 'src/helpers/dates.ts'
import type { AdventDay } from 'src/types/main.ts'
import { DivinationCard } from './components/divination-card/DivinationCard.tsx'
import { FortuneCard } from './components/fortune-card/FortuneCard.tsx'
import {
  DAY_FOUR_DIVINATION_HOW,
  DAY_FOUR_DIVINATION_HOW_TEXT,
  DAY_FOUR_DIVINATION_LABEL,
  DAY_FOUR_DIVINATION_NIGHTS,
  DAY_FOUR_DIVINATION_STEPS,
  DAY_FOUR_DIVINATION_TEXT,
  DAY_FOUR_DIVINATION_TITLE,
  DAY_FOUR_DIVINATION_WHEN,
  DAY_FOUR_FORTUNE_LABEL,
  DAY_FOUR_FORTUNE_SLIPS,
  DAY_FOUR_FORTUNE_TEXT,
  DAY_FOUR_FORTUNE_TITLE,
  DAY_FOUR_LETTER,
} from './constants.ts'

type Props = {
  day: AdventDay
}

export const DayFour: React.FC<Props> = ({ day }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <DayHero day={day.day} dateLabel={formatOpenLabel(day.openDate)} title={day.title} />
      <LetterCard text={DAY_FOUR_LETTER} />
      <FortuneCard
        label={DAY_FOUR_FORTUNE_LABEL}
        title={DAY_FOUR_FORTUNE_TITLE}
        text={DAY_FOUR_FORTUNE_TEXT}
        slips={DAY_FOUR_FORTUNE_SLIPS}
      />
      <DivinationCard
        label={DAY_FOUR_DIVINATION_LABEL}
        title={DAY_FOUR_DIVINATION_TITLE}
        text={DAY_FOUR_DIVINATION_TEXT}
        whenTitle={DAY_FOUR_DIVINATION_WHEN}
        nights={DAY_FOUR_DIVINATION_NIGHTS}
        howTitle={DAY_FOUR_DIVINATION_HOW}
        howText={DAY_FOUR_DIVINATION_HOW_TEXT}
        steps={DAY_FOUR_DIVINATION_STEPS}
      />
    </div>
  )
}
