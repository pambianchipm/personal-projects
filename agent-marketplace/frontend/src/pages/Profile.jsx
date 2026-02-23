import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AgentCard from '../components/AgentCard'
import LoadingSpinner from '../components/LoadingSpinner'
import { apiFetch } from '../api'

export default function Profile() {
  const { username } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch(`/api/users/${username}`)
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [username])

  if (loading) return <div className="page"><LoadingSpinner /></div>
  if (error) return <div className="page container"><div className="error-msg">{error}</div></div>

  const { user, agents } = data

  return (
    <div className="page">
      <div className="container">
        {/* Profile header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'var(--accent-dim)', border: '2px solid var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, fontWeight: 700, color: 'var(--accent)', marginBottom: 16,
          }}>
            {user.username[0].toUpperCase()}
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700 }}>{user.username}</h1>
          {user.bio && <p style={{ color: 'var(--text-muted)', marginTop: 6 }}>{user.bio}</p>}
          <p style={{ color: 'var(--text-faint)', fontSize: 13, marginTop: 6 }}>
            Member since {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Published agents */}
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          Agents ({agents.length})
        </h2>
        {agents.length === 0 ? (
          <div className="empty-state">
            <h3>No agents published yet</h3>
            <p>Check back later!</p>
          </div>
        ) : (
          <div className="agent-grid">
            {agents.map(agent => <AgentCard key={agent.id} agent={agent} />)}
          </div>
        )}
      </div>
    </div>
  )
}
