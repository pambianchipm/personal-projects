import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-height)',
      background: 'rgba(13,13,20,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        height: '100%', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontWeight: 700, fontSize: '18px',
          color: 'var(--text)', letterSpacing: '-0.02em',
        }}>
          <span style={{ color: 'var(--accent)' }}>Agent</span>Market
        </Link>

        {/* Center links */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/marketplace" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            Browse
          </Link>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {user ? (
            <>
              <Link to="/create">
                <button className="btn-primary btn-sm">+ Create Agent</button>
              </Link>
              <Link to="/dashboard" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                {user.username}
              </Link>
              <button className="btn-ghost btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn-primary btn-sm">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
