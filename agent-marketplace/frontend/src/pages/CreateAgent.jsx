import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES, MODELS, apiFetch } from '../api'

export default function CreateAgent() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', description: '', long_description: '',
    system_prompt: '', model: 'gpt-3.5-turbo',
    category: 'Other', tags: '', is_published: false,
  })

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean)
      await apiFetch('/api/agents', {
        method: 'POST',
        body: JSON.stringify({ ...form, tags }),
      })
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 700 }}>
        <h1 className="page-title">Create an Agent</h1>
        <p className="page-subtitle">Define your agent's personality and publish it to the marketplace.</p>

        {error && <div className="error-msg" style={{ marginBottom: 20 }}>{error}</div>}

        <form onSubmit={handleSubmit} className="card">
          <div className="form-group">
            <label>Name *</label>
            <input value={form.name} onChange={e => set('name', e.target.value)}
              placeholder="e.g. Python Tutor" required />
          </div>

          <div className="form-group">
            <label>Short Description * ({form.description.length}/200)</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)}
              placeholder="One or two sentences about what your agent does."
              maxLength={200} rows={2} required />
          </div>

          <div className="form-group">
            <label>Long Description</label>
            <textarea value={form.long_description} onChange={e => set('long_description', e.target.value)}
              placeholder="Detailed description shown on the agent's page. (optional)"
              rows={4} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="form-group">
              <label>Category *</label>
              <select value={form.category} onChange={e => set('category', e.target.value)}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Model *</label>
              <select value={form.model} onChange={e => set('model', e.target.value)}>
                {MODELS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Tags (comma-separated)</label>
            <input value={form.tags} onChange={e => set('tags', e.target.value)}
              placeholder="python, tutoring, beginner-friendly" />
          </div>

          <div className="form-group">
            <label>System Prompt *</label>
            <textarea value={form.system_prompt} onChange={e => set('system_prompt', e.target.value)}
              placeholder="You are a helpful Python tutor. Explain concepts clearly and give practical examples..."
              rows={8} required
              style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <input
              type="checkbox"
              id="published"
              checked={form.is_published}
              onChange={e => set('is_published', e.target.checked)}
              style={{ width: 'auto' }}
            />
            <label htmlFor="published" style={{ margin: 0, textTransform: 'none', fontSize: 14, color: 'var(--text)', cursor: 'pointer' }}>
              Publish immediately (visible in marketplace)
            </label>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Creating…' : 'Create Agent'}
            </button>
            <button type="button" className="btn-ghost" onClick={() => navigate('/dashboard')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
