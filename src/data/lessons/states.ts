import type { Lesson } from '../lessonTypes'

export const statesLesson: Lesson = {
  id: 'states',
  order: '04',
  title: '状态、伪类与交互',
  summary: '用 hover、focus-visible、disabled、aria-selected 等状态前缀表达 UI 反馈。',
  tags: ['状态', '交互', '可访问性'],
  explain: [
    '状态前缀让交互反馈和元素状态放在同一个 className 中，维护时可以直接看到默认、悬停、焦点和禁用状态。',
    '可点击控件应有 focus-visible 样式。鼠标用户不一定看到焦点环，但键盘用户需要明确知道当前焦点位置。',
    '当状态来自语义属性时，优先使用 aria-selected、aria-current、disabled 等属性，再用对应变体做样式。',
  ],
  samples: [
    {
      title: 'Tab 按钮状态',
      language: 'tsx',
      caption: '样式跟随 aria-selected，语义和视觉保持一致。',
      lines: [
        { code: '<button' },
        { code: '  type="button"' },
        {
          code: '  aria-selected={activeTab === "explain"}',
          note: '屏幕阅读器和 CSS 变体都能读取状态',
          emphasis: true,
        },
        {
          code: '  className="rounded-md px-3 py-2 text-sm aria-selected:bg-slate-950 aria-selected:text-white focus-visible:outline-2 focus-visible:outline-sky-500"',
          note: '状态前缀直接组合到工具类前',
          emphasis: true,
        },
        { code: '>' },
        { code: '  讲解' },
        { code: '</button>' },
      ],
    },
  ],
  review: [
    {
      question: '为什么只写 hover 状态是不够的？',
      answer:
        '键盘用户不会触发 hover，需要 focus-visible 看到当前焦点位置；禁用和选中状态也需要独立表达。',
    },
    {
      question: 'aria-selected 和 aria-current 分别适合什么组件？',
      answer: 'aria-selected 常用于 Tab、列表框选项这类可选项；aria-current 常用于当前导航页或当前步骤。',
    },
    {
      question: '状态前缀的维护价值是什么？',
      answer:
        '默认、悬停、焦点、禁用和语义状态都集中在 className 中，阅读组件时能直接看到交互规则。',
    },
  ],
}
