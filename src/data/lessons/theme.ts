import type { Lesson } from '../lessonTypes'

export const themeLesson: Lesson = {
  id: 'theme',
  order: '05',
  title: '主题、颜色与暗色模式',
  summary: '用主题变量、颜色阶梯和 dark 变体建立一致视觉系统。',
  tags: ['主题', '颜色', 'Dark Mode'],
  explain: [
    'Tailwind 的颜色命名同时表达色相和明度，例如 sky-500、slate-900。构建界面时应先选中性色，再少量使用强调色。',
    'Tailwind v4 支持在 CSS 中通过 @theme 定义项目级 token，组件中可以继续用工具类消费这些变量。',
    '暗色模式不是简单反转颜色。背景、边框、文字和强调色都需要分别调整对比度。',
  ],
  samples: [
    {
      title: '扩展主题 token',
      language: 'css',
      caption: '把项目品牌色注册为 Tailwind 可用的颜色变量。',
      lines: [
        { code: '@import "tailwindcss";' },
        { code: '' },
        {
          code: '@theme {',
          note: 'v4 中可以直接在 CSS 里定义主题',
          emphasis: true,
        },
        { code: '  --color-lab-ink: #0f172a;' },
        { code: '  --color-lab-accent: #0ea5e9;' },
        { code: '}' },
      ],
    },
  ],
  review: [
    {
      question: '构建主题时，中性色和强调色分别承担什么职责？',
      answer: '中性色负责背景、边框和文字层级，强调色负责关键动作、状态和当前项提示。',
    },
    {
      question: '@theme 适合用来定义什么？',
      answer:
        '适合定义项目级 token，例如品牌色、字体、断点或阴影，而不是给每个一次性数值都起名。',
    },
    {
      question: '暗色模式为什么不能只做颜色反转？',
      answer:
        '不同元素需要不同对比度。背景、边框、正文、弱文本、代码块和强调色都要分别检查可读性。',
    },
    {
      question: '什么时候应该扩展 Tailwind 主题，而不是直接写任意值？',
      answer: '当某个值会在多个组件中复用，并且代表产品设计语言时，应该沉淀成主题 token。',
    },
  ],
}
