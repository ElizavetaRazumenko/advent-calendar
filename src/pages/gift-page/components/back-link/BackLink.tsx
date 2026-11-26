import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants/routes.ts'

export const BackLink = () => {
  return (
    <Link
      to={ROUTES.main}
      className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-cream/80 transition hover:text-gold"
    >
      <span aria-hidden="true">←</span>
      К календарю
    </Link>
  )
}
