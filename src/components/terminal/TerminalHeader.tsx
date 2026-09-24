import { clsx } from 'clsx'

interface TerminalHeaderProps {
  command: string
  className?: string
}

export function TerminalHeader({ command, className }: TerminalHeaderProps) {
  return (
    <div
      className={clsx(
        'font-mono text-sm md:text-base select-none mb-6',
        className
      )}
    >
      <span className="text-muted">arthur@portfolio</span>
      <span className="text-muted">:</span>
      <span className="text-accent">~</span>
      <span className="text-muted">$ </span>
      <span className="text-fg">{command}</span>
    </div>
  )
}