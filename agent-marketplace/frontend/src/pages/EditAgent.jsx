import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import { CATEGORIES, MODELS, apiFetch } from '../api'

export default function EditAgent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState(null)

  useEffect(() => {
    apiFetch(`/api/agents/${id}`)
      .then(agent => {
        setForm({
          name: agent.name,
          description: agent.description,
          long_description: agent.long_description || '',
          system_prompt: agent.system_prompt,
          model: agent.model,
          category: agent.category,
          tags: (agent.tags || []).join(', '),
          is_published: agent.is_published,
        })
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean)
      await apiFetch(`/api/agents/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...form, tags }),
      })
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    if (!window.confirm('Delete this agent? This cannot be undone.')) return
    try {
      await apiFetch(`/api/agents/${id}`, { method: 'DELETE' })
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) return <div className="page"><LoadingSpinner /></div>
  if (!form) return <div className="page container"><div className="error-msg">{error}</div></div>

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 700 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 className="page-title">Edit Agent</h1>
            <p className="page-subtitle">Update your agent's configuration.</p>
          </div>
          <button className="btn-danger btn-sm" onClick={handleDelete}>Delete</button>
        </div>

        {error && <div className="error-msg" style={{ marginBottom: 20 }}>{error}</div>}

        <form onSubmit={handleSubmit} className="card">
          <div className="form-group">
            <label>Name *</label>
            <input value={form.name} onChange={e => set('name', e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Short Description * ({form.description.length}/200)</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)}
              maxLength={200} rows={2} required />
          </div>

          <div className="form-group">
            <label>Long Description</label>
            <textarea value={form.long_description} onChange={e => set('long_description', e.target.value)} rows={4} />
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
            <input value={form.tags} onChange={e => set('tags', e.target.value)} />
          </div>

          <div className="form-group">
            <label>System Prompt *</label>
            <textarea value={form.system_prompt} onChange={e => set('system_prompt', e.target.value)}
              rows={8} required style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <input type="checkbox" id="published" checked={form.is_published}
              onChange={e => set('is_published', e.target.checked)} style={{ width: 'auto' }} />
            <label htmlFor="published" style={{ margin: 0, textTransform: 'none', fontSize: 14, color: 'var(--text)', cursor: 'pointer' }}>
              Published (visible in marketplace)
            </label>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? 'Saving…' : 'Save Changes'}
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
