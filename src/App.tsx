import { useEffect, useMemo, useRef, useState } from 'react'
import { ExplainView } from './components/ExplainView'
import { LessonHeader } from './components/LessonHeader'
import { ProgressMeter } from './components/ProgressMeter'
import { ReviewView } from './components/ReviewView'
import { TabButton } from './components/TabButton'
import { lessons } from './data/lessons'
import {
  readCompletedLessons,
  readStoredLessonId,
  writeCompletedLessons,
  writeStoredLessonId,
  type CompletedLessons,
} from './utils/storage'

type LessonTab = 'explain' | 'review'

function App() {
  const lessonButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [activeLessonId, setActiveLessonId] = useState(() => readStoredLessonId(lessons))
  const [activeTab, setActiveTab] = useState<LessonTab>('explain')
  const [completedLessons, setCompletedLessons] =
    useState<CompletedLessons>(readCompletedLessons)

  const activeLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === activeLessonId) ?? lessons[0],
    [activeLessonId],
  )
  const isCompleted = completedLessons[activeLesson.id] ?? false
  const completedCount = lessons.filter((lesson) => completedLessons[lesson.id]).length
  const progressPercent = Math.round((completedCount / lessons.length) * 100)

  useEffect(() => {
    writeStoredLessonId(activeLesson.id)
  }, [activeLesson.id])

  useEffect(() => {
    writeCompletedLessons(completedLessons)
  }, [completedLessons])

  useEffect(() => {
    lessonButtonRefs.current[activeLesson.id]?.scrollIntoView({
      block: 'center',
      inline: 'nearest',
    })
  }, [activeLesson.id])

  function selectLesson(lessonId: string) {
    setActiveLessonId(lessonId)
    setActiveTab('explain')
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 lg:grid lg:grid-cols-[340px_1fr]">
      <aside className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur lg:h-screen lg:border-r lg:border-b-0">
        <div className="flex h-full flex-col">
          <header className="border-b border-slate-200 px-4 py-4 sm:px-5">
            <div className="flex items-center gap-3">
              <img
                src="./favicons/favicon-32x32.png"
                alt=""
                className="size-8 rounded-md"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-950">Tailwind CSS</p>
                <p className="truncate text-xs text-slate-500">Practice Lab</p>
              </div>
            </div>
            <ProgressMeter
              completedCount={completedCount}
              progressPercent={progressPercent}
              totalCount={lessons.length}
            />
          </header>

          <div className="px-4 py-3 sm:px-5 lg:hidden">
            <label htmlFor="lesson-select" className="sr-only">
              选择课程
            </label>
            <select
              id="lesson-select"
              value={activeLesson.id}
              onChange={(event) => selectLesson(event.target.value)}
              className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
            >
              {lessons.map((lesson) => (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.order}. {lesson.title}
                </option>
              ))}
            </select>
          </div>

          <nav
            aria-label="课程列表"
            className="hidden px-5 py-4 lg:block lg:flex-1 lg:space-y-2 lg:overflow-y-auto"
          >
            {lessons.map((lesson) => {
              const isActive = lesson.id === activeLesson.id

              return (
                <button
                  key={lesson.id}
                  ref={(node) => {
                    lessonButtonRefs.current[lesson.id] = node
                  }}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => selectLesson(lesson.id)}
                  className={[
                    'group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_1.25rem] gap-3 rounded-lg border p-3 text-left transition',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500',
                    isActive
                      ? 'border-sky-200 bg-sky-50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'grid size-10 place-items-center rounded-md text-xs font-semibold',
                      isActive
                        ? 'bg-sky-500 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200',
                    ].join(' ')}
                  >
                    {lesson.order}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-slate-950">
                      {lesson.title}
                    </span>
                    <span className="block truncate text-xs leading-5 text-slate-500">
                      {lesson.summary}
                    </span>
                  </span>
                  <span className="flex justify-end items-center pt-0.5">
                    {completedLessons[lesson.id] ? (
                      <span className="grid size-5 place-items-center rounded-full bg-sky-500 text-xs font-bold text-white">
                        ✓
                      </span>
                    ) : null}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      </aside>

      <section className="min-w-0 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <div className="mx-auto max-w-5xl">
          <LessonHeader lesson={activeLesson} />

          <div className="mt-6 flex w-full max-w-sm rounded-lg border border-slate-200 bg-white p-1">
            <TabButton
              active={activeTab === 'explain'}
              label="讲解"
              onClick={() => setActiveTab('explain')}
            />
            <TabButton
              active={activeTab === 'review'}
              label="复盘"
              onClick={() => setActiveTab('review')}
            />
          </div>

          {activeTab === 'explain' ? (
            <ExplainView lesson={activeLesson} />
          ) : (
            <ReviewView
              lesson={activeLesson}
              completed={isCompleted}
              onComplete={() =>
                setCompletedLessons((current) => ({
                  ...current,
                  [activeLesson.id]: true,
                }))
              }
            />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
