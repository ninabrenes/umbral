import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] mb-10">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl md:text-4xl font-light leading-[1.15] tracking-[-0.02em] mt-16 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl md:text-3xl font-light leading-[1.2] mt-12 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-serif text-xl font-light leading-[1.3] mt-10 mb-3">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-ink-muted font-light leading-relaxed mb-6">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-moss hover:text-sage underline underline-offset-4 decoration-moss/30 hover:decoration-sage/50 transition-colors duration-200"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-moss pl-6 my-8 italic text-ink/70 font-light leading-relaxed">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="space-y-3 mb-6 pl-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-3 mb-6 pl-1 list-decimal list-inside marker:text-ink/30 marker:font-light">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-3 text-ink-muted font-light leading-relaxed">
        <span className="shrink-0 mt-[0.6em] w-1 h-1 rounded-full bg-moss/60" />
        <span>{children}</span>
      </li>
    ),
    hr: () => (
      <hr className="my-16 border-0 h-px bg-ink/10" />
    ),
    strong: ({ children }) => (
      <strong className="font-normal text-ink">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-ink/80">
        {children}
      </em>
    ),
    code: ({ children }) => (
      <code className="text-sm font-mono bg-sand px-1.5 py-0.5 rounded text-ink/80">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-sand rounded-lg p-6 overflow-x-auto mb-6 text-sm leading-relaxed">
        {children}
      </pre>
    ),
    ...components,
  }
}
