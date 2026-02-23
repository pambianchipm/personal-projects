import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CategoryBadge from '../components/CategoryBadge'
import LoadingSpinner from '../components/LoadingSpinner'
import { apiFetch } from '../api'
import { useAuth } from '../hooks/useAuth'

export default function AgentDetail() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [agent, setAgent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [starting, setStarting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch(`/api/agents/${id}`)
      .then(setAgent)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  async function handleStartChat() {
    if (!user) { navigate('/login'); return }
    setStarting(true)
    try {
      const conv = await apiFetch(`/api/agents/${id}/conversations`, { method: 'POST', body: '{}' })
      navigate(`/chat/${conv.id}`)
    } catch (e) {
      setError(e.message)
    } finally {
      setStarting(false)
    }
  }

  if (loading) return <div className="page"><LoadingSpinner /></div>
  if (error) return <div className="page container"><div className="error-msg">{error}</div></div>
  if (!agent) return null

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 800 }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <CategoryBadge category={agent.category} />
            {agent.model && (
              <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>{agent.model}</span>
            )}
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>{agent.name}</h1>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {agent.description}
          </p>
        </div>

        {/* CTA */}
        <button
          className="btn-primary"
          style={{ fontSize: 16, padding: '14px 32px', marginBottom: 36 }}
          onClick={handleStartChat}
          disabled={starting}
        >
          {starting ? 'Starting…' : '💬 Start Chat'}
        </button>

        {/* Long description */}
        {agent.long_description && (
          <div className="card" style={{ marginBottom: 24 }}>
            <h3 style={{ marginBottom: 12, fontWeight: 600 }}>About this agent</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
              {agent.long_description}
            </p>
          </div>
        )}

        {/* Tags */}
        {agent.tags?.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: 14, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tags</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {agent.tags.map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px', borderRadius: 20,
                  background: 'var(--surface-2)', border: '1px solid var(--border)',
                  fontSize: 13, color: 'var(--text-muted)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Creator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'var(--accent-dim)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, color: 'var(--accent)', fontSize: 14,
          }}>
            {agent.creator_username[0].toUpperCase()}
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-faint)' }}>Created by</div>
            <Link to={`/profile/${agent.creator_username}`} style={{ fontWeight: 600, fontSize: 14 }}>
              {agent.creator_username}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
