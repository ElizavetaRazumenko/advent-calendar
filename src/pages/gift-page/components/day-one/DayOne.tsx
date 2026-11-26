import { LetterCard } from 'src/components/common/letter-card/LetterCard.tsx'
import { PracticeCard } from 'src/components/common/practice-card/PracticeCard.tsx'
import { formatOpenLabel } from 'src/helpers/dates.ts'
import type { AdventDay } from 'src/types/main.ts'
import { CocoaRecipe } from './components/cocoa-recipe/CocoaRecipe.tsx'
import { DayHero } from './components/day-hero/DayHero.tsx'
import { PlaylistCard } from './components/playlist-card/PlaylistCard.tsx'
import {
  DAY_ONE_INGREDIENTS,
  DAY_ONE_LETTER,
  DAY_ONE_PLAYLIST_LABEL,
  DAY_ONE_PLAYLIST_TEXT,
  DAY_ONE_PLAYLIST_URL,
  DAY_ONE_PRACTICE_LABEL,
  DAY_ONE_PRACTICE_STEPS,
  DAY_ONE_PRACTICE_TEXT,
  DAY_ONE_PRACTICE_TITLE,
  DAY_ONE_RECIPE_LABEL,
  DAY_ONE_RECIPE_META,
  DAY_ONE_RECIPE_TITLE,
  DAY_ONE_STEPS,
} from './constants.ts'

type Props = {
  day: AdventDay
}

export const DayOne = ({ day }: Props) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <DayHero day={day.day} dateLabel={formatOpenLabel(day.openDate)} title={day.title} />
      <LetterCard text={DAY_ONE_LETTER} />
      <PracticeCard
        label={DAY_ONE_PRACTICE_LABEL}
        title={DAY_ONE_PRACTICE_TITLE}
        text={DAY_ONE_PRACTICE_TEXT}
        steps={DAY_ONE_PRACTICE_STEPS}
      />
      <CocoaRecipe
        label={DAY_ONE_RECIPE_LABEL}
        title={DAY_ONE_RECIPE_TITLE}
        meta={DAY_ONE_RECIPE_META}
        ingredients={DAY_ONE_INGREDIENTS}
        steps={DAY_ONE_STEPS}
      />
      <PlaylistCard text={DAY_ONE_PLAYLIST_TEXT} href={DAY_ONE_PLAYLIST_URL} linkLabel={DAY_ONE_PLAYLIST_LABEL} />
    </div>
  )
}
