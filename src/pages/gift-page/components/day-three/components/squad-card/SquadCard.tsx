import type { SquadItem } from "./types";

type Props = {
  title: string
  items: readonly SquadItem[]
}

export const SquadCard: React.FC<Props> = ({ title, items }) => {
  return (
    <section className="rounded-3xl border border-gold/40 bg-cream px-5 py-6 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <h2 className="font-display text-3xl leading-none font-semibold text-balance sm:text-4xl">{title}</h2>
      <ul className="mt-5">
        {items.map((item) => (
          <li key={item.id} className="border-b border-burgundy/15 py-3 last:border-b-0">
            <p className="text-sm font-medium leading-relaxed sm:text-base">{item.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-burgundy sm:text-base">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
