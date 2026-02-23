import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import { apiFetch } from '../api'

export default function Chat() {
  const { conversationId } = useParams()
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [agentName, setAgentName] = useState('')
  const [agentModel, setAgentModel] = useState('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    apiFetch(`/api/conversations/${conversationId}`)
      .then(data => {
        setAgentName(data.agent_name)
        setAgentModel(data.agent_model)
        setMessages(data.messages)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [conversationId])

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    const content = input.trim()
    if (!content || sending) return
    setInput('')
    setSending(true)

    // Optimistically add user message
    const optimistic = { id: Date.now(), role: 'user', content, timestamp: new Date().toISOString() }
    setMessages(prev => [...prev, optimistic])

    try {
      const data = await apiFetch(`/api/conversations/${conversationId}/messages`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      })
      // Replace optimistic + add assistant reply
      setMessages(prev => [
        ...prev.filter(m => m.id !== optimistic.id),
        data.user_message,
        data.assistant_message,
      ])
    } catch (e) {
      setMessages(prev => prev.filter(m => m.id !== optimistic.id))
      setError(e.message)
    } finally {
      setSending(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (loading) return <div className="page"><LoadingSpinner /></div>

  return (
    <div style={{
      position: 'fixed', inset: 0,
      paddingTop: 'var(--nav-height)',
      display: 'flex', flexDirection: 'column',
      background: 'var(--bg)',
    }}>
      {/* Chat header */}
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 12,
        background: 'var(--surface)',
      }}>
        <button className="btn-ghost btn-sm" onClick={() => navigate(-1)}>←</button>
        <div>
          <div style={{ fontWeight: 600 }}>{agentName}</div>
          <div style={{ fontSize: 12, color: 'var(--text-faint)' }}>{agentModel}</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-faint)', marginTop: 60 }}>
              Send a message to start the conversation.
            </div>
          )}

          {messages.map(msg => (
            <div key={msg.id} style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 16,
            }}>
              <div style={{
                maxWidth: '75%',
                padding: '12px 16px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.role === 'user' ? 'var(--accent)' : 'var(--surface)',
                border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none',
                fontSize: 14, lineHeight: 1.6,
                color: msg.role === 'user' ? '#fff' : 'var(--text)',
                whiteSpace: 'pre-wrap', wordBreak: 'break-word',
              }}>
                {msg.content}
              </div>
            </div>
          ))}

          {sending && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 16 }}>
              <div style={{
                padding: '12px 16px', borderRadius: '16px 16px 16px 4px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                color: 'var(--text-faint)', fontSize: 14,
              }}>
                Thinking…
              </div>
            </div>
          )}

          {error && (
            <div className="error-msg" style={{ marginBottom: 16 }}>{error}</div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Composer */}
      <div style={{
        padding: '16px 20px',
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', gap: 10 }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message… (Enter to send, Shift+Enter for newline)"
            rows={2}
            style={{ flex: 1, resize: 'none' }}
            disabled={sending}
          />
          <button
            className="btn-primary"
            onClick={sendMessage}
            disabled={sending || !input.trim()}
            style={{ alignSelf: 'flex-end', padding: '10px 20px' }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
