import type { Lesson } from '../lessonTypes'

export const arbitraryValuesLesson: Lesson = {
  id: 'arbitrary-values',
  order: '06',
  title: '任意值与任意属性',
  summary: '掌握 w-[...]、grid-cols-[...]、[mask-image:...] 这类逃生口，并知道什么时候该把它们沉淀成 token。',
  tags: ['任意值', '复杂布局', '逃生口'],
  explain: [
    'Tailwind 默认提供了大量设计阶梯，但真实项目偶尔会遇到特殊值，例如固定侧栏宽度、复杂 grid track、CSS 变量、mask-image。任意值语法允许你写 w-[37rem]、grid-cols-[240px_1fr]、top-[var(--header-height)]。',
    '任意值不是坏味道，它是 Tailwind 的逃生口。它让你在不离开组件的情况下使用完整 CSS 能力。问题不在于用了任意值，而在于这个值是否其实代表项目语义。如果同一个值反复出现，就应该考虑 @theme 或组件封装。',
    '任意属性写法如 [mask-image:linear-gradient(...)] 可以覆盖 Tailwind 暂时没有提供的 CSS 属性。它适合一次性视觉效果、浏览器新特性试验、复杂渐变或第三方集成。但可读性比标准工具类差，应该控制使用范围。',
    '任意值要注意空格处理。类名里不能直接写普通空格，通常用下划线表达空格，例如 grid-cols-[240px_1fr]。如果值太复杂，也可以改用 CSS 变量，让 className 只负责引用变量。',
  ],
  samples: [
    {
      title: '复杂 grid track',
      language: 'tsx',
      caption: '任意值可以精确表达 CSS grid 轨道。',
      lines: [
        {
          code: '<main className="grid min-h-screen grid-cols-[340px_minmax(0,1fr)]">',
          note: '下划线表示 CSS 值中的空格',
          emphasis: true,
        },
        { code: '  <aside />' },
        { code: '  <section className="min-w-0" />' },
        { code: '</main>' },
      ],
    },
    {
      title: '任意属性',
      language: 'tsx',
      caption: '当 Tailwind 没有对应工具类时，可以直接写 CSS 属性。',
      lines: [
        { code: '<div' },
        {
          code: '  className="[mask-image:linear-gradient(to_bottom,black,transparent)]"',
          note: '适合局部一次性视觉效果',
          emphasis: true,
        },
        { code: '/>' },
      ],
    },
  ],
  review: [
    {
      question: '任意值什么时候是合理选择？',
      answer:
        '当某个值是局部的、一次性的、默认设计阶梯无法表达时，任意值很合理，例如特殊 grid track、CSS 变量定位、复杂遮罩。',
    },
    {
      question: '任意值什么时候应该升级为主题 token？',
      answer:
        '当它在多个组件中复用，并且代表稳定产品语义时，应该进入 @theme 或组件封装，而不是在项目里复制同一个 w-[37rem]。',
    },
    {
      question: '为什么过度使用任意属性会降低可维护性？',
      answer:
        '任意属性接近直接写内联 CSS，可读性和一致性弱于标准工具类。它适合逃生，不适合成为主要样式组织方式。',
    },
  ],
}
