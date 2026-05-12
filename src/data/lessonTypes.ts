export type CodeLine = {
  code: string
  note?: string
  emphasis?: boolean
}

export type CodeSample = {
  title: string
  language: string
  caption: string
  lines: CodeLine[]
}

export type ReviewQuestion = {
  question: string
  answer: string
}

export type Lesson = {
  id: string
  order: string
  title: string
  summary: string
  tags: string[]
  explain: string[]
  samples: CodeSample[]
  review: ReviewQuestion[]
}
