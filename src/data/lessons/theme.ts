import type { Lesson } from '../lessonTypes'

export const themeLesson: Lesson = {
  id: 'theme',
  order: '07',
  title: '主题 token 与 @theme',
  summary: '用 @theme 定义项目级设计 token，让颜色、间距、字体和阴影成为可复用的 Tailwind 工具。',
  tags: ['@theme', 'Design Token', 'v4'],
  explain: [
    'Tailwind v4 的重要变化是 CSS-first 配置。许多项目级 token 可以直接在 CSS 中通过 @theme 定义，例如 --color-brand、--font-display、--shadow-card。定义后，Tailwind 会生成对应工具类，比如 bg-brand、font-display、shadow-card。',
    '主题 token 的目的不是给每个一次性值起名字，而是沉淀产品设计语言。比如品牌主色、页面背景、危险状态、卡片阴影、内容最大宽度，这些值会在多个组件里出现，并且需要长期保持一致，就适合进入 @theme。',
    '主题扩展要控制数量。过多 token 会让团队重新陷入命名负担：每个颜色都叫 brand-muted、brand-soft、brand-subtle，却没人知道该用哪个。更好的做法是先使用 Tailwind 默认色板，只有当产品语义稳定后再抽成项目 token。',
    'token 不只服务视觉，也服务维护。比如把课程高亮色定义为 --color-course-accent，后续如果品牌色变化，只需要改 token；组件仍然写 bg-course-accent 或 text-course-accent，不需要全局搜索替换任意值。',
  ],
  samples: [
    {
      title: '定义项目 token',
      language: 'css',
      caption: '在 CSS 入口中定义主题变量，生成可直接使用的工具类。',
      lines: [
        { code: '@import "tailwindcss";' },
        { code: '' },
        {
          code: '@theme {',
          note: 'v4 的 CSS-first 主题配置',
          emphasis: true,
        },
        { code: '  --color-course-accent: #0ea5e9;' },
        { code: '  --color-course-surface: #f8fafc;' },
        { code: '  --shadow-card: 0 1px 2px rgb(15 23 42 / 0.08);' },
        { code: '}' },
      ],
    },
    {
      title: '消费主题 token',
      language: 'tsx',
      caption: '定义后的 token 会变成 Tailwind 工具类。',
      lines: [
        { code: '<article className="bg-course-surface shadow-card">' },
        {
          code: '  <span className="text-course-accent">Lesson 07</span>',
          note: '组件只关心语义 token，不关心具体色值',
          emphasis: true,
        },
        { code: '</article>' },
      ],
    },
  ],
  review: [
    {
      question: '@theme 适合定义哪些值？',
      answer:
        '@theme 适合定义会被多处复用、代表项目设计语言的 token，例如品牌色、语义色、字体、阴影、断点、间距基准等。不适合给每个只出现一次的值命名。',
    },
    {
      question: '为什么不要过早创建大量自定义 token？',
      answer:
        '过早创建 token 会让命名本身变成负担，团队不知道该选哪个。先使用默认色板和工具类，等语义稳定后再抽 token，通常更容易维护。',
    },
    {
      question: '主题 token 和任意值应该如何取舍？',
      answer:
        '一次性、局部、难以复用的值可以用任意值；跨组件重复出现并代表产品语义的值应该进入主题 token。',
    },
  ],
}
