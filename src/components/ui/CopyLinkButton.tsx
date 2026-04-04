'use client'

import { useState } from 'react'
import { Link as LinkIcon, Check } from '@phosphor-icons/react'

interface CopyLinkButtonProps {
  label: string
  copiedLabel: string
}

export function CopyLinkButton({ label, copiedLabel }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm text-cloud/60 hover:text-white hover:border-white/20 transition-colors duration-200 font-sans"
      type="button"
    >
      {copied ? (
        <>
          <Check size={16} weight="bold" className="text-sage" />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <LinkIcon size={16} weight="duotone" />
          <span>{label}</span>
        </>
      )}
    </button>
  )
}
