import type { Lesson } from '../lessonTypes'

export const complexLayoutLesson: Lesson = {
  id: 'complex-layout',
  order: '14',
  title: '复杂布局实战',
  summary: '把 grid、sticky、overflow、responsive table、card grid 等工具组合成可维护的应用界面。',
  tags: ['实战', 'Dashboard', '滚动区域'],
  explain: [
    '复杂布局的关键不是使用更多类，而是先划清区域职责：哪个区域负责页面滚动，哪个区域 sticky，哪个区域允许横向滚动，哪个区域需要 min-w-0。职责明确后，Tailwind 类只是把这些决策写出来。',
    'Dashboard 或学习应用常见结构是固定侧栏 + 主内容滚动。侧栏可以 h-screen + overflow-y-auto，主内容 min-w-0，代码块或表格内部再 overflow-x-auto。不要让整个页面和内部区域同时争抢滚动，否则移动端体验会混乱。',
    '表格是响应式难点。窄屏下可以保留横向滚动，也可以改成卡片列表。数据列很多、需要对齐比较时，横向滚动更诚实；信息摘要类列表则更适合卡片化。',
    'sticky 元素需要注意父容器 overflow。只要祖先设置了某些 overflow，sticky 的参照和行为就可能变化。调试 sticky 时，先确认滚动容器是谁，再确认 top、z-index、背景和边框。',
  ],
  samples: [
    {
      title: '应用式页面骨架',
      language: 'tsx',
      caption: '侧栏自己滚动，主内容负责阅读空间。',
      lines: [
        { code: '<main className="min-h-screen lg:grid lg:grid-cols-[320px_minmax(0,1fr)]">' },
        { code: '  <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">' },
        { code: '    <Navigation />' },
        { code: '  </aside>' },
        {
          code: '  <section className="min-w-0 overflow-hidden px-4 py-6 lg:px-10">',
          note: 'min-w-0 和 overflow 边界保护主内容布局',
          emphasis: true,
        },
        { code: '    <Content />' },
        { code: '  </section>' },
        { code: '</main>' },
      ],
    },
    {
      title: '响应式表格滚动',
      language: 'tsx',
      caption: '表格保持真实宽度，外层负责横向滚动。',
      lines: [
        { code: '<div className="overflow-x-auto rounded-lg border">' },
        {
          code: '  <table className="min-w-[720px] w-full text-sm">',
          note: '表格最小宽度保证列不会挤碎',
          emphasis: true,
        },
        { code: '    <tbody>{rows}</tbody>' },
        { code: '  </table>' },
        { code: '</div>' },
      ],
    },
  ],
  review: [
    {
      question: '复杂页面布局前应该先决定什么？',
      answer:
        '先决定区域职责：谁滚动、谁 sticky、谁可横向滚动、谁需要收缩、谁控制最大阅读宽度。职责明确后再写 Tailwind 类。',
    },
    {
      question: '为什么代码块和表格常用 overflow-x-auto？',
      answer:
        '代码和表格内容通常有天然最小宽度，强行压缩会降低可读性。横向滚动能保留结构，同时保护外层布局。',
    },
    {
      question: 'sticky 调试时最容易忽略什么？',
      answer:
        '最容易忽略祖先 overflow 和滚动容器。sticky 依赖滚动上下文，祖先 overflow 设置不当会改变它的行为。',
    },
  ],
}
