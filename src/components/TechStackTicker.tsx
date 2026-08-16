import { useEffect, useState } from 'react'

const STACK = ['Claude', 'FastMCP', 'C#', 'Java', 'Python', 'Kubernetes', 'AWS', 'Cloudflare']

const TYPE_SPEED = 85
const DELETE_SPEED = 40
const HOLD_TIME = 1500
const PAUSE_BEFORE_NEXT = 350

// Renders just the animated word + cursor, styled to be dropped into a
// larger headline (see Home.tsx) rather than a standalone line.
export default function TechStackTicker() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = STACK[wordIndex % STACK.length]

    if (!deleting && text === currentWord) {
      const holdTimer = setTimeout(() => setDeleting(true), HOLD_TIME)
      return () => clearTimeout(holdTimer)
    }

    if (deleting && text === '') {
      const pauseTimer = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % STACK.length)
      }, PAUSE_BEFORE_NEXT)
      return () => clearTimeout(pauseTimer)
    }

    const speed = deleting ? DELETE_SPEED : TYPE_SPEED
    const timer = setTimeout(() => {
      setText(currentWord.slice(0, deleting ? text.length - 1 : text.length + 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex])

  return (
    <span style={{ color: '#818CF8' }}>
      {text}
      <span className="animate-blink" style={{ color: '#6366F1' }}>
        |
      </span>
    </span>
  )
}
