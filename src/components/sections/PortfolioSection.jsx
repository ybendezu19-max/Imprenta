import { motion } from "framer-motion"
import Container from "../ui/Container"
import PortfolioCard from "../cards/PortfolioCard"
import { portfolio } from "../../data/portfolio"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function PortfolioSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050508",
        paddingTop: "120px",
        paddingBottom: "120px",
        overflow: "hidden",
      }}
    >
      {/* Decorativo: Luz roja sutil abajo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          width: "60%",
          height: "300px",
          background: "radial-gradient(circle, rgba(192,57,43,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container style={{ position: "relative", zIndex: 10 }}>
        {/* Header Section */}
        <div className="max-w-2xl mb-20">
          <motion.div {...fadeUp(0.1)}>
            <span
              style={{
                color: "#c0392b",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Proyectos Destacados
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.25)}
            style={{
              fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 0.95,
              color: "#fff",
              marginTop: "16px",
              marginLeft: "-2px",
            }}
          >
            TRABAJOS
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
              RECIENTES
            </span>
          </motion.h2>

          <motion.div
            {...fadeUp(0.4)}
            style={{ width: "64px", height: "2px", background: "#c0392b", margin: "32px 0" }}
          />

          <motion.p
            {...fadeUp(0.5)}
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "clamp(16px, 1.5vw, 18px)",
              lineHeight: 1.6,
              maxWidth: "500px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Cada proyecto es una oportunidad para inovar. Mira cómo transformamos 
           ideas en impresiones visuales de alto impacto.
          </motion.p>
        </div>

        {/* Grid */}
        <div 
          className="grid md:grid-cols-2 gap-8"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}
        >
          {portfolio.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            >
              <PortfolioCard
                title={item.title}
                category={item.category}
                image={item.image}
              />
            </motion.div>
          ))}
        </div>
      </Container>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  )
}