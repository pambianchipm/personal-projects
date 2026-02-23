const COLOR_MAP = {
  Writing:   { bg: 'rgba(167,139,250,0.15)', color: 'var(--cat-writing)' },
  Coding:    { bg: 'rgba(56,189,248,0.15)',  color: 'var(--cat-coding)' },
  Research:  { bg: 'rgba(52,211,153,0.15)',  color: 'var(--cat-research)' },
  Business:  { bg: 'rgba(251,191,36,0.15)',  color: 'var(--cat-business)' },
  Creative:  { bg: 'rgba(251,113,133,0.15)', color: 'var(--cat-creative)' },
  Education: { bg: 'rgba(96,165,250,0.15)',  color: 'var(--cat-education)' },
  Support:   { bg: 'rgba(74,222,128,0.15)',  color: 'var(--cat-support)' },
  Other:     { bg: 'rgba(148,163,184,0.1)',  color: 'var(--cat-other)' },
}

export default function CategoryBadge({ category }) {
  const style = COLOR_MAP[category] || COLOR_MAP.Other
  return (
    <span
      className="badge"
      style={{ background: style.bg, color: style.color }}
    >
      {category}
    </span>
  )
}
