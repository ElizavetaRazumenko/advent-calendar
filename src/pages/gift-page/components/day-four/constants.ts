import type { DivinationNight, DivinationStep } from './components/divination-card/types.ts'
import type { FortuneSlip } from './components/fortune-card/types.ts'

export const DAY_FOUR_LETTER =
  'Предсказание не обязано сбываться. Иногда ему достаточно согреть.'

export const DAY_FOUR_FORTUNE_LABEL = 'Задание дня'

export const DAY_FOUR_FORTUNE_TITLE = 'В следующем году тебя ждёт…'

export const DAY_FOUR_FORTUNE_TEXT = 'Пять бумажек. Открывай в любом порядке.'

export const DAY_FOUR_FORTUNE_SLIPS: readonly FortuneSlip[] = [
  { id: 'practice', text: '…тренировка, за которую тебя так никто и не выведет из себя.' },
  { id: 'apartment', text: '…квартира. С учётом дорожания — все три квадратных метра.' },
  { id: 'parents', text: '…поездка к родителям без единой ссоры. Даже через два дня пребывания.' },
  { id: 'formation', text: '…идеально натянутый носок у всех детей. Проверь, не мираж ли...' },
  { id: 'encore', text: '…есть и не толстеть. Но только кушая низкокалорийную еду и тренируясь!' },
]

export const DAY_FOUR_DIVINATION_LABEL = 'Гадание'

export const DAY_FOUR_DIVINATION_TITLE = 'Рождественское гадание'

export const DAY_FOUR_DIVINATION_TEXT =
  'Его делают в Святки: от вечера 6 января, когда зажигается первая звезда, до Крещения 19 января. Самое верное время — ночь, ближе к полуночи.'

export const DAY_FOUR_DIVINATION_WHEN = 'Когда'

export const DAY_FOUR_DIVINATION_NIGHTS: readonly DivinationNight[] = [
  {
    id: 'christmas',
    date: '6 января',
    text: 'Рождественский сочельник. Гадают вечером, в ночь на Рождество.',
  },
  {
    id: 'basil',
    date: '13 января',
    text: 'Васильев вечер. Канун старого Нового года, ночь на 14 января.',
  },
  {
    id: 'epiphany',
    date: '18 января',
    text: 'Крещенский сочельник. Последний такой вечер, ночь на Крещение.',
  },
]

export const DAY_FOUR_DIVINATION_HOW = 'Как'

export const DAY_FOUR_DIVINATION_HOW_TEXT =
  'Дома — в тихой комнате и при свече. Один из старых способов — на бумажках.'

export const DAY_FOUR_DIVINATION_STEPS: readonly DivinationStep[] = [
  { id: 'question', text: 'Задай один вопрос.' },
  { id: 'write', text: 'Напиши ответы на отдельных бумажках и скомкай каждую.' },
  { id: 'mix', text: 'Положи их в миску и перемешай.' },
  { id: 'draw', text: 'Вытяни одну, не глядя.' },
]
