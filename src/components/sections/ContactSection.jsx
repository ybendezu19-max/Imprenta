import { motion } from "framer-motion"
import Container from "../ui/Container"
import Button from "@/components/ui/Button"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function ContactSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050508",
        paddingTop: "140px",
        paddingBottom: "140px",
        overflow: "hidden",
      }}
    >
      {/* Decorativo: Luz roja superior derecha */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(192,57,43,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Decorativo: Línea diagonal sutil */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: 0,
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(192,57,43,0.2) 50%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "clamp(60px, 10vw, 120px)",
            alignItems: "start",
          }}
        >
          {/* Columna Izquierda: Texto e Info */}
          <motion.div {...fadeUp(0.1)}>
            <span
              style={{
                display: "inline-block",
                color: "#c0392b",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Contacto
            </span>

            <motion.h2
              {...fadeUp(0.25)}
              style={{
                fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
                fontSize: "clamp(48px, 7vw, 88px)",
                lineHeight: 0.95,
                color: "#fff",
                marginTop: "16px",
                marginLeft: "-2px",
                letterSpacing: "0.02em",
              }}
            >
              HABLEMOS
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                TU PROYECTO
              </span>
            </motion.h2>

            <motion.div
              {...fadeUp(0.4)}
              style={{
                width: "64px",
                height: "2px",
                background: "#c0392b",
                margin: "32px 0",
                borderRadius: "2px",
              }}
            />

            <motion.p
              {...fadeUp(0.5)}
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "clamp(16px, 1.4vw, 18px)",
                lineHeight: 1.7,
                maxWidth: "480px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Estamos listos para ayudarte a dar vida a tu siguiente proyecto. 
              Contáctanos para una consulta sin compromiso.
            </motion.p>

            {/* Info de Contacto */}
            <motion.div
              {...fadeUp(0.6)}
              style={{
                marginTop: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {[
                { label: "UBICACIÓN", value: "Huancayo, Perú" },
                { label: "EMAIL", value: "contacto@imprenta.com" },
                { label: "TELÉFONO", value: "+51 999 999 999" },
              ].map((item, index) => (
                <div key={index}>
                  <span
                    style={{
                      display: "block",
                      color: "#c0392b",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontFamily: "system-ui, sans-serif",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "16px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Formulario */}
          <motion.div
            {...fadeUp(0.3)}
            style={{
              background: "rgba(20, 20, 25, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "28px",
              padding: "clamp(24px, 4vw, 48px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Campo Nombre */}
              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  style={{
                    width: "100%",
                    background: "rgba(5,5,8,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    color: "#fff",
                    fontSize: "15px",
                    fontFamily: "system-ui, sans-serif",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(192,57,43,0.5)"
                    e.target.style.background = "rgba(5,5,8,0.8)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)"
                    e.target.style.background = "rgba(5,5,8,0.6)"
                  }}
                />
              </div>

              {/* Campo Email */}
              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="juan@empresa.com"
                  style={{
                    width: "100%",
                    background: "rgba(5,5,8,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    color: "#fff",
                    fontSize: "15px",
                    fontFamily: "system-ui, sans-serif",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(192,57,43,0.5)"
                    e.target.style.background = "rgba(5,5,8,0.8)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)"
                    e.target.style.background = "rgba(5,5,8,0.6)"
                  }}
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  Tu Mensaje
                </label>
                <textarea
                  rows="4"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  style={{
                    width: "100%",
                    background: "rgba(5,5,8,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    color: "#fff",
                    fontSize: "15px",
                    fontFamily: "system-ui, sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(192,57,43,0.5)"
                    e.target.style.background = "rgba(5,5,8,0.8)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)"
                    e.target.style.background = "rgba(5,5,8,0.6)"
                  }}
                />
              </div>

              {/* Botón */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ marginTop: "8px" }}
              >
                <Button style={{ width: "100%", height: "54px", fontSize: "13px" }}>
                  Enviar Mensaje
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    style={{ marginLeft: "8px" }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  )
}