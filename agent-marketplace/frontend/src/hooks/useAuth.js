import { createContext, useContext, useEffect, useState } from 'react'
import { apiFetch, apiForm, clearToken, getToken, setToken } from '../api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Restore session on mount
  useEffect(() => {
    const token = getToken()
    if (!token) { setLoading(false); return }
    apiFetch('/api/auth/me')
      .then(u => setUser(u))
      .catch(() => clearToken())
      .finally(() => setLoading(false))
  }, [])

  async function login(username, password) {
    const data = await apiForm('/api/auth/login', { username, password })
    setToken(data.access_token)
    const me = await apiFetch('/api/auth/me')
    setUser(me)
    return me
  }

  async function register(username, password, email = '') {
    const data = await apiForm('/api/auth/register', { username, password, email })
    setToken(data.access_token)
    const me = await apiFetch('/api/auth/me')
    setUser(me)
    return me
  }

  function logout() {
    clearToken()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
