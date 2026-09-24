'use client'

import { useEffect, useRef, useState } from 'react'
import {
  HELP_TEXT,
  ABOUT_TEXT,
  CONTACT_TEXT,
  CommandKey,
} from '@/lib/command'
import { TerminalCursor } from './TerminalCursor'

type Line = { type: 'input' | 'output'; content: string }

const SCROLL_TARGETS: Partial<Record<CommandKey, string>> = {
  missions: 'missions',
  stack: 'stack',
  contact: 'contact',
}

const PROMPT_USER = 'arthur@portfolio'

interface TerminalHeroProps {
  onExit?: () => void
}

const INTRO: Line[] = [
  { type: 'input', content: 'whoami' },
  {
    type: 'output',
    content:
      'RAZAFIARINOSY Lala Arthur\nFreelance Fullstack Next.js · Madagascar\nScale-ups · Produit · Archi · Perfs',
  },
  {
    type: 'output',
    content:
      'Tape "help" pour voir les commandes, ou clique une section ci-dessous.',
  },
]

export function TerminalHero({ onExit }: TerminalHeroProps) {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [introDone, setIntroDone] = useState(false)
  const [focused, setFocused] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  // Intro auto — blindée anti-StrictMode
  useEffect(() => {
    let cancelled = false
    let i = 0

    const timer = setInterval(() => {
      if (cancelled) return
      if (i >= INTRO.length) {
        clearInterval(timer)
        setIntroDone(true)
        return
      }
      const next = INTRO[i]
      if (next) setLines((prev) => [...prev, next])
      i++
    }, 500)

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [])

  // Autoscroll
  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [lines])

  // Focus auto
  useEffect(() => {
    if (introDone) inputRef.current?.focus()
  }, [introDone])

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase() as CommandKey
    if (!cmd) return

    setHistory((h) => [...h, raw])
    setHistoryIdx(null)

    // clear : efface tout, pas d'historique
    if (cmd === 'clear') {
      setLines([])
      return
    }

    // exit : affiche logout puis retourne au boot screen
    if (cmd === 'exit') {
      setLines((prev) => [
        ...prev,
        { type: 'input', content: raw },
        { type: 'output', content: 'logout\nConnexion fermée.' },
      ])
      setTimeout(() => {
        onExit?.()
      }, 900)
      return
    }

    let output = ''
    switch (cmd) {
      case 'help':
        output = HELP_TEXT
        break
      case 'about':
        output = ABOUT_TEXT
        break
      case 'contact':
        output = CONTACT_TEXT
        break
      case 'missions':
      case 'stack': {
        output = `→ Redirection vers la section "${cmd}"…`
        const target = SCROLL_TARGETS[cmd]
        if (target) {
          setTimeout(() => {
            document
              .getElementById(target)
              ?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        }
        break
      }
      default:
        output = `command not found: ${cmd}\nTape "help" pour la liste.`
    }

    setLines((prev) => [
      ...prev,
      { type: 'input', content: raw },
      { type: 'output', content: output },
    ])
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      runCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx =
        historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1)
      if (history[idx]) {
        setInput(history[idx])
        setHistoryIdx(idx)
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === null) return
      const idx = historyIdx + 1
      if (idx >= history.length) {
        setHistoryIdx(null)
        setInput('')
      } else {
        setInput(history[idx])
        setHistoryIdx(idx)
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      {/* Halo doux derrière le terminal */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(126,231,135,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-3xl relative">
        <div
          className="rounded-xl border border-border bg-surface terminal-glow overflow-hidden"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#0d1117]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">
              {PROMPT_USER} — zsh
            </span>
          </div>

          {/* Body */}
          <div
            ref={bodyRef}
            className="font-mono text-sm md:text-[15px] leading-relaxed p-5 h-[420px] overflow-y-auto"
          >
            {lines
              .filter((line): line is Line => Boolean(line))
              .map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {line.type === 'input' ? (
                    <span>
                      <span className="text-muted">{PROMPT_USER}</span>
                      <span className="text-muted">:</span>
                      <span className="text-accent">~</span>
                      <span className="text-muted">$ </span>
                      <span className="text-fg">{line.content}</span>
                    </span>
                  ) : (
                    <span className="text-fg/90">{line.content}</span>
                  )}
                </div>
              ))}

            {introDone && (
              <div className="flex items-center">
                <span className="text-muted">{PROMPT_USER}</span>
                <span className="text-muted">:</span>
                <span className="text-accent">~</span>
                <span className="text-muted">$&nbsp;</span>

                <span className="relative inline-flex items-center">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    size={Math.max(input.length, 1)}
                    className="bg-transparent outline-none text-fg caret-transparent font-mono p-0 m-0 border-0"
                    spellCheck={false}
                    autoComplete="off"
                    aria-label="Terminal input"
                  />
                  {focused ? (
                    <TerminalCursor />
                  ) : (
                    <span className="text-accent opacity-40">▊</span>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted font-mono">
          Essaie :{' '}
          {(['help', 'about', 'missions', 'stack', 'contact'] as const).map(
            (cmd, i) => (
              <span key={cmd}>
                <button
                  onClick={() => {
                    runCommand(cmd)
                    inputRef.current?.focus()
                  }}
                  className="text-accent/80 hover:text-accent link-underline"
                >
                  {cmd}
                </button>
                {i < 4 && <span className="text-muted/60"> · </span>}
              </span>
            )
          )}
        </p>
      </div>
    </section>
  )
}