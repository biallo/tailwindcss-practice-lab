import type { Lesson } from '../lessonTypes'

export const layoutLesson: Lesson = {
  id: 'layout',
  order: '02',
  title: '布局、间距与尺寸',
  summary: '用 flex、grid、gap、space、size、max-w 等工具建立稳定版面。',
  tags: ['布局', '间距', '尺寸'],
  explain: [
    'Tailwind 的布局类基本是 CSS 属性的直接映射。先决定页面结构，再用 flex 或 grid 表达方向、对齐、轨道和间距。',
    '组件内部优先使用 gap，因为它表达的是子元素之间的距离。外部布局再用 margin 或父级 grid 管理。',
    '重复网格、工具栏、课程列表这类固定格式界面，应给关键区域设置稳定尺寸，避免 hover、选中态或长文本挤压结构。',
  ],
  samples: [
    {
      title: '左右学习布局',
      language: 'tsx',
      caption: '左侧课程列表固定宽度，右侧内容负责滚动和阅读。',
      lines: [
        { code: '<main className="grid min-h-screen grid-cols-[320px_1fr]">' },
        {
          code: '  <aside className="border-r border-slate-200 p-5">',
          note: '侧栏宽度由 grid 轨道控制',
          emphasis: true,
        },
        { code: '    <LessonList />' },
        { code: '  </aside>' },
        {
          code: '  <section className="min-w-0 p-8">',
          note: 'min-w-0 防止代码块撑开网格',
          emphasis: true,
        },
        { code: '    <LessonContent />' },
        { code: '  </section>' },
        { code: '</main>' },
      ],
    },
  ],
  review: [
    {
      question: 'grid 和 flex 在页面布局里分别适合什么场景？',
      answer:
        'grid 更适合页面级二维结构和明确轨道，flex 更适合一维排列、局部工具栏、按钮组和对齐。',
    },
    {
      question: '为什么组件内部推荐优先使用 gap？',
      answer:
        'gap 表达的是子元素之间的关系，不需要每个子元素自己携带 margin，结构变化时更稳定。',
    },
    {
      question: '代码块所在区域为什么常常需要 min-w-0？',
      answer: '在 grid 或 flex 子项中，min-w-0 允许内容区域收缩，防止长代码把整个布局撑宽。',
    },
    {
      question: '固定格式 UI 为什么要关心尺寸稳定性？',
      answer:
        '课程列表、工具栏和网格项在 hover、选中态或文本变化时如果尺寸跳动，会破坏阅读和操作节奏。',
    },
  ],
}
