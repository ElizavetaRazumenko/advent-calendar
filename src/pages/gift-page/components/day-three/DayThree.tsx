import { DayHero } from 'src/components/common/day-hero/DayHero.tsx'
import { LetterCard } from 'src/components/common/letter-card/LetterCard.tsx'
import { formatOpenLabel } from 'src/helpers/dates.ts'
import type { AdventDay } from 'src/types/main.ts'
import { ChecklistCard } from './components/checklist-card/ChecklistCard.tsx'
import { SquadCard } from './components/squad-card/SquadCard.tsx'
import {
  DAY_THREE_CHECKLIST_ITEMS,
  DAY_THREE_CHECKLIST_LABEL,
  DAY_THREE_CHECKLIST_QUOTE,
  DAY_THREE_CHECKLIST_TEXT,
  DAY_THREE_CHECKLIST_TITLE,
  DAY_THREE_LETTER,
  DAY_THREE_SQUAD_ITEMS,
  DAY_THREE_SQUAD_TITLE,
} from './constants.ts'

type Props = {
  day: AdventDay
}

export const DayThree: React.FC<Props> = ({ day }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <DayHero day={day.day} dateLabel={formatOpenLabel(day.openDate)} title={day.title} />
      <LetterCard text={DAY_THREE_LETTER} />
      <ChecklistCard
        label={DAY_THREE_CHECKLIST_LABEL}
        title={DAY_THREE_CHECKLIST_TITLE}
        text={DAY_THREE_CHECKLIST_TEXT}
        items={DAY_THREE_CHECKLIST_ITEMS}
        quote={DAY_THREE_CHECKLIST_QUOTE}
      />
      <SquadCard title={DAY_THREE_SQUAD_TITLE} items={DAY_THREE_SQUAD_ITEMS} />
    </div>
  )
}
