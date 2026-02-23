import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function LoginRegister() {
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/marketplace'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (isRegister) {
        await register(username, password, email)
      } else {
        await login(username, password)
      }
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div className="card">
          <h2 style={{ marginBottom: 6, fontSize: 22, fontWeight: 700 }}>
            {isRegister ? 'Create an account' : 'Welcome back'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>
            {isRegister
              ? 'Join Agent Marketplace and start building or browsing AI agents.'
              : 'Sign in to continue to Agent Marketplace.'}
          </p>

          {error && <div className="error-msg" style={{ marginBottom: 16 }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="yourname"
                required
                autoFocus
              />
            </div>

            {isRegister && (
              <div className="form-group">
                <label>Email (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            )}

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', marginTop: 8 }}
              disabled={loading}
            >
              {loading ? 'Please wait…' : (isRegister ? 'Create account' : 'Sign in')}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--text-muted)' }}>
            {isRegister ? 'Already have an account? ' : "Don't have an account? "}
            <button
              onClick={() => { setIsRegister(!isRegister); setError('') }}
              style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', padding: 0 }}
            >
              {isRegister ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
