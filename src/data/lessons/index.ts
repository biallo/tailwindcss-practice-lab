import type { Lesson } from '../lessonTypes'
import { arbitraryValuesLesson } from './arbitraryValues'
import { ariaDataLesson } from './ariaData'
import { complexLayoutLesson } from './complexLayout'
import { componentsLesson } from './components'
import { containerQueriesLesson } from './containerQueries'
import { darkModeLesson } from './darkMode'
import { formsLesson } from './forms'
import { introLesson } from './intro'
import { layoutLesson } from './layout'
import { motionLesson } from './motion'
import { responsiveLesson } from './responsive'
import { setupLesson } from './setup'
import { stateLinkageLesson } from './stateLinkage'
import { statesLesson } from './states'
import { themeLesson } from './theme'

export const lessons: Lesson[] = [
  introLesson,
  setupLesson,
  layoutLesson,
  responsiveLesson,
  containerQueriesLesson,
  arbitraryValuesLesson,
  themeLesson,
  darkModeLesson,
  statesLesson,
  stateLinkageLesson,
  ariaDataLesson,
  formsLesson,
  motionLesson,
  complexLayoutLesson,
  componentsLesson,
]
