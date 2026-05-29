
export default function Button({
  children,
  className = "",
  variant = "primary",
  style = {},
  ...props
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "0 24px",
    height: "46px",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    fontFamily: "system-ui, sans-serif",
    whiteSpace: "nowrap",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
  }
 
  const variants = {
    primary: {
      background: "linear-gradient(135deg, #c0392b 0%, #a93226 100%)",
      color: "#fff",
      boxShadow: "0 4px 20px rgba(192,57,43,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
    },
    ghost: {
      background: "transparent",
      color: "rgba(255,255,255,0.7)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "none",
    },
    outline: {
      background: "transparent",
      color: "#c0392b",
      border: "1.5px solid #c0392b",
      boxShadow: "none",
    },
  }
 
  return (
    <button
      {...props}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-2px)"
        if (variant === "primary") {
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(192,57,43,0.55), inset 0 1px 0 rgba(255,255,255,0.15)"
        } else if (variant === "ghost") {
          e.currentTarget.style.background = "rgba(255,255,255,0.06)"
          e.currentTarget.style.color = "#fff"
        } else {
          e.currentTarget.style.background = "rgba(192,57,43,0.08)"
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)"
        Object.assign(e.currentTarget.style, variants[variant])
      }}
      className={className}
    >
      {children}
    </button>
  )
}