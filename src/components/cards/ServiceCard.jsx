import { useState } from "react"
 
export default function ServiceCard({ title, description, icon: Icon }) {
  const [hovered, setHovered] = useState(false)
 
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "#0a0a0d" : "#fff",
        border: `1px solid ${hovered ? "transparent" : "rgba(0,0,0,0.07)"}`,
        borderRadius: "16px",
        padding: "36px 32px",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(192,57,43,0.35)"
          : "0 1px 3px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      {/* Red corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "80px",
          height: "80px",
          background: hovered
            ? "rgba(192,57,43,0.18)"
            : "rgba(192,57,43,0.05)",
          borderRadius: "0 16px 0 80px",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
 
      {/* Bottom glow on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: hovered
            ? "linear-gradient(90deg, transparent, rgba(192,57,43,0.6), transparent)"
            : "transparent",
          transition: "all 0.35s",
        }}
      />
 
      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          background: hovered
            ? "linear-gradient(135deg, #c0392b 0%, #96281b 100%)"
            : "rgba(192,57,43,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: hovered ? "0 8px 24px rgba(192,57,43,0.35)" : "none",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {Icon && (
          <Icon
            size={22}
            style={{
              color: hovered ? "#fff" : "#c0392b",
              transition: "color 0.3s",
            }}
          />
        )}
      </div>
 
      {/* Title */}
      <h3
        style={{
          fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
          fontSize: "22px",
          letterSpacing: "0.06em",
          color: hovered ? "#fff" : "#0a0a0d",
          margin: "0 0 12px 0",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 1,
          transition: "color 0.3s",
        }}
      >
        {title}
      </h3>
 
      {/* Description */}
      <p
        style={{
          color: hovered ? "rgba(255,255,255,0.55)" : "#6b6b70",
          fontSize: "14px",
          lineHeight: 1.7,
          margin: "0 0 28px 0",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          zIndex: 1,
          transition: "color 0.3s",
        }}
      >
        {description}
      </p>
 
      {/* Arrow link */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: hovered ? "#e74c3c" : "rgba(0,0,0,0.35)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          zIndex: 1,
          transition: "all 0.3s",
        }}
      >
        Ver más
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            transform: hovered ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <path
            d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </div>
  )
}
 