import type { Lesson } from '../lessonTypes'
import { componentsLesson } from './components'
import { introLesson } from './intro'
import { layoutLesson } from './layout'
import { responsiveLesson } from './responsive'
import { statesLesson } from './states'
import { themeLesson } from './theme'

export const lessons: Lesson[] = [
  introLesson,
  layoutLesson,
  responsiveLesson,
  statesLesson,
  themeLesson,
  componentsLesson,
]
