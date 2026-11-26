import type { CocoaIngredient, CocoaStep } from '../../types.ts'

type Props = {
  label: string
  title: string
  meta: string
  ingredients: readonly CocoaIngredient[]
  steps: readonly CocoaStep[]
}

export const CocoaRecipe = ({ label, title, meta, ingredients, steps }: Props) => {
  return (
    <section className="rounded-3xl border border-gold/40 bg-cream px-5 py-6 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <p className="text-xs font-medium tracking-[0.22em] text-burgundy uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl leading-none font-semibold text-balance sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-burgundy sm:text-base">{meta}</p>
      <ul className="mt-5">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-baseline justify-between gap-3 border-b border-burgundy/15 py-2.5 last:border-b-0"
          >
            <span className="text-sm leading-relaxed sm:text-base">{ingredient.name}</span>
            <span className="shrink-0 text-sm text-burgundy sm:text-base">{ingredient.amount}</span>
          </li>
        ))}
      </ul>
      <ol className="mt-5 space-y-3">
        {steps.map((step, index) => (
          <li key={step.id} className="flex gap-3 text-sm leading-relaxed sm:text-base">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-burgundy text-xs font-semibold text-cream">
              {index + 1}
            </span>
            <span className="text-pretty">{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
