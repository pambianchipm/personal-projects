import { Link } from 'react-router-dom'
import CategoryBadge from './CategoryBadge'

export default function AgentCard({ agent }) {
  return (
    <Link to={`/agents/${agent.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'border-color 0.15s, transform 0.15s',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
            {agent.name}
          </h3>
          <CategoryBadge category={agent.category} />
        </div>

        <p style={{
          fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5,
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
          flex: 1,
        }}>
          {agent.description}
        </p>

        {agent.tags?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {agent.tags.slice(0, 3).map(tag => (
              <span key={tag} style={{
                fontSize: '11px', color: 'var(--text-faint)',
                background: 'var(--surface-2)', padding: '2px 8px',
                borderRadius: '20px', border: '1px solid var(--border)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ fontSize: '12px', color: 'var(--text-faint)', marginTop: 'auto' }}>
          by{' '}
          <span style={{ color: 'var(--accent)' }}>{agent.creator_username}</span>
        </div>
      </div>
    </Link>
  )
}
