import type { Lesson } from '../lessonTypes'

export const responsiveLesson: Lesson = {
  id: 'responsive',
  order: '03',
  title: '响应式断点',
  summary: '从移动端默认样式开始，再用 sm、md、lg 等前缀逐步增强。',
  tags: ['响应式', '断点'],
  explain: [
    'Tailwind 的无前缀类是默认样式，sm/md/lg 等前缀在达到对应宽度后生效。通常先写移动端样式，再逐步增强桌面布局。',
    '响应式不只是改列数，也包括调整空白、字号、边框方向和 sticky 区域。',
    '当内容密度较高时，移动端可以把侧栏改成顶部横向滚动列表，让主内容保持完整阅读空间。',
  ],
  samples: [
    {
      title: '移动优先布局',
      language: 'tsx',
      caption: '先纵向堆叠，再在大屏恢复左右两列。',
      lines: [
        { code: '<div className="min-h-screen lg:grid lg:grid-cols-[340px_1fr]">' },
        {
          code: '  <aside className="sticky top-0 z-10 lg:static">',
          note: '窄屏顶部固定，桌面回到普通侧栏',
          emphasis: true,
        },
        { code: '    <nav className="flex overflow-x-auto lg:block" />' },
        { code: '  </aside>' },
        { code: '  <article className="px-4 py-6 sm:px-6 lg:px-10" />' },
        { code: '</div>' },
      ],
    },
  ],
  review: [
    {
      question: 'Tailwind 的无前缀类应该理解为什么尺寸的样式？',
      answer:
        '无前缀类是默认样式，通常也就是移动端基础样式。更大屏幕再用 sm、md、lg 等前缀增强。',
    },
    {
      question: '响应式调整除了列数，还应该关注什么？',
      answer: '还应关注字号、间距、边框方向、导航形态、sticky 行为和横向溢出。',
    },
  ],
}
