import type { Lesson } from '../lessonTypes'

export const containerQueriesLesson: Lesson = {
  id: 'container-queries',
  order: '05',
  title: 'Container Queries',
  summary: '用容器查询根据父容器宽度调整组件，而不是只依赖整个浏览器视口宽度。',
  tags: ['@container', '响应式', '组件'],
  explain: [
    '普通响应式断点看的是视口宽度，container query 看的是某个父容器宽度。这个差异很重要：同一个课程卡片放在主内容区可能很宽，放在侧栏可能很窄，如果只用 md/lg 视口断点，它无法知道自己实际可用空间。',
    '使用容器查询时，先在父元素上声明 @container，然后在子元素上使用 @sm、@md、@lg 这类容器变体。它们的含义是“当最近的容器达到这个宽度时应用样式”，不是当浏览器窗口达到这个宽度。',
    '容器查询特别适合可复用组件：卡片、统计面板、产品列表项、侧栏模块。组件不需要知道它位于哪个页面，只根据自己的容器空间决定横排还是竖排、显示多少细节、按钮是否展开。',
    '不要滥用容器查询替代所有断点。页面骨架仍然适合用视口断点，组件内部布局才更适合容器查询。把两者分工清楚，响应式逻辑会更容易读。',
  ],
  samples: [
    {
      title: '容器查询基础',
      language: 'tsx',
      caption: '父元素声明 @container，子元素使用 @md 这类容器变体。',
      lines: [
        { code: '<article className="@container rounded-lg border p-4">' },
        { code: '  <div className="flex flex-col gap-3 @md:flex-row @md:items-center">' },
        { code: '    <img className="size-16 rounded-md @md:size-20" />' },
        { code: '    <div className="min-w-0">' },
        { code: '      <h3 className="font-semibold">课程卡片</h3>' },
        { code: '    </div>' },
        { code: '  </div>' },
        { code: '</article>' },
      ],
    },
    {
      title: '组件在不同容器中自适应',
      language: 'tsx',
      caption: '同一个组件不关心页面，只关心容器宽度。',
      lines: [
        { code: '<aside className="w-72">' },
        { code: '  <CourseCard />' },
        { code: '</aside>' },
        { code: '<main className="min-w-0 flex-1">' },
        { code: '  <CourseCard />', note: '同一组件在更宽容器中自动切换布局', emphasis: true },
        { code: '</main>' },
      ],
    },
  ],
  review: [
    {
      question: 'container query 和普通响应式断点最大的区别是什么？',
      answer:
        '普通断点根据浏览器视口宽度生效，container query 根据组件所在容器宽度生效。可复用组件通常更适合后者。',
    },
    {
      question: '什么时候应该优先考虑 @container？',
      answer:
        '当同一个组件会出现在不同宽度区域中，例如侧栏、主内容、弹窗、网格卡片，组件内部布局应该根据自身可用宽度变化，而不是只看视口。',
    },
    {
      question: '页面骨架还需要普通断点吗？',
      answer:
        '需要。页面级左右布局、整体导航形态、主区域宽度通常仍由视口断点控制；组件内部细节再用容器查询调整。',
    },
  ],
}
