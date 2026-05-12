import type { Lesson } from '../lessonTypes'

export const componentsLesson: Lesson = {
  id: 'components',
  order: '06',
  title: '组件抽取与复用',
  summary: '判断什么时候保留工具类，什么时候抽成组件或样式层。',
  tags: ['组件', '复用', '维护'],
  explain: [
    'Tailwind 项目最常见的复用方式是组件抽取，而不是写大量自定义 CSS 类。组件能同时封装结构、语义和样式。',
    '@apply 可以把一串工具类合并到 CSS 类里，但如果只是在隐藏样式细节，往往会降低可读性。它更适合第三方库覆盖或少数基础元素。',
    '抽象的标准是重复和稳定。一个样式组合在多个页面出现，并且代表同一种产品语义时，就值得抽组件。',
  ],
  samples: [
    {
      title: '组件化按钮',
      language: 'tsx',
      caption: '复用常用组合，同时保留调用处的语义。',
      lines: [
        { code: 'function PrimaryButton({ children }: { children: React.ReactNode }) {' },
        { code: '  return (' },
        {
          code: '    <button className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">',
          note: '稳定交互样式封装在组件里',
          emphasis: true,
        },
        { code: '      {children}' },
        { code: '    </button>' },
        { code: '  )' },
        { code: '}' },
      ],
    },
  ],
  review: [
    {
      question: 'Tailwind 项目里最常见的复用方式是什么？',
      answer: '优先抽 React 组件，因为组件能同时复用结构、语义、状态和样式。',
    },
    {
      question: '@apply 的合理使用边界是什么？',
      answer:
        '它适合少数基础层样式或第三方库覆盖，不适合把所有工具类重新包装成另一套语义类名。',
    },
    {
      question: '判断是否抽象一个样式组合时，关键标准是什么？',
      answer:
        '看它是否重复出现、是否语义稳定、是否能减少真实维护成本，而不是单纯为了缩短 className。',
    },
  ],
}
