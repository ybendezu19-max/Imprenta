import { motion } from "framer-motion"
import Container from "../ui/Container"
import Button from "@/components/ui/Button"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function IndustrialSection() {
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
      {/* Fondo decorativo: Luz difusa roja a la izquierda */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "600px",
          height: "600px",
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
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      <Container style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "clamp(40px, 8vw, 120px)",
            alignItems: "center",
          }}
        >
          {/* Columna Izquierda: Imagen */}
          <motion.div {...fadeUp(0.1)} style={{ position: "relative" }}>
            {/* Marco de la imagen */}
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
               {/* Imagen principal */}
              <motion.img
                src="https://img.freepik.com/fotos-premium/imprenta-industrial-brilla-precision-fabricacion-moderna_91128-4597.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Industrial production"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  display: "block",
                  filter: "contrast(1.1) brightness(0.9)",
                }}
              />
              
              {/* Overlay oscuro para profundidad */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(5,5,8,0.3) 0%, transparent 100%)", pointerEvents: "none" }} />
            </div>

            {/* Tarjeta Flotante Estilo Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                left: "auto",
                maxWidth: "300px",
                background: "rgba(20, 20, 25, 0.7)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "24px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#c0392b",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                  marginBottom: "8px",
                }}
              >
                Tecnología Avanzada
              </span>
              <p style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
                lineHeight: 1.6,
                fontFamily: "system-ui, sans-serif",
                margin: 0
              }}>
                Maquinaria de última generación para acabados de nanoscale y colores vibrantes.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Texto */}
          <div style={{ paddingLeft: "clamp(0px, 4vw, 40px)" }}>
            <motion.div {...fadeUp(0.2)}>
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
                Infrastructura
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.35)}
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
              PRECISIÓN
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>INDUSTRIAL</span>
            </motion.h2>

            <motion.div
              {...fadeUp(0.5)}
              style={{
                width: "64px",
                height: "2px",
                background: "#c0392b",
                margin: "32px 0",
                borderRadius: "2px",
              }}
            />

            <motion.p
              {...fadeUp(0.6)}
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "clamp(16px, 1.4vw, 18px)",
                lineHeight: 1.7,
                maxWidth: "520px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Contamos con оборудование de alta tecnología que permiten 
              producir materiales impresos con acabados de categoría mundial, 
              colores perfectos y procesos optimizados.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              {...fadeUp(0.7)}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "40px",
                marginTop: "56px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {[
                { num: "+40", label: "Años de Trayectoria" },
                { num: "+500", label: "Clientes Corporativos" },
              ].map((stat, i) => (
                <div key={i}>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                      fontSize: "52px",
                      color: "#fff",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {stat.num}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontFamily: "system-ui, sans-serif",
                      marginTop: "8px",
                      display: "block",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.8)} style={{ marginTop: "48px" }}>
              <Button>
                Conocer Tecnología
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  )
}