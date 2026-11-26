type Props = {
  text: string
  href: string
  linkLabel: string
}

export const PlaylistCard = ({ text, href, linkLabel }: Props) => {
  return (
    <section className="rounded-3xl border border-gold/50 bg-[#1b4a3b] px-5 py-6 text-cream shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8">
      <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">Плейлист</p>
      <p className="mt-3 font-display text-2xl leading-snug font-medium text-pretty sm:text-3xl">{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex min-h-11 w-full items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-ink transition hover:bg-cream"
      >
        {linkLabel}
      </a>
    </section>
  )
}
