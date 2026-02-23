import { useEffect, useRef, useState } from 'react'
import { apiFetch } from '../api'

export function useAgents({ q = '', category = '', page = 0, limit = 12 } = {}) {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const debounceRef = useRef(null)

  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setLoading(true)
      setError('')
      const params = new URLSearchParams({ page, limit })
      if (q) params.set('q', q)
      if (category) params.set('category', category)
      apiFetch(`/api/agents?${params}`)
        .then(data => setAgents(data || []))
        .catch(e => setError(e.message))
        .finally(() => setLoading(false))
    }, 300)
    return () => clearTimeout(debounceRef.current)
  }, [q, category, page, limit])

  return { agents, loading, error }
}
