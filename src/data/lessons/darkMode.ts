import type { Lesson } from '../lessonTypes'

export const darkModeLesson: Lesson = {
  id: 'dark-mode',
  order: '08',
  title: '暗色模式进阶',
  summary: '理解 dark 变体、系统偏好、手动主题切换和颜色 token 在暗色模式中的分工。',
  tags: ['Dark Mode', '主题', '颜色'],
  explain: [
    '最简单的暗色模式是使用 dark: 变体，例如 bg-white dark:bg-slate-950。默认样式负责亮色，dark: 前缀负责暗色覆盖。这样组件在同一个 className 中同时描述两套颜色。',
    '暗色模式不是把颜色反转。背景、边框、正文、弱文本、代码块、强调色都需要重新设定对比度。亮色里的浅灰边框到了暗色里可能几乎不可见，亮色里的高饱和品牌色到了暗色里可能刺眼。',
    '主题来源有两种常见模式：跟随系统 prefers-color-scheme，或用 class/data attribute 手动控制。跟随系统实现简单，手动控制更适合有主题切换按钮的应用。无论哪种方式，都应该保证初次渲染时主题一致，避免闪烁。',
    '如果项目使用设计 token，可以把语义色设计成亮暗两套变量。组件使用 bg-surface、text-muted 这类语义 token，而不是在每个组件里重复写一堆具体颜色。这样暗色模式的维护成本更低。',
  ],
  samples: [
    {
      title: '组件内的 dark 变体',
      language: 'tsx',
      caption: '同一个组件同时表达亮色和暗色状态。',
      lines: [
        { code: '<article className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">' },
        { code: '  <h3 className="text-slate-950 dark:text-white">课程标题</h3>' },
        { code: '  <p className="text-slate-600 dark:text-slate-400">课程摘要</p>' },
        { code: '</article>' },
      ],
    },
    {
      title: '手动主题控制思路',
      language: 'tsx',
      caption: '用根节点 class 或 data attribute 控制 dark 变体。',
      lines: [
        { code: '<html className="dark">' },
        {
          code: '  <body className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">',
          note: 'dark 变体由祖先上的 dark class 触发',
          emphasis: true,
        },
        { code: '    <App />' },
        { code: '  </body>' },
        { code: '</html>' },
      ],
    },
  ],
  review: [
    {
      question: '为什么暗色模式不能简单反转颜色？',
      answer:
        '不同 UI 层级需要不同对比度。简单反转可能导致边框不可见、文本刺眼、强调色过亮或代码块层次混乱。',
    },
    {
      question: '系统暗色和手动暗色切换有什么区别？',
      answer:
        '系统暗色跟随用户操作系统偏好，实现简单；手动切换需要保存用户选择并控制根节点状态，但更符合应用内主题设置需求。',
    },
    {
      question: '语义 token 对暗色模式有什么帮助？',
      answer:
        '组件使用 surface、muted、accent 等语义 token 后，亮暗颜色可以集中维护，避免在每个组件里重复管理具体色值。',
    },
  ],
}
