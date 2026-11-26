import { DayHero } from 'src/components/common/day-hero/DayHero.tsx'
import { LetterCard } from 'src/components/common/letter-card/LetterCard.tsx'
import { PracticeCard } from 'src/components/common/practice-card/PracticeCard.tsx'
import { RecipeCard } from 'src/components/common/recipe-card/RecipeCard.tsx'
import { formatOpenLabel } from 'src/helpers/dates.ts'
import type { AdventDay } from 'src/types/main.ts'
import {
  DAY_TWO_LETTER,
  DAY_TWO_PRACTICE_LABEL,
  DAY_TWO_PRACTICE_STEPS,
  DAY_TWO_PRACTICE_TEXT,
  DAY_TWO_PRACTICE_TITLE,
  DAY_TWO_RITUAL_ITEMS,
  DAY_TWO_RITUAL_LABEL,
  DAY_TWO_RITUAL_META,
  DAY_TWO_RITUAL_STEPS,
  DAY_TWO_RITUAL_TITLE,
} from './constants.ts'

type Props = {
  day: AdventDay
}

export const DayTwo: React.FC<Props> = ({ day }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <DayHero day={day.day} dateLabel={formatOpenLabel(day.openDate)} title={day.title} />
      <LetterCard text={DAY_TWO_LETTER} />
      <PracticeCard
        label={DAY_TWO_PRACTICE_LABEL}
        title={DAY_TWO_PRACTICE_TITLE}
        text={DAY_TWO_PRACTICE_TEXT}
        steps={DAY_TWO_PRACTICE_STEPS}
      />
      <RecipeCard
        label={DAY_TWO_RITUAL_LABEL}
        title={DAY_TWO_RITUAL_TITLE}
        meta={DAY_TWO_RITUAL_META}
        items={DAY_TWO_RITUAL_ITEMS}
        steps={DAY_TWO_RITUAL_STEPS}
      />
    </div>
  )
}
