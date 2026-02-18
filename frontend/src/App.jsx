import React, { useEffect, useMemo, useState } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE || ''

function AuthForm({ onAuth }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setRegister] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!username.trim() || !password.trim()) return
    setLoading(true)
    setError('')
    try {
      const url = isRegister ? `${API_BASE}/api/register` : `${API_BASE}/api/login`
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.detail || 'Authentication failed')
        return
      }
      if (data.access_token) onAuth(data.access_token)
    } catch (err) {
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  const onEnter = (event) => {
    if (event.key === 'Enter') submit()
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Agent Console</p>
        <h1>{isRegister ? 'Create account' : 'Welcome back'}</h1>
        <p className="subtle">Sign in to access your private chat history.</p>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={onEnter}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={onEnter}
        />
        {error ? <div className="error">{error}</div> : null}
        <button className="primary" onClick={submit} disabled={loading}>
          {loading ? 'Working...' : isRegister ? 'Register' : 'Login'}
        </button>
        <button className="ghost" onClick={() => setRegister((s) => !s)} disabled={loading}>
          {isRegister ? 'Have an account? Login' : 'Create account'}
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [conversationId, setConversationId] = useState(null)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      loadConversations(token)
    }
  }, [token])

  const authHeaders = useMemo(() => {
    if (!token) return {}
    return { Authorization: `Bearer ${token}` }
  }, [token])

  if (!token) return <AuthForm onAuth={setToken} />

  const loadConversations = async (sessionToken = token) => {
    if (!sessionToken) return
    try {
      const res = await fetch(`${API_BASE}/api/conversations`, {
        headers: { Authorization: `Bearer ${sessionToken}` },
      })
      if (!res.ok) return
      const data = await res.json()
      setConversations(data.conversations || [])
    } catch (err) {
      console.error(err)
    }
  }

  const openConversation = async (id) => {
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/conversations/${id}`, {
        headers: authHeaders,
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.detail || 'Failed to load conversation')
        return
      }
      setConversationId(data.conversation.id)
      setMessages((data.messages || []).filter((m) => m.role !== 'system'))
    } catch (err) {
      setError(String(err))
    }
  }

  const startNewChat = () => {
    setConversationId(null)
    setMessages([])
    setInput('')
    setError('')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setConversationId(null)
    setMessages([])
    setConversations([])
  }

  const sendMessage = async () => {
    if (!input.trim()) return
    setError('')
    const next = [...messages, { role: 'user', content: input }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({
          messages: next,
          conversation_id: conversationId,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.detail || 'Request failed')
        return
      }
      setConversationId(data.conversation_id)
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
      loadConversations()
    } catch (err) {
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  const onComposerKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <aside className="sidebar">
        <div className="sidebar-top">
          <div>
            <p className="eyebrow">Agent Console</p>
            <h2>Conversations</h2>
          </div>
          <button className="ghost small" onClick={startNewChat}>New chat</button>
        </div>
        <div className="conversation-list">
          {conversations.length === 0 ? (
            <p className="subtle">No saved conversations yet.</p>
          ) : (
            conversations.map((conversation) => (
              <button
                key={conversation.id}
                className={`conversation-item ${conversation.id === conversationId ? 'active' : ''}`}
                onClick={() => openConversation(conversation.id)}
              >
                <span>{conversation.title || 'Untitled'}</span>
              </button>
            ))
          )}
        </div>
        <button className="ghost small logout" onClick={logout}>Logout</button>
      </aside>

      <main className="panel">
        <header className="panel-header">
          <h3>{conversationId ? `Conversation #${conversationId}` : 'New conversation'}</h3>
          <p>Press Enter to send, Shift+Enter for newline.</p>
        </header>

        <section className="chat">
          {messages.length === 0 ? (
            <div className="empty-state">
              <h4>Start your first message</h4>
              <p>Ask for ideas, code help, or planning support.</p>
            </div>
          ) : (
            messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                <div className="role">{m.role}</div>
                <div className="content">{m.content}</div>
              </div>
            ))
          )}
        </section>

        <div className="composer">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onComposerKeyDown}
            placeholder="Type your message..."
            rows={2}
          />
          <button className="primary" onClick={sendMessage} disabled={loading || !input.trim()}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
        {error ? <div className="error composer-error">{error}</div> : null}
      </main>
    </div>
  )
}
