import type { Lesson } from '../lessonTypes'

export const motionLesson: Lesson = {
  id: 'motion',
  order: '13',
  title: '动画、过渡与用户偏好',
  summary: '用 transition、animate、motion-safe、motion-reduce 给界面添加克制且可访问的动效。',
  tags: ['动画', '过渡', 'motion-reduce'],
  explain: [
    '大多数产品界面不需要复杂动画，最常见的是过渡：颜色、阴影、透明度、位移在状态变化时平滑切换。Tailwind 的 transition、duration-*、ease-*、delay-* 能覆盖大部分按钮、卡片、弹层场景。',
    '动效要服务交互反馈。hover 时按钮变色、展开面板淡入、弹层轻微位移，这些都能帮助用户理解状态变化。相反，装饰性过强或持续运动的动画会分散注意力，尤其不适合学习工具和工作台界面。',
    '用户可能在系统里开启“减少动态效果”。Tailwind 提供 motion-safe 和 motion-reduce 变体。motion-safe 表示只有用户没有要求减少动画时才启用，motion-reduce 可以在减少动画时禁用 transform 或缩短动画。',
    '性能上优先动画 opacity 和 transform，谨慎动画 width、height、top、left。后者更容易触发布局计算，复杂页面中可能卡顿。展开折叠如果高度不确定，可以考虑 opacity、translate 或使用浏览器支持更好的方案。',
  ],
  samples: [
    {
      title: '基础过渡',
      language: 'tsx',
      caption: '只让需要变化的属性过渡，反馈更克制。',
      lines: [
        { code: '<button' },
        {
          code: '  className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors duration-150 hover:bg-sky-400 active:bg-sky-600"',
          note: 'transition-colors 比 transition-all 更明确',
          emphasis: true,
        },
        { code: '>' },
        { code: '  保存' },
        { code: '</button>' },
      ],
    },
    {
      title: '尊重减少动态效果',
      language: 'tsx',
      caption: '只在 motion-safe 下启用位移动画。',
      lines: [
        { code: '<div' },
        {
          code: '  className="opacity-0 transition motion-safe:translate-y-2 motion-safe:duration-200 motion-reduce:transform-none"',
          note: '用户要求减少动态效果时不做位移',
          emphasis: true,
        },
        { code: '/>' },
      ],
    },
  ],
  review: [
    {
      question: '为什么不建议随手使用 transition-all？',
      answer:
        'transition-all 会让所有可动画属性都过渡，可能引入意外动画和性能问题。更推荐 transition-colors、transition-opacity、transition-transform 这类明确范围。',
    },
    {
      question: 'motion-safe 和 motion-reduce 的作用是什么？',
      answer:
        '它们根据用户的 prefers-reduced-motion 偏好条件化应用样式。motion-safe 只在用户未要求减少动画时启用，motion-reduce 则在要求减少动画时应用替代样式。',
    },
    {
      question: '哪些 CSS 属性更适合动画？',
      answer:
        'opacity 和 transform 通常更适合动画，因为它们较少触发布局重排。width、height、top、left 等布局属性要谨慎动画。',
    },
  ],
}
