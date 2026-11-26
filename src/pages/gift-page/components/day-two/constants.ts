import type { RecipeItem, RecipeStep } from 'src/types/recipe.ts'

export const DAY_TWO_LETTER =
  'Тепло не обязано быть большим. Иногда ему достаточно двух ладоней.'

export const DAY_TWO_PRACTICE_LABEL = 'Задание дня'

export const DAY_TWO_PRACTICE_TITLE = 'Экспресс-согревание'

export const DAY_TWO_PRACTICE_TEXT = 'Три движения подряд, когда ладони уже стынут.'

export const DAY_TWO_PRACTICE_STEPS = [
  'Монетка. Потри ладони друг о друга около 20 секунд.',
  'Круг. Мягко покрути запястьями по 8 раз в каждую сторону.',
  'Веер. Широко раскрой пальцы, сожми в кулак и снова раскрой, 8 раз.',
] as const

export const DAY_TWO_RITUAL_LABEL = 'Ритуал'

export const DAY_TWO_RITUAL_TITLE = 'Тёплые ладони'

export const DAY_TWO_RITUAL_META = '7 минут · вечером'

export const DAY_TWO_RITUAL_ITEMS: RecipeItem[] = [
  { id: 'warmer', name: 'Электрическая грелка', amount: 'включённая' },
  { id: 'cream', name: 'Крем для рук', amount: 'горошина' },
  { id: 'water', name: 'Тёплая вода', amount: 'чтобы ополоснуть руки' },
  { id: 'towel', name: 'Полотенце', amount: 'мягкое' },
]

export const DAY_TWO_RITUAL_STEPS: RecipeStep[] = [
  {
    id: 'rinse',
    text: 'Ополосни руки тёплой водой и промокни полотенцем, не растирая досуха.',
  },
  {
    id: 'heat',
    text: 'Включи грелку и дай ей нагреться.',
  },
  {
    id: 'cream',
    text: 'Нанеси крем на чуть влажную кожу и пройдись по ладоням, костяшкам, запястьям и кончикам пальцев.',
  },
  {
    id: 'hold',
    text: 'Подержи грелку в ладонях пару минут. Держи её так, как написано в инструкции, и не прижимай очень горячую поверхность к коже с кремом.',
  },
]
