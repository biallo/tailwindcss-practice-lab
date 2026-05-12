import type { Lesson } from '../lessonTypes'

export const introLesson: Lesson = {
  id: 'intro',
  order: '01',
  title: '认识 Tailwind CSS',
  summary: '理解 utility-first 的工作方式，以及为什么它适合快速构建一致的界面。',
  tags: ['核心概念', 'Vite', 'v4'],
  explain: [
    'Tailwind CSS 的核心是 utility-first：用小而明确的类描述布局、间距、颜色和状态。它不预设按钮、卡片或表单组件，而是提供稳定的设计原子。',
    '在 Tailwind CSS v4 中，Vite 项目推荐使用 @tailwindcss/vite 插件。CSS 入口只需要导入 Tailwind，构建器会扫描源码中的类名并生成最终 CSS。',
    '写类名时优先组合已有工具类。只有当多个页面重复出现同一种语义组件时，再抽取 React 组件或少量 CSS。',
  ],
  samples: [
    {
      title: 'Vite 插件配置',
      language: 'ts',
      caption: 'Tailwind 作为 Vite 插件运行，和 React 插件一起参与构建。',
      lines: [
        { code: "import { defineConfig } from 'vite'" },
        { code: "import react from '@vitejs/plugin-react'" },
        {
          code: "import tailwindcss from '@tailwindcss/vite'",
          note: 'v4 推荐的 Vite 集成入口',
          emphasis: true,
        },
        { code: '' },
        { code: 'export default defineConfig({' },
        {
          code: '  plugins: [tailwindcss(), react()],',
          note: 'Tailwind 插件放进 Vite plugins',
          emphasis: true,
        },
        { code: '})' },
      ],
    },
    {
      title: 'CSS 入口',
      language: 'css',
      caption: '入口文件导入 Tailwind 后，就可以在组件里直接使用工具类。',
      lines: [
        {
          code: '@import "tailwindcss";',
          note: '加载 Tailwind 的基础层、主题变量和工具类',
          emphasis: true,
        },
        { code: '' },
        { code: 'body {' },
        { code: '  margin: 0;' },
        { code: '}' },
      ],
    },
  ],
  review: [
    {
      question: 'Tailwind CSS 和传统组件库最大的区别是什么？',
      answer:
        'Tailwind 提供的是可组合的 CSS 工具类，不直接提供带业务语义的按钮、卡片或表单组件。组件结构仍由项目自己定义。',
    },
    {
      question: '为什么 Tailwind v4 的 Vite 项目要安装 @tailwindcss/vite？',
      answer:
        '它让 Tailwind 作为 Vite 插件参与构建，负责扫描源码里的类名并生成最终 CSS，是 v4 推荐的集成方式。',
    },
    {
      question: '什么时候应该把一组工具类抽成组件？',
      answer:
        '当这组结构和样式在多个地方重复出现，并且代表稳定的产品语义时，抽成 React 组件更容易维护。',
    },
  ],
}
