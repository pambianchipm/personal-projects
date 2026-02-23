import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import CategoryBadge from '../components/CategoryBadge'
import { apiFetch } from '../api'
import { useAuth } from '../hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch('/api/agents/mine')
      .then(data => setAgents(data || []))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  async function togglePublish(agent) {
    const endpoint = agent.is_published ? 'unpublish' : 'publish'
    try {
      const updated = await apiFetch(`/api/agents/${agent.id}/${endpoint}`, { method: 'POST', body: '{}' })
      setAgents(prev => prev.map(a => a.id === agent.id ? updated : a))
    } catch (e) {
      alert(e.message)
    }
  }

  async function deleteAgent(agent) {
    if (!window.confirm(`Delete "${agent.name}"? This cannot be undone.`)) return
    try {
      await apiFetch(`/api/agents/${agent.id}`, { method: 'DELETE' })
      setAgents(prev => prev.filter(a => a.id !== agent.id))
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 className="page-title">My Agents</h1>
            <p className="page-subtitle">Manage the agents you've created.</p>
          </div>
          <Link to="/create">
            <button className="btn-primary">+ New Agent</button>
          </Link>
        </div>

        {error && <div className="error-msg" style={{ marginBottom: 16 }}>{error}</div>}

        {loading ? <LoadingSpinner /> : agents.length === 0 ? (
          <div className="empty-state">
            <h3>No agents yet</h3>
            <p>Create your first agent to get started.</p>
            <Link to="/create" style={{ display: 'inline-block', marginTop: 16 }}>
              <button className="btn-primary">Create Agent</button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {agents.map(agent => (
              <div key={agent.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 600 }}>{agent.name}</span>
                    <CategoryBadge category={agent.category} />
                    <span className={`badge ${agent.is_published ? 'badge-published' : 'badge-draft'}`}>
                      {agent.is_published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {agent.description}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => navigate(`/agents/${agent.id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => togglePublish(agent)}
                  >
                    {agent.is_published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    className="btn-danger btn-sm"
                    onClick={() => deleteAgent(agent)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
