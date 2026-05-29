import { motion } from "framer-motion"
import Container from "../ui/Container"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "#050508",
        paddingTop: "100px",
        paddingBottom: "40px",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Glow decorativo superior derecho */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Grano sutil */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E\")",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container style={{ position: "relative", zIndex: 10 }}>
        {/* TOP SECTION: Grid de enlaces */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            paddingBottom: "48px",
            marginBottom: "32px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* BRAND COLUMN */}
          <motion.div {...fadeUp(0.1)} style={{ gridColumn: "span 2" }}>
            <span
              style={{
                display: "inline-block",
                color: "#c0392b",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              PUBLICIDAD GRÁFICA BENDEZU
            </span>

            <h2
              style={{
                fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.1,
                color: "#fff",
                marginTop: "16px",
                marginLeft: "-1px",
                letterSpacing: "0.02em",
              }}
            >
              TRABAJOS DE ALTA CALIDAD
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>
                Para Marcas Modernas
              </span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "14px",
                lineHeight: 1.7,
                marginTop: "20px",
                maxWidth: "320px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Producción visual de alta calidad y diseño contemporáneo 
              para empresas que buscan destacar.
            </p>
          </motion.div>

          {/* SERVICIOS COLUMN */}
          <motion.div {...fadeUp(0.2)}>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "24px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Servicios
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Impresión Digital", "Gran Formato", "Packaging", "Offset Industrial"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "14px",
                    fontFamily: "system-ui, sans-serif",
                    transition: "color 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* EMPRESA COLUMN */}
          <motion.div {...fadeUp(0.3)}>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "24px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Empresa
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Nosotros", "Portafolio", "Producción", "Contacto"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "14px",
                    fontFamily: "system-ui, sans-serif",
                    transition: "color 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONTACTO COLUMN */}
          <motion.div {...fadeUp(0.4)}>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "24px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              contacto
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Ubicación
                </span>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>
                  Huancayo, Perú
                </p>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Email
                </span>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>
                  Ursa23231@gmail.com
                </p>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Teléfono
                </span>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>
                  +51 994 811 560
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Copyright y legales */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <motion.p
            {...fadeUp(0.5)}
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "12px",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            © 2026 PUBLICIDAD GRÁFICA BENDEZU. Todos los derechos reservados.
          </motion.p>

          <motion.div
            {...fadeUp(0.6)}
            style={{
              display: "flex",
              gap: "32px",
            }}
          >
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "12px",
                  fontFamily: "system-ui, sans-serif",
                  transition: "color 0.3s ease",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.3)")}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </footer>
  )
}