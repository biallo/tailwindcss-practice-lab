import type { Lesson } from '../lessonTypes'

export const stateLinkageLesson: Lesson = {
  id: 'state-linkage',
  order: '10',
  title: 'group、peer 与 has 状态联动',
  summary: '用 group-hover、peer-checked、has-[...] 处理父子、兄弟和内容驱动的样式联动。',
  tags: ['group', 'peer', 'has'],
  explain: [
    '有些状态不在当前元素本身，而在它的父元素、兄弟元素或子元素中。Tailwind 提供 group、peer、has 等变体来表达这种联动，避免为了 hover 卡片改变内部标题颜色而写额外 CSS。',
    'group 用于父子关系：父元素加 group，子元素使用 group-hover:* 或 group-focus-within:*。典型场景是整张卡片 hover 时标题、图标、按钮同时变化。',
    'peer 用于兄弟关系：前面的表单控件加 peer，后面的提示、图标、面板使用 peer-checked:*、peer-invalid:*。它很适合自定义 checkbox、radio、开关和表单校验提示。',
    'has-[...] 用于根据子元素状态改变父元素样式。例如卡片内部有选中的 input，父卡片就改变边框。它表达的是“这个元素是否包含满足条件的后代”，可读性很强，但要注意浏览器支持和选择器复杂度。',
  ],
  samples: [
    {
      title: 'group-hover 卡片联动',
      language: 'tsx',
      caption: '父卡片 hover 时，内部标题和图标同步变化。',
      lines: [
        { code: '<article className="group rounded-lg border p-5 hover:border-sky-300">' },
        {
          code: '  <h3 className="text-slate-950 group-hover:text-sky-700">课程标题</h3>',
          note: '子元素读取父级 group 的 hover 状态',
          emphasis: true,
        },
        { code: '  <span className="text-slate-400 group-hover:translate-x-1">→</span>' },
        { code: '</article>' },
      ],
    },
    {
      title: 'peer-checked 自定义选项',
      language: 'tsx',
      caption: '兄弟元素根据 input 选中状态切换样式。',
      lines: [
        { code: '<label className="block">' },
        { code: '  <input type="checkbox" className="peer sr-only" />' },
        {
          code: '  <span className="block rounded-lg border p-4 peer-checked:border-sky-500 peer-checked:bg-sky-50">',
          note: 'peer 必须在被影响元素之前',
          emphasis: true,
        },
        { code: '    启用通知' },
        { code: '  </span>' },
        { code: '</label>' },
      ],
    },
    {
      title: 'has 根据子元素状态改变父元素',
      language: 'tsx',
      caption: '父容器根据内部 input 状态改变边框。',
      lines: [
        {
          code: '<label className="rounded-lg border p-4 has-[:checked]:border-sky-500 has-[:checked]:bg-sky-50">',
          note: '父元素包含 checked 后代时生效',
          emphasis: true,
        },
        { code: '  <input type="radio" name="plan" />' },
        { code: '  Pro Plan' },
        { code: '</label>' },
      ],
    },
  ],
  review: [
    {
      question: 'group 和 peer 的核心区别是什么？',
      answer:
        'group 处理父子关系，子元素响应父元素状态；peer 处理兄弟关系，后面的兄弟元素响应前面 peer 元素的状态。',
    },
    {
      question: 'peer 为什么通常要求被观察元素在前面？',
      answer:
        'peer 依赖 CSS 后续兄弟选择器，后面的元素可以响应前面 peer 的状态，反过来通常不成立。',
    },
    {
      question: 'has-[...] 适合什么场景？',
      answer:
        '适合父元素根据内部内容或状态改变样式，例如内部 input 选中后整张卡片高亮、内部图片加载失败后改变布局等。',
    },
  ],
}
