import type { RecipeItem, RecipeStep } from 'src/types/recipe.ts'

export const DAY_ONE_LETTER =
  'Этот день — про тихий вечер и кружку, от которой теплеют руки. Я знаю, как ты любишь, когда дома спокойно и уютно. Пусть это будет одним из поводов сегодня это ощутить!'

export const DAY_ONE_PRACTICE_LABEL = 'Задание дня'

export const DAY_ONE_PRACTICE_TITLE = 'Пять тёплых заметок'

export const DAY_ONE_PRACTICE_TEXT =
  'Мягкий вариант благодарности: внимание смещается с гонки мыслей на то, что уже согревает.'

export const DAY_ONE_PRACTICE_STEPS = [
  'За день поймай пять моментов, в которых стало хоть немного хорошо.',
  'Годится всё маленькое: вкус, свет, фраза, тепло пледа, чья-то улыбка.',
  'Вечером запиши их пятью короткими строками.',
] as const

export const DAY_ONE_RECIPE_LABEL = 'Рецепт'

export const DAY_ONE_RECIPE_TITLE = 'Какао с корицей и солью'

export const DAY_ONE_RECIPE_META = '1 кружка · 10 минут'

export const DAY_ONE_INGREDIENTS: RecipeItem[] = [
  { id: 'milk', name: 'Молоко', amount: '250 мл' },
  { id: 'cocoa', name: 'Какао', amount: '2 ч. л.' },
  { id: 'sugar', name: 'Сахар или мёд', amount: '2 ч. л.' },
  { id: 'salt', name: 'Соль', amount: 'щепотка' },
  { id: 'cinnamon', name: 'Корица', amount: 'щепотка' },
  { id: 'vanilla', name: 'Ваниль', amount: 'капля, по желанию' },
  { id: 'topping', name: 'Зефир или взбитые сливки', amount: 'для подачи' },
]

export const DAY_ONE_STEPS: RecipeStep[] = [
  {
    id: 'paste',
    text: 'Разотри какао, сахар, соль и корицу с двумя ложками молока до пасты без комочков.',
  },
  {
    id: 'heat',
    text: 'Влей остальное молоко и прогрей на слабом огне 4–5 минут, не доводя до кипения.',
  },
  {
    id: 'vanilla',
    text: 'Сними с огня и добавь каплю ванили.',
  },
  {
    id: 'serve',
    text: 'Перелей в кружку и положи сверху зефир, чтобы он чуть подтаял.',
  },
]

export const DAY_ONE_PLAYLIST_TEXT =
  'Музыка, которая поможет тебе расслабиться и насладиться вечером.'

export const DAY_ONE_PLAYLIST_URL =
  'https://music.yandex.com/playlists/326e2039-4c6e-b20b-8d61-a3c6ba4609b3'

export const DAY_ONE_PLAYLIST_LABEL = 'Открыть плейлист'
