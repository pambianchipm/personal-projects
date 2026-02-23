export default function LoadingSpinner({ size = 36 }) {
  return (
    <div
      style={{
        width: size, height: size,
        border: '3px solid var(--border)',
        borderTopColor: 'var(--accent)',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
        margin: '40px auto',
      }}
    />
  )
}
