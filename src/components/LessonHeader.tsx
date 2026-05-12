import type { Lesson } from '../data/lessonTypes'

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  return (
    <header className="border-b border-slate-200 pb-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
          Lesson {lesson.order}
        </span>
        {lesson.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="mt-5 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
        {lesson.title}
      </h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
        {lesson.summary}
      </p>
    </header>
  )
}
