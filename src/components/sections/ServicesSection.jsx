import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Container from "../ui/Container"
import ServiceCard from "../cards/ServiceCard"
import { services } from "../../data/services"
 
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})
 
export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
 
  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 10vw, 140px) 0",
        background: "#f7f6f4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
 
      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: "linear-gradient(90deg, #c0392b 0%, rgba(192,57,43,0.15) 60%, transparent 100%)",
          transformOrigin: "left",
          zIndex: 1,
        }}
      />
 
      <Container style={{ position: "relative", zIndex: 2 }}>
 
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            marginBottom: "72px",
            maxWidth: "680px",
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "2px",
                background: "#c0392b",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                color: "#c0392b",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Servicios
            </span>
          </motion.div>
 
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
              fontSize: "clamp(48px, 7vw, 86px)",
              lineHeight: 0.92,
              letterSpacing: "0.02em",
              color: "#0a0a0d",
              margin: "0 0 24px 0",
            }}
          >
            Diseño y
            <span
              style={{
                display: "block",
                color: "transparent",
                WebkitTextStroke: "2px #c0392b",
              }}
            >
              Personalización
            </span>
          </motion.h2>
 
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: "#6b6b70",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.75,
              maxWidth: "480px",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Adaptamos tus ideas a cualquier soporte técnico, garantizando fidelidad de color y una identidad visual sólida para tu negocio.
          </motion.p>
        </div>
 
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
 
        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <p
            style={{
              color: "#6b6b70",
              fontSize: "14px",
              fontFamily: "system-ui, sans-serif",
              margin: 0,
            }}
          >
            ¿No encuentras lo que buscas?{" "}
            <a
              href="#"
              style={{
                color: "#c0392b",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1px solid rgba(192,57,43,0.3)",
                paddingBottom: "1px",
              }}
            >
              Consulta personalizada
            </a>
          </p>
 
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 22px",
              height: "44px",
              borderRadius: "10px",
              border: "1.5px solid #0a0a0d",
              background: "transparent",
              color: "#0a0a0d",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#0a0a0d"
              e.currentTarget.style.color = "#fff"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = "#0a0a0d"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            Ver todos los servicios
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
 
      </Container>
 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  )
}
 