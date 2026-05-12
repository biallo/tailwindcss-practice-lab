import type { Lesson } from '../lessonTypes'

export const componentsLesson: Lesson = {
  id: 'components',
  order: '15',
  title: '组件抽取与维护实践',
  summary: '判断什么时候保留工具类，什么时候抽成组件、函数或少量 CSS，避免项目后期难以维护。',
  tags: ['组件', '复用', '维护'],
  explain: [
    'Tailwind 项目最常见的复用方式应该是组件抽取，而不是把所有工具类重新包装成 CSS 类。组件能同时复用结构、语义、交互状态和样式，而 CSS 类通常只能复用样式。',
    '不要因为 className 长就立刻抽象。长 className 如果只出现一次，并且直接描述当前元素样式，通常是可接受的。真正需要抽象的是重复出现、语义稳定、修改时需要保持一致的 UI 模式。',
    '@apply 可以使用，但要谨慎。它适合少数基础层样式、第三方库覆盖、markdown 内容排版等场景；如果只是把 .btn-primary 包成一串工具类，却没有封装结构和行为，维护收益通常不如 React 组件。',
    '大型项目可以用几个层次组织 Tailwind：数据和内容拆到 data，复用 UI 拆到 components，状态和持久化拆到 utils/hooks，复杂 className 可以用小函数拼接。目标是让每个文件有清晰职责，而不是让 Tailwind 变成一个巨大的 App.tsx。',
  ],
  samples: [
    {
      title: '优先抽组件',
      language: 'tsx',
      caption: '组件抽象可以同时封装结构、状态、语义和样式。',
      lines: [
        { code: 'function LessonBadge({ done }: { done: boolean }) {' },
        { code: '  return (' },
        {
          code: '    <span className={done ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500"}>',
          note: '组件可以根据状态选择工具类',
          emphasis: true,
        },
        { code: '      {done ? "已完成" : "未完成"}' },
        { code: '    </span>' },
        { code: '  )' },
        { code: '}' },
      ],
    },
    {
      title: '@apply 的边界',
      language: 'css',
      caption: '用于少量全局基础样式可以，避免把所有组件样式都搬回 CSS。',
      lines: [
        { code: '.markdown-content {' },
        {
          code: '  @apply text-slate-700 leading-8;',
          note: '适合 CMS/Markdown 这类不方便逐个元素写 class 的内容',
          emphasis: true,
        },
        { code: '}' },
      ],
    },
  ],
  review: [
    {
      question: '为什么 Tailwind 项目优先抽 React 组件，而不是大量 CSS 类？',
      answer:
        'React 组件能封装结构、语义、状态、可访问性和样式；CSS 类只能封装样式。真实复用通常需要前者，而不只是缩短 className。',
    },
    {
      question: '什么时候 className 长但不需要抽象？',
      answer:
        '如果它只在一个地方出现，描述的就是当前元素的具体样式，并且没有稳定产品语义，保留在组件里通常比抽一个含糊的 CSS 类更清楚。',
    },
    {
      question: '@apply 适合哪些场景？',
      answer:
        '@apply 适合少数基础样式、第三方库覆盖、Markdown/CMS 内容排版等不方便直接写工具类的地方。不适合把所有工具类重新命名一遍。',
    },
  ],
}
