export const CATEGORIES = [
  'Writing', 'Coding', 'Research', 'Business',
  'Creative', 'Education', 'Support', 'Other',
]

export const MODELS = [
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo (fast, affordable)' },
  { value: 'gpt-4o-mini', label: 'GPT-4o Mini (smarter, still fast)' },
  { value: 'gpt-4o', label: 'GPT-4o (most capable)' },
]

export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token) {
  localStorage.setItem('token', token)
}

export function clearToken() {
  localStorage.removeItem('token')
}

function authHeaders() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function apiFetch(path, options = {}) {
  const res = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
      ...(options.headers || {}),
    },
  })
  if (res.status === 401) {
    clearToken()
    window.location.href = '/login'
    return
  }
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Request failed')
  return data
}

export async function apiForm(path, formData) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Request failed')
  return data
}
