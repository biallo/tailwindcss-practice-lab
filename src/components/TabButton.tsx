export function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-selected={active}
      onClick={onClick}
      className={[
        'h-10 flex-1 rounded-md px-3 text-sm font-semibold transition',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500',
        active ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
