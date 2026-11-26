import { SNOWFLAKES } from './constants.ts'

export const Snowfall: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {SNOWFLAKES.map((flake) => (
        <span
          key={flake.id}
          className="snowflake absolute top-0 block rounded-full bg-white"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
          }}
        />
      ))}
    </div>
  )
}
