import { useState } from 'react'
import type { Lesson } from '../data/lessonTypes'

export function ReviewView({
  lesson,
  completed,
  onComplete,
}: {
  lesson: Lesson
  completed: boolean
  onComplete: () => void
}) {
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({})

  return (
    <div className="mt-6 space-y-5">
      {lesson.review.map((item, index) => {
        const answerKey = `${lesson.id}-${index}`
        const isOpen = openAnswers[answerKey] ?? false

        return (
          <button
            key={item.question}
            type="button"
            aria-expanded={isOpen}
            onClick={() =>
              setOpenAnswers((current) => ({
                ...current,
                [answerKey]: !isOpen,
              }))
            }
            className="block w-full rounded-lg border border-slate-200 bg-slate-100 px-5 py-5 text-left shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <span className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
              <span className="pt-1 text-base font-bold text-sky-700">Q{index + 1}</span>
              <span className="text-medium min-w-0 font-medium leading-8 text-slate-950">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="pt-1 text-2xl font-medium leading-none text-sky-700"
              >
                {isOpen ? '-' : '+'}
              </span>
            </span>

            {isOpen ? (
              <span className="mt-4 block pl-0 sm:pl-[2.25rem]">
                <span className="block text-base leading-8 text-slate-500">
                  {item.answer}
                </span>
              </span>
            ) : null}
          </button>
        )
      })}

      <div className="flex justify-start border-t border-slate-200 pt-5">
        <button
          type="button"
          disabled={completed}
          onClick={onComplete}
          className={[
            'h-11 rounded-lg px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500',
            completed
              ? 'cursor-default bg-slate-200 text-slate-500'
              : 'bg-slate-950 text-white shadow-sm hover:bg-slate-800',
          ].join(' ')}
        >
          {completed ? '已完成' : '标记完成'}
        </button>
      </div>
    </div>
  )
}
