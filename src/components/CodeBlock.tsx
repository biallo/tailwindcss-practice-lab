import type { ReactNode } from 'react'
import type { CodeSample } from '../data/lessonTypes'

export function CodeBlock({ sample }: { sample: CodeSample }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-white">{sample.title}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">{sample.caption}</p>
        </div>
        <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold uppercase text-slate-300">
          {sample.language}
        </span>
      </figcaption>
      <div className="overflow-x-auto">
        <pre className="min-w-full p-0 text-sm leading-6">
          <code>
            {sample.lines.map((line, index) => (
              <span
                key={`${line.code}-${index}`}
                className={[
                  'grid min-w-full grid-cols-[3rem_minmax(0,1fr)] gap-x-4 px-4',
                  line.emphasis ? 'bg-sky-400/10' : '',
                ].join(' ')}
              >
                <span className="select-none text-right text-slate-600">{index + 1}</span>
                <span className="whitespace-pre-wrap break-words text-slate-100">
                  {highlight(line.code)}
                </span>
                {line.note ? (
                  <>
                    <span />
                    <span className="pb-1 text-xs leading-5 text-sky-200">
                      // {line.note}
                    </span>
                  </>
                ) : null}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  )
}

function highlight(code: string): ReactNode {
  if (!code) {
    return ' '
  }

  const commentIndex = findCommentIndex(code)
  const beforeComment = commentIndex >= 0 ? code.slice(0, commentIndex) : code
  const comment = commentIndex >= 0 ? code.slice(commentIndex) : ''

  return (
    <>
      {tokenize(beforeComment)}
      {comment ? <span className="text-emerald-300">{comment}</span> : null}
    </>
  )
}

function findCommentIndex(code: string) {
  const slash = code.indexOf('//')
  const block = code.indexOf('/*')

  if (slash === -1) {
    return block
  }

  if (block === -1) {
    return slash
  }

  return Math.min(slash, block)
}

function tokenize(code: string) {
  const tokenPattern =
    /("[^"]*"|'[^']*'|`[^`]*`|\b(?:aria-selected|className|const|export|from|function|import|return|type)\b|@(?:import|theme|utility|source|variant)|<\/?[A-Z][\w.]*)/g
  const parts = code.split(tokenPattern)

  return parts.map((part, index) => {
    if (!part) {
      return null
    }

    let className = 'text-slate-100'

    if (/^["'`]/.test(part)) {
      className = 'text-amber-200'
    } else if (/^(?:className|aria-selected|const|export|from|function|import|return|type)$/.test(part)) {
      className = 'text-violet-300'
    } else if (part.startsWith('@')) {
      className = 'text-pink-300'
    } else if (part.startsWith('<')) {
      className = 'text-sky-300'
    }

    return (
      <span key={`${part}-${index}`} className={className}>
        {part}
      </span>
    )
  })
}
