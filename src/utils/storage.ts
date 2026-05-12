import type { Lesson } from '../data/lessonTypes'

const activeLessonStorageKey = 'tailwindcss-practice-lab:active-lesson'
const completedLessonsStorageKey = 'tailwindcss-practice-lab:completed-lessons'

export type CompletedLessons = Record<string, boolean>

export function readStoredLessonId(lessons: Lesson[]) {
  const storedLessonId = readStorageItem(activeLessonStorageKey)

  if (storedLessonId && lessons.some((lesson) => lesson.id === storedLessonId)) {
    return storedLessonId
  }

  return lessons[0].id
}

export function writeStoredLessonId(lessonId: string) {
  writeStorageItem(activeLessonStorageKey, lessonId)
}

export function readCompletedLessons(): CompletedLessons {
  const storedCompletedLessons = readStorageItem(completedLessonsStorageKey)

  if (!storedCompletedLessons) {
    return {}
  }

  try {
    const parsed = JSON.parse(storedCompletedLessons) as unknown

    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {}
    }

    return Object.fromEntries(
      Object.entries(parsed).filter(([, value]) => typeof value === 'boolean'),
    ) as CompletedLessons
  } catch {
    return {}
  }
}

export function writeCompletedLessons(completedLessons: CompletedLessons) {
  writeStorageItem(completedLessonsStorageKey, JSON.stringify(completedLessons))
}

function readStorageItem(key: string) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorageItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage can be unavailable in private browsing or locked-down WebViews.
  }
}
