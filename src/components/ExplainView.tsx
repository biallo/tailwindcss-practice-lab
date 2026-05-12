import type { Lesson } from '../data/lessonTypes'
import { CodeBlock } from './CodeBlock'

export function ExplainView({ lesson }: { lesson: Lesson }) {
  return (
    <div className="mt-6 space-y-7">
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-base font-semibold text-slate-950">课程讲解</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {lesson.explain.map((paragraph, index) => (
            <article
              key={paragraph}
              className="grid gap-3 px-5 py-5 sm:grid-cols-[2rem_1fr]"
            >
              <span className="grid size-8 place-items-center rounded-md bg-sky-50 text-sm font-semibold text-sky-700">
                {index + 1}
              </span>
              <p className="max-w-3xl text-base leading-8 text-slate-700">{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        {lesson.samples.map((sample) => (
          <CodeBlock key={sample.title} sample={sample} />
        ))}
      </section>
    </div>
  )
}
