import { useState, useRef, useEffect } from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import Button from './Button'

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    text: "Hi! I'm Alex's AI assistant 👋 Ask me anything about his skills, projects, or experience.",
  },
]

const CANNED_RESPONSES = {
  skills: "Alex is proficient in Python, JavaScript, TypeScript, React, Next.js, FastAPI, LangChain, TensorFlow, Docker, and more. He specializes in GenAI and full-stack development.",
  project: "Alex has built 20+ projects including a RAG-based knowledge system (NeuroVault), a brain tumor detection app, and a signature verification system. Check the Projects section for details!",
  experience: "Alex has 3+ years of experience as a Full Stack and GenAI developer. He's worked on freelance AI projects, interned at a SaaS startup, and conducted ML research at university.",
  contact: "You can reach Alex at alex@example.com or connect with him on LinkedIn and GitHub. Use the Contact section below.",
  default: "Great question! For more details, feel free to reach out via the Contact section, or browse the sections above. I'm a demo assistant — a real AI backend can be integrated here! 🚀",
}

function getBotResponse(input) {
  const lower = input.toLowerCase()
  if (lower.match(/skill|tech|stack|language|framework/)) return CANNED_RESPONSES.skills
  if (lower.match(/project|build|work|portfolio/)) return CANNED_RESPONSES.project
  if (lower.match(/experience|job|intern|work history/)) return CANNED_RESPONSES.experience
  if (lower.match(/contact|email|reach|hire|available/)) return CANNED_RESPONSES.contact
  return CANNED_RESPONSES.default
}

export default function Chatbot() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)

useEffect(() => {}, [])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    const userMsg = { id: Date.now(), role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, role: 'assistant', text: getBotResponse(text) }
      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 900)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const suggestions = ['What are Alex\'s skills?', 'Tell me about his projects', 'How to contact him?']

  return (
    <section
      id="chatbot"
      className="section bg-light-bg dark:bg-dark-bg relative overflow-hidden"
      aria-labelledby="chatbot-heading"
    >
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
          bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            label="AI Assistant"
            title={<span id="chatbot-heading">Ask My AI Assistant</span>}
            subtitle="Powered by context about my skills, projects & experience. Try asking something."
            className="text-center [&>p]:mx-auto [&>h2]:text-center"
          />

          {/* Chat Window */}
          <div className="rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden
            bg-white dark:bg-dark-surface shadow-card">

            {/* Header bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 dark:border-dark-border
              bg-gray-50 dark:bg-dark-bg">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.713-1.352 2.713H4.15c-1.38 0-2.351-1.713-1.351-2.713L4.2 15.3" />
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-dark-bg" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Alex's AI</p>
                <p className="text-xs text-emerald-500">Online — demo mode</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-5 py-5 flex flex-col gap-4 scroll-smooth">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                      ${msg.role === 'user'
                        ? 'bg-gradient-accent text-white rounded-tr-sm'
                        : 'bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-tl-sm'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-accent flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-dark-bg rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestion chips */}
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => { setInput(s); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary
                    hover:bg-primary/10 transition-colors duration-200"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input bar */}
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-dark-border
                bg-gray-50 dark:bg-dark-bg px-4 py-2.5 focus-within:border-primary dark:focus-within:border-primary
                transition-colors duration-200">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask something about Alex…"
                  className="flex-1 bg-transparent text-sm text-gray-800 dark:text-gray-200
                    placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                  aria-label="Chat input"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center
                    disabled:opacity-40 hover:scale-105 active:scale-95 transition-transform duration-150"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
