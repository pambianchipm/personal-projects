import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AgentCard from '../components/AgentCard'
import CategoryBadge from '../components/CategoryBadge'
import LoadingSpinner from '../components/LoadingSpinner'
import { CATEGORIES } from '../api'
import { useAgents } from '../hooks/useAgents'

export default function Marketplace() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [page, setPage] = useState(0)

  const { agents, loading, error } = useAgents({ q, category, page })

  function selectCategory(cat) {
    setCategory(prev => prev === cat ? '' : cat)
    setPage(0)
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Browse Agents</h1>
        <p className="page-subtitle">Discover AI agents built by the community</p>

        {/* Search */}
        <input
          value={q}
          onChange={e => { setQ(e.target.value); setPage(0) }}
          placeholder="Search agents…"
          style={{ maxWidth: 480, marginBottom: 20 }}
        />

        {/* Category filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              style={{
                background: 'none',
                border: `1px solid ${category === cat ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 20,
                padding: '5px 14px',
                fontSize: 13,
                color: category === cat ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {error && <div className="error-msg" style={{ marginBottom: 16 }}>{error}</div>}

        {loading ? (
          <LoadingSpinner />
        ) : agents.length === 0 ? (
          <div className="empty-state">
            <h3>No agents found</h3>
            <p>Try a different search or category</p>
          </div>
        ) : (
          <>
            <div className="agent-grid">
              {agents.map(agent => <AgentCard key={agent.id} agent={agent} />)}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 36 }}>
              <button
                className="btn-ghost btn-sm"
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0}
              >
                ← Previous
              </button>
              <span style={{ color: 'var(--text-muted)', lineHeight: '34px', fontSize: 13 }}>
                Page {page + 1}
              </span>
              <button
                className="btn-ghost btn-sm"
                onClick={() => setPage(p => p + 1)}
                disabled={agents.length < 12}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
