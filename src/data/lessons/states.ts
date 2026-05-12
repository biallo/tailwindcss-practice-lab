import type { Lesson } from '../lessonTypes'

export const statesLesson: Lesson = {
  id: 'states',
  order: '09',
  title: '伪类、伪元素与状态变体',
  summary: '掌握 hover、focus-visible、disabled、first、before、selection 等变体，给交互和结构状态补齐样式。',
  tags: ['状态', '伪类', '可访问性'],
  explain: [
    'Tailwind 的状态变体是在工具类前加条件前缀，例如 hover:bg-sky-600、focus-visible:outline-2、disabled:opacity-50。它们的意义是：默认状态仍由普通工具类控制，只有满足条件时才应用带前缀的工具类。',
    '交互控件不能只写 hover。鼠标用户会看到 hover，但键盘用户依赖 focus-visible 判断当前焦点。disabled、aria-disabled、invalid 也应当有明确视觉反馈，让用户知道控件为什么不能操作或哪里出错。',
    '结构伪类可以减少额外 CSS。例如 first:pt-0、last:border-b-0、odd:bg-slate-50、empty:hidden。它们适合列表、表格、菜单这类重复结构，避免为了第一个/最后一个元素额外写判断。',
    '伪元素变体如 before、after、marker、selection 可以处理装饰线、列表标记、选中文本颜色等场景。使用时要注意语义：装饰性内容适合伪元素，真实信息仍然应该放在 DOM 文本中。',
  ],
  samples: [
    {
      title: '按钮交互状态',
      language: 'tsx',
      caption: '默认、hover、active、focus-visible、disabled 状态同时表达。',
      lines: [
        { code: '<button' },
        { code: '  type="button"' },
        {
          code: '  className="rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-400 active:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:cursor-not-allowed disabled:opacity-50"',
          note: '不要只写 hover，键盘焦点和禁用态同样重要',
          emphasis: true,
        },
        { code: '>' },
        { code: '  提交' },
        { code: '</button>' },
      ],
    },
    {
      title: '列表结构状态',
      language: 'tsx',
      caption: '使用 first/last/odd 等变体处理重复项边界。',
      lines: [
        { code: '<ul className="divide-y divide-slate-200">' },
        {
          code: '  <li className="py-3 first:pt-0 last:pb-0 odd:bg-slate-50">',
          note: '结构状态由 CSS 变体处理，不需要额外判断',
          emphasis: true,
        },
        { code: '    课程条目' },
        { code: '  </li>' },
        { code: '</ul>' },
      ],
    },
  ],
  review: [
    {
      question: 'hover:bg-sky-500 和 bg-sky-500 的关系是什么？',
      answer:
        'bg-sky-500 是默认样式，hover:bg-sky-500 只在 hover 条件满足时生效。Tailwind 的状态变体不是覆盖语义类，而是给同一个元素增加条件样式。',
    },
    {
      question: '为什么 focus-visible 比只写 focus 更适合按钮？',
      answer:
        'focus-visible 通常只在键盘等需要可见焦点的场景出现，能避免鼠标点击后出现不必要焦点环，同时保证键盘用户可以定位当前控件。',
    },
    {
      question: '结构伪类适合解决什么问题？',
      answer:
        '适合处理重复结构中的边界和规律样式，例如第一项去掉上边距、最后一项去掉边框、奇偶行背景不同，不需要在渲染逻辑中写额外分支。',
    },
  ],
}
