import type { Lesson } from '../lessonTypes'

export const responsiveLesson: Lesson = {
  id: 'responsive',
  order: '04',
  title: '响应式断点',
  summary: '用移动优先的方式组织样式，理解 sm、md、lg 等断点如何逐步覆盖默认类。',
  tags: ['响应式', '断点', '移动优先'],
  explain: [
    'Tailwind 的无前缀类是默认样式，通常应该按移动端来写。sm、md、lg、xl、2xl 这些前缀是 min-width 媒体查询，意思是“当视口至少达到这个宽度时，应用后面的工具类”。因此 text-sm md:text-base lg:text-lg 会从小屏开始逐步增强。',
    '响应式不是只改列数。真实界面里，断点常常同时影响导航形态、边距、字号、边框方向、sticky 行为、滚动区域和按钮密度。移动端空间有限，常见策略是把侧栏改成 select 或横向滚动，把表格改成卡片，把多列布局改成单列。',
    '类名顺序上建议先写默认值，再写断点覆盖：grid-cols-1 md:grid-cols-2 xl:grid-cols-3。这样阅读时能顺着屏幕变宽的方向理解布局演进。不要只在桌面端设计完再补移动端，否则很容易出现小屏溢出。',
    '响应式调试要看内容的极端情况：最长标题、最多标签、最窄设备、代码块横向滚动、按钮文字换行。如果这些边界稳定，常规内容通常也会稳定。',
  ],
  samples: [
    {
      title: '移动优先布局',
      language: 'tsx',
      caption: '默认单列，桌面端再切换成左右布局。',
      lines: [
        { code: '<main className="min-h-screen lg:grid lg:grid-cols-[340px_1fr]">' },
        {
          code: '  <aside className="sticky top-0 z-10 border-b lg:static lg:border-r">',
          note: '移动端顶部导航，桌面端回到左侧栏',
          emphasis: true,
        },
        { code: '    <CourseSelector />' },
        { code: '  </aside>' },
        { code: '  <section className="px-4 py-6 sm:px-6 lg:px-10" />' },
        { code: '</main>' },
      ],
    },
    {
      title: '不同断点下的卡片网格',
      language: 'tsx',
      caption: '列数、间距和内边距都可以跟随断点变化。',
      lines: [
        { code: '<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">' },
        {
          code: '  <article className="rounded-lg border p-4 sm:p-5">',
          note: '小屏保持紧凑，大屏增加留白',
          emphasis: true,
        },
        { code: '    <h3 className="text-base font-semibold lg:text-lg">课程卡片</h3>' },
        { code: '  </article>' },
        { code: '</div>' },
      ],
    },
  ],
  review: [
    {
      question: 'Tailwind 的 md:text-base 是什么意思？',
      answer:
        '它表示当视口宽度达到 md 断点及以上时应用 text-base。无前缀类仍然是默认样式，因此通常先写移动端样式，再用断点前缀覆盖。',
    },
    {
      question: '响应式设计为什么不能只改 grid-cols？',
      answer:
        '因为屏幕变化会影响阅读密度和交互方式。导航、间距、字号、滚动、边框方向、按钮大小都可能需要调整，只改列数往往无法解决真实移动端体验。',
    },
    {
      question: '为什么推荐先写移动端默认样式？',
      answer:
        '移动端空间最紧张，先保证小屏可用，再逐步增强大屏布局，能更早发现溢出和信息密度问题，也更符合 Tailwind 断点的 min-width 模型。',
    },
  ],
}
