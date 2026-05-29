import { motion } from "framer-motion"
import Container from "../ui/Container"
import Button from "../ui/button"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        background: "#050508",
      }}
    >
      {/* Background image */}
      <motion.img
        src="public/imprenta nuvo.png"
        alt=""
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark base overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.72)",
        }}
      />

      {/* Left-to-right gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(5,5,8,0.98) 0%, rgba(5,5,8,0.82) 40%, rgba(5,5,8,0.3) 70%, transparent 100%)",
        }}
      />

      {/* Bottom fade to page bg */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "220px",
          background:
            "linear-gradient(to bottom, transparent 0%, #050508 100%)",
          zIndex: 2,
        }}
      />

      {/* Red atmospheric glow — top right */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-80px",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 70%)",
          filter: "blur(0px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          zIndex: 1,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          left: "calc(50% + 60px)",
          top: 0,
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(192,57,43,0.25) 30%, rgba(192,57,43,0.08) 70%, transparent 100%)",
          transformOrigin: "top",
          zIndex: 1,
          display: "none",
        }}
        className="accent-line"
      />

      {/* Content */}
      <Container
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "120px",
          paddingBottom: "100px",
        }}
      >
        <div style={{ maxWidth: "780px" }}>

          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "8px 18px",
                borderRadius: "100px",
                marginBottom: "36px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#e74c3c",
                  boxShadow: "0 0 8px rgba(231,76,60,0.8)",
                  flexShrink: 0,
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Producción Industrial Premium
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div {...fadeUp(0.25)}>
            <h1
              style={{
                fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
                fontSize: "clamp(68px, 11vw, 144px)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "#fff",
                margin: "0 0 0 -3px",
              }}
            >
              IMPRESIÓN
            </h1>
            <h1
              style={{
                fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
                fontSize: "clamp(68px, 11vw, 144px)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "transparent",
                WebkitTextStroke: "2px #c0392b",
                margin: "8px 0 0 -3px",
                position: "relative",
                display: "inline-block",
              }}
            >
              MODERNA
              {/* Red fill accent */}
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  color: "#c0392b",
                  WebkitTextStroke: "0",
                  clipPath: "inset(0 60% 0 0)",
                }}
                aria-hidden="true"
              >
                MODERNA
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "64px",
              height: "2px",
              background: "linear-gradient(90deg, #c0392b, rgba(192,57,43,0.2))",
              margin: "32px 0",
              transformOrigin: "left",
              borderRadius: "2px",
            }}
          />

          {/* Description */}
          <motion.p
            {...fadeUp(0.4)}
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.75,
              maxWidth: "520px",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
              margin: "0 0 48px 0",
            }}
          >
            Soluciones visuales impresas con precisión industrial,
            diseño contemporáneo y acabados premium para empresas modernas.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.55)}
            style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}
          >
            <Button>
              Explorar Servicios
            </Button>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 24px",
                height: "46px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)"
                e.currentTarget.style.color = "#fff"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)"
                e.currentTarget.style.color = "rgba(255,255,255,0.75)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Ver Portafolio
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.7)}
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "72px",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "+500", label: "Proyectos" },
              { num: "12", label: "Años" },
              { num: "99%", label: "Satisfacción" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
                    fontSize: "36px",
                    color: "#fff",
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "6px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, rgba(192,57,43,0.6), transparent)",
            borderRadius: "2px",
          }}
        />
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(231,76,60,0.8); }
          50% { opacity: 0.6; box-shadow: 0 0 16px rgba(231,76,60,0.4); }
        }

        @media (min-width: 1024px) {
          .accent-line { display: block !important; }
        }
      `}</style>
    </section>
  )
}