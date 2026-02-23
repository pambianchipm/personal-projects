import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AgentCard from '../components/AgentCard'
import LoadingSpinner from '../components/LoadingSpinner'
import { CATEGORIES, apiFetch } from '../api'

export default function Home() {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch('/api/agents?limit=6')
      .then(data => setFeatured(data || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="page">
      {/* Hero */}
      <section style={{
        textAlign: 'center', padding: '60px 20px 80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)',
      }}>
        <div style={{
          display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-dim)',
          padding: '4px 14px', borderRadius: 20, marginBottom: 20,
        }}>
          Agent Marketplace
        </div>
        <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.03em' }}>
          Discover AI Agents<br />
          <span style={{ color: 'var(--accent)' }}>Built by Creators</span>
        </h1>
        <p style={{ fontSize: 18, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 36px' }}>
          Browse a marketplace of specialized AI agents. Chat instantly, or build your own and share it with the world.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/marketplace">
            <button className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>
              Browse Marketplace
            </button>
          </Link>
          <Link to="/create">
            <button className="btn-ghost" style={{ fontSize: 15, padding: '12px 28px' }}>
              Create an Agent
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Agents */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container">
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Featured Agents</h2>
          {loading ? <LoadingSpinner /> : featured.length === 0 ? (
            <div className="empty-state">
              <h3>No agents yet</h3>
              <p>Be the first to <Link to="/create">create one</Link>!</p>
            </div>
          ) : (
            <>
              <div className="agent-grid">
                {featured.map(a => <AgentCard key={a.id} agent={a} />)}
              </div>
              <div style={{ textAlign: 'center', marginTop: 28 }}>
                <Link to="/marketplace">
                  <button className="btn-ghost">View all agents →</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Browse by Category</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {CATEGORIES.map(cat => (
              <Link key={cat} to={`/marketplace?category=${cat}`} style={{ textDecoration: 'none' }}>
                <button className="btn-ghost" style={{ borderRadius: 8 }}>{cat}</button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 32, textAlign: 'center' }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { n: '1', title: 'Browse', desc: 'Explore agents built by creators across dozens of categories.' },
              { n: '2', title: 'Chat', desc: 'Start a conversation instantly. Each agent has a unique personality and skill set.' },
              { n: '3', title: 'Create', desc: 'Build your own agent with a custom system prompt and publish it to the marketplace.' },
            ].map(step => (
              <div key={step.n} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--accent-dim)', border: '1px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: 'var(--accent)', margin: '0 auto 14px',
                }}>
                  {step.n}
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
