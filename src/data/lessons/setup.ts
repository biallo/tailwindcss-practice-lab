import type { Lesson } from '../lessonTypes'

export const setupLesson: Lesson = {
  id: 'setup',
  order: '02',
  title: 'Vite 接入与 v4 构建流程',
  summary: '理解 Tailwind v4 在 Vite 中如何工作，以及 CSS 入口、插件、扫描和生产构建之间的关系。',
  tags: ['Vite', '构建', 'v4'],
  explain: [
    '在 Vite 项目中，Tailwind v4 推荐使用 tailwindcss 和 @tailwindcss/vite。Vite 插件负责把 Tailwind 接入构建流程，CSS 入口负责导入 Tailwind。组件里写的工具类会在构建过程中被识别，最终生成项目实际需要的 CSS。',
    '最小接入通常只有两步：在 vite.config.ts 中加入 tailwindcss() 插件，在 CSS 入口写 @import "tailwindcss";。这比旧项目里手动维护 PostCSS 配置更直接，也更符合 Vite 的插件模型。',
    'Tailwind 会根据源码中出现的类名生成 CSS，所以动态拼接 className 要谨慎。像 `bg-${color}-500` 这种运行时拼出来的完整类名，构建器无法可靠识别。更稳定的写法是列出完整候选类，或通过映射表选择类名。',

  ],
  samples: [
    {
      title: 'Vite 插件配置',
      language: 'ts',
      caption: 'Tailwind 作为 Vite 插件参与开发和生产构建。',
      lines: [
        { code: "import { defineConfig } from 'vite'" },
        { code: "import react from '@vitejs/plugin-react'" },
        { code: "import tailwindcss from '@tailwindcss/vite'", note: 'v4 推荐集成方式', emphasis: true },
        { code: '' },
        { code: 'export default defineConfig({' },
        { code: "  base: './'," },
        { code: '  plugins: [tailwindcss(), react()],', note: '让 Tailwind 进入 Vite 构建管线', emphasis: true },
        { code: '})' },
      ],
    },
    {
      title: '避免不可扫描的动态类名',
      language: 'tsx',
      caption: '构建器需要看到完整类名，映射表比字符串拼接更稳。',
      lines: [
        { code: 'const toneClass = {' },
        { code: '  info: "bg-sky-500 text-white",' },
        { code: '  danger: "bg-rose-500 text-white",' },
        { code: '}' },
        { code: '' },
        { code: '<button className={toneClass[tone]}>保存</button>', note: '完整类名存在于源码中', emphasis: true },
      ],
    },
  ],
  review: [
    {
      question: 'Tailwind v4 在 Vite 中最小接入需要哪些部分？',
      answer:
        '需要安装 tailwindcss 和 @tailwindcss/vite，在 vite.config.ts 中加入 tailwindcss() 插件，并在 CSS 入口中 @import "tailwindcss";。',
    },
    {
      question: '为什么不推荐运行时拼接完整 Tailwind 类名？',
      answer:
        '构建器需要在源码中看到完整类名才能生成对应 CSS。运行时拼接的 bg-${color}-500 可能不会出现在构建扫描结果里，导致样式缺失。',
    },
  ],
}
