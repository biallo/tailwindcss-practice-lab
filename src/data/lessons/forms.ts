import type { Lesson } from '../lessonTypes'

export const formsLesson: Lesson = {
  id: 'forms',
  order: '12',
  title: '表单与可访问性样式',
  summary: '用 focus-visible、disabled、invalid、placeholder、aria-describedby 等工具写出清晰可用的表单。',
  tags: ['表单', '可访问性', '状态'],
  explain: [
    '表单样式的目标不只是好看，而是让用户知道当前字段是什么、是否可编辑、哪里出错、如何修正。Tailwind 提供 border、ring、placeholder、disabled、invalid、focus-visible 等工具，能把这些状态放在同一个 className 中。',
    '输入框的焦点样式应足够明显。常见组合是 border + focus:border-* + focus:ring-*。按钮和自定义控件更推荐 focus-visible，输入框可以使用 focus 或 focus-visible，关键是键盘用户必须能定位焦点。',
    '错误状态应该同时有颜色、文本说明和语义关联。只把边框变红是不够的，应该用 aria-invalid 表达错误，用 aria-describedby 关联错误说明文本。Tailwind 负责视觉，ARIA 负责语义。',
    'disabled 状态要同时处理视觉和交互。disabled:opacity-50、disabled:cursor-not-allowed 可以让用户快速理解控件不可用，但不要只靠透明度表达重要信息，必要时提供原因说明。',
  ],
  samples: [
    {
      title: '带说明和错误的输入框',
      language: 'tsx',
      caption: '视觉状态和语义属性一起出现。',
      lines: [
        { code: '<label className="block">' },
        { code: '  <span className="text-sm font-medium text-slate-700">邮箱</span>' },
        { code: '  <input' },
        { code: '    aria-invalid={hasError}' },
        { code: '    aria-describedby="email-error"' },
        {
          code: '    className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 aria-invalid:border-rose-500 aria-invalid:ring-rose-500/20"',
          note: 'aria-invalid 同时驱动语义和错误样式',
          emphasis: true,
        },
        { code: '  />' },
        { code: '  <p id="email-error" className="mt-2 text-sm text-rose-600">请输入有效邮箱</p>' },
        { code: '</label>' },
      ],
    },
    {
      title: '禁用按钮',
      language: 'tsx',
      caption: '禁用态需要视觉反馈，也需要真实 disabled 属性。',
      lines: [
        { code: '<button' },
        { code: '  type="submit"' },
        { code: '  disabled={submitting}' },
        {
          code: '  className="rounded-md bg-slate-950 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"',
          note: '真实 disabled 阻止交互，变体负责视觉',
          emphasis: true,
        },
        { code: '>' },
        { code: '  提交' },
        { code: '</button>' },
      ],
    },
  ],
  review: [
    {
      question: '为什么表单错误不能只靠红色边框表达？',
      answer:
        '颜色对部分用户不可见或不明显，而且红色边框没有说明如何修正。应该提供错误文本，并用 aria-invalid、aria-describedby 建立语义关联。',
    },
    {
      question: 'disabled 样式和 disabled 属性有什么区别？',
      answer:
        'disabled 属性真正禁用控件交互和提交行为，disabled:* 样式只是视觉反馈。两者应该一起使用。',
    },
    {
      question: 'placeholder 应该承担字段说明吗？',
      answer:
        '不应该。placeholder 会在输入后消失，也不总是被辅助技术可靠读取。字段名称应使用 label，placeholder 只作为格式提示。',
    },
  ],
}
