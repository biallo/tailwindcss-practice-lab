import type { Lesson } from '../lessonTypes'

export const ariaDataLesson: Lesson = {
  id: 'aria-data',
  order: '11',
  title: 'ARIA 与 data 属性变体',
  summary: '用 aria-* 和 data-* 让组件语义状态直接驱动样式，适配自建组件和 Headless UI。',
  tags: ['ARIA', 'data-*', '组件状态'],
  explain: [
    '很多组件状态不应该只存在于 React state 中，还应该反映到 DOM 属性上。例如 Tab 的选中状态适合 aria-selected，折叠面板适合 aria-expanded，当前导航适合 aria-current。这样屏幕阅读器和 CSS 都能读取同一份状态。',
    'Tailwind 支持 aria-selected:*、aria-expanded:*、aria-disabled:* 等常见 ARIA 变体，也支持 aria-[sort=ascending]:* 这类任意 ARIA 选择器。语义属性一旦存在，样式就可以直接跟随它，而不是重复维护另一个 isActive class。',
    'data-* 变体适合组件库或状态机输出的自定义状态，例如 data-[state=open]:animate-in、data-[disabled]:opacity-50。Radix UI、Headless UI 或自建 headless 组件都常用 data 属性表达状态。',
    '重点是让状态来源唯一。不要 React state、aria 属性、data 属性、className 各自维护一份状态。最好由 React state 决定语义属性，再由 Tailwind 变体根据属性自动应用样式。',
  ],
  samples: [
    {
      title: 'ARIA 驱动 Tab 样式',
      language: 'tsx',
      caption: '选中状态写进 aria-selected，再由 aria 变体控制视觉。',
      lines: [
        { code: '<button' },
        { code: '  role="tab"' },
        { code: '  aria-selected={activeTab === "review"}' },
        {
          code: '  className="rounded-md px-3 py-2 aria-selected:bg-slate-950 aria-selected:text-white"',
          note: '语义状态和视觉状态来自同一个属性',
          emphasis: true,
        },
        { code: '>' },
        { code: '  复盘' },
        { code: '</button>' },
      ],
    },
    {
      title: 'data-state 驱动弹层动画',
      language: 'tsx',
      caption: '组件库常用 data-state=open/closed 暴露状态。',
      lines: [
        { code: '<div' },
        { code: '  data-state={open ? "open" : "closed"}' },
        {
          code: '  className="data-[state=open]:opacity-100 data-[state=closed]:opacity-0"',
          note: 'data 属性适合非标准但稳定的组件状态',
          emphasis: true,
        },
        { code: '/>' },
      ],
    },
  ],
  review: [
    {
      question: '为什么推荐用 aria-selected 驱动 Tab 样式？',
      answer:
        'aria-selected 同时表达语义和状态。屏幕阅读器能理解当前选中项，Tailwind 的 aria-selected 变体也能直接应用视觉样式，避免状态重复维护。',
    },
    {
      question: 'data-* 变体适合什么场景？',
      answer:
        '适合组件库、自建 headless 组件或状态机输出的非标准状态，例如 data-state=open、data-disabled、data-side=top。',
    },
    {
      question: 'ARIA 和 data 属性使用时最重要的原则是什么？',
      answer:
        '状态来源要单一。让 React state 写入语义属性，再由 Tailwind 属性变体消费它，不要在多个地方手动同步同一个状态。',
    },
  ],
}
