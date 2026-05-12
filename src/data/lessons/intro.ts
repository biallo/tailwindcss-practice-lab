import type { Lesson } from '../lessonTypes'

export const introLesson: Lesson = {
  id: 'intro',
  order: '01',
  title: '认识 Tailwind CSS',
  summary: '从 utility-first 开始建立 Tailwind 的心智模型，理解它解决的不是“少写 CSS”，而是“更稳定地组织样式”。',
  tags: ['核心概念', 'Utility-first', '心智模型'],
  explain: [
    'Tailwind CSS 是 utility-first CSS framework。它把常见 CSS 属性拆成大量小而明确的工具类，例如 flex、items-center、px-4、text-slate-700。写界面时，你不是先给元素起一个语义类名再跳到 CSS 文件里补规则，而是直接在标记里组合这些工具类，马上表达这一处界面需要的布局、间距、颜色和状态。',
    '这不等于“把 CSS 都写进 HTML 里就结束了”。更准确地说，Tailwind 把样式约束放在设计系统提供的 token 和工具类里：间距使用固定阶梯，颜色使用固定色板，断点和状态变体也有统一写法。团队成员即使写在不同组件里，也更容易得到一致的视觉结果。',
    'Tailwind 不是组件库。它不会替你决定按钮、卡片、弹窗应该长什么样，也不会提供业务组件状态。项目仍然需要自己设计组件结构、语义、交互和可访问性。Tailwind 做的是降低样式实现的摩擦，让你在组件层快速组合视觉，同时把重复模式沉淀成 React 组件。',
    '学习 Tailwind 的重点不是背完所有类名，而是理解几类模式：布局怎么表达，响应式怎么叠加，状态变体怎么组合，主题 token 怎么沉淀，以及什么时候从工具类升级为组件抽象。',
  ],
  samples: [
    {
      title: 'utility-first 的组件写法',
      language: 'tsx',
      caption: '同一个按钮的结构、视觉和交互状态都能在调用处直接读到。',
      lines: [
        { code: '<button' },
        { code: '  type="button"' },
        {
          code: '  className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"',
          note: '工具类描述默认样式、hover 状态和键盘焦点',
          emphasis: true,
        },
        { code: '>' },
        { code: '  保存修改' },
        { code: '</button>' },
      ],
    },
    {
      title: '从工具类到组件',
      language: 'tsx',
      caption: '当一组样式在多处复用并具有稳定语义时，再抽成组件。',
      lines: [
        { code: 'function PrimaryButton({ children }: { children: React.ReactNode }) {' },
        { code: '  return (' },
        {
          code: '    <button className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400">',
          note: '抽象的是产品语义，不只是为了缩短 className',
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
      question: 'Tailwind 的 utility-first 和传统语义 CSS 最大差异是什么？',
      answer:
        '传统语义 CSS 通常先写 .card、.button 这类类名，再在 CSS 文件里定义它们的样式；Tailwind 则直接用工具类在组件里组合布局、颜色、间距和状态。它的价值不只是少写 CSS，而是让样式决策贴近组件结构，并且被统一的设计 token 约束。',
    },
    {
      question: '为什么说 Tailwind 不是组件库？',
      answer:
        'Tailwind 只提供样式工具和变体机制，不提供完整业务组件。按钮是否有 loading 状态、弹窗如何聚焦、表单错误如何提示，这些仍然需要项目自己设计和封装。',
    },
    {
      question: '什么时候应该从工具类抽成组件？',
      answer:
        '当某个 UI 模式重复出现，并且代表稳定的产品语义时，应该抽成组件。比如 PrimaryButton、LessonCard、CodeBlock。抽象的目标是复用结构、状态和语义，而不是隐藏所有工具类。',
    },
  ],
}
