export function ProgressMeter({
  completedCount,
  progressPercent,
  totalCount,
}: {
  completedCount: number
  progressPercent: number
  totalCount: number
}) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-3 text-xs font-medium text-slate-600">
        <span>课程完成进度</span>
        <span>
          {completedCount}/{totalCount}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-sky-500 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  )
}
