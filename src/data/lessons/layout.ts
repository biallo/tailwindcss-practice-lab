import type { Lesson } from '../lessonTypes'

export const layoutLesson: Lesson = {
  id: 'layout',
  order: '03',
  title: '布局、间距与尺寸',
  summary: '用 flex、grid、gap、size、min/max 这些基础工具建立稳定布局，避免内容变化导致界面跳动。',
  tags: ['布局', '间距', '尺寸'],
  explain: [
    'Tailwind 的布局类大多是 CSS 属性的直接映射：flex 对应 display: flex，grid 对应 display: grid，items-center 对应 align-items: center。学习时不要把它们当成魔法缩写，而要把每个类还原成具体 CSS 属性，这样遇到复杂布局时才知道应该调整哪一层。',
    '页面级结构通常优先考虑 grid，因为 grid 能明确描述列宽、行高和二维关系。局部的一维排列更适合 flex，例如按钮组、表单行、导航项、图标和文字对齐。两者不是替代关系，而是不同层级的布局工具。',
    '间距建议优先用 gap 表达子元素之间的距离。gap 属于父容器，描述的是“这些孩子之间相隔多少”，比给每个子元素写 margin 更稳定。外部布局再用 margin、padding 或父级 grid 管理，不要让子元素同时承担内部和外部间距责任。',
    '固定格式 UI 要特别关心尺寸稳定性。课程列表、代码块、工具栏、卡片网格这些区域应使用 min-w-0、max-w、overflow、grid track 等约束，避免长文本、hover 状态、选中标记把布局撑开。',
  ],
  samples: [
    {
      title: '页面级左右布局',
      language: 'tsx',
      caption: '左侧固定课程栏，右侧内容区域可收缩并承担阅读宽度。',
      lines: [
        { code: '<main className="min-h-screen lg:grid lg:grid-cols-[340px_1fr]">' },
        {
          code: '  <aside className="lg:h-screen lg:border-r lg:overflow-y-auto">',
          note: 'grid 轨道定义侧栏宽度，aside 自己处理滚动',
          emphasis: true,
        },
        { code: '    <LessonList />' },
        { code: '  </aside>' },
        {
          code: '  <section className="min-w-0 px-4 py-6 lg:px-10">',
          note: 'min-w-0 防止长代码把右侧内容撑破',
          emphasis: true,
        },
        { code: '    <LessonContent />' },
        { code: '  </section>' },
        { code: '</main>' },
      ],
    },
    {
      title: '局部 flex 对齐',
      language: 'tsx',
      caption: '图标、标题、状态标记属于一维排列，flex 更直接。',
      lines: [
        { code: '<div className="flex items-center justify-between gap-3">' },
        { code: '  <div className="min-w-0">' },
        {
          code: '    <p className="truncate font-semibold">布局、间距与尺寸</p>',
          note: 'min-w-0 + truncate 让长标题省略而不是挤压右侧状态',
          emphasis: true,
        },
        { code: '  </div>' },
        { code: '  <span className="shrink-0 rounded-full bg-sky-500 text-white">✓</span>' },
        { code: '</div>' },
      ],
    },
  ],
  review: [
    {
      question: 'grid 和 flex 应该如何分工？',
      answer:
        'grid 适合页面级或卡片网格这类二维结构，可以明确声明列宽和轨道；flex 适合一维排列，例如按钮组、导航项、图标和文字。复杂页面常常是外层 grid，内部局部 flex。',
    },
    {
      question: '为什么 gap 通常比给子元素写 margin 更好？',
      answer:
        'gap 属于父容器，表达的是子元素之间的关系。子元素增删或换顺序时，间距仍由父容器统一控制，不会出现第一个/最后一个元素 margin 需要特殊处理的问题。',
    },
    {
      question: 'min-w-0 在 Tailwind 布局中为什么很常见？',
      answer:
        'grid 和 flex 子项默认可能不愿意比内容更窄，长文本或代码会把容器撑开。min-w-0 允许子项收缩，再配合 truncate 或 overflow-x-auto 处理溢出。',
    },
  ],
}
