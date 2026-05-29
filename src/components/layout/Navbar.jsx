import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Container from "../ui/Container"
import Button from "../ui/button"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px)",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px)",
        background: scrolled
          ? "rgba(5, 5, 8, 0.92)"
          : "rgba(5, 5, 8, 0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "72px" : "88px",
          transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Logo */}
<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>

  <img
    src="/imprenta nuvo.png"
    alt="Logo Imprenta"
    style={{
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      objectFit: "cover",
      boxShadow: "0 0 0 1px rgba(192,57,43,0.4), 0 4px 20px rgba(192,57,43,0.35)",
      flexShrink: 0,
    }}
  />

  <div>
    <h1
      style={{
        color: "#fff",
        fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
        fontSize: "22px",
        letterSpacing: "0.12em",
        lineHeight: 1,
        margin: 0,
      }}
    >
      PUBLICIDAD GRÁFICA BENDEZU
    </h1>

    <p
      style={{
        color: "rgba(255,255,255,0.38)",
        fontSize: "10px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        marginTop: "4px",
        fontFamily: "system-ui, sans-serif",
        fontWeight: 500,
      }}
    >
      IMPRENTA - DISEÑO - PUBLICIDAD
    </p>
  </div>

</div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "36px",
          }}
          className="desktop-nav"
        >
          {["Servicios", "Portafolio", "Producción", "Contacto"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
                position: "relative",
                padding: "4px 0",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#fff"
                e.currentTarget.querySelector(".underline-bar").style.transform = "scaleX(1)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(255,255,255,0.65)"
                e.currentTarget.querySelector(".underline-bar").style.transform = "scaleX(0)"
              }}
            >
              {item}
              <span
                className="underline-bar"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "1.5px",
                  background: "linear-gradient(90deg, #c0392b, #e74c3c)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  borderRadius: "2px",
                }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="desktop-cta" style={{ display: "none" }}>
          <button
            style={{
              background: "linear-gradient(135deg, #c0392b 0%, #a93226 100%)",
              color: "#fff",
              height: "42px",
              padding: "0 22px",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(192,57,43,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              fontFamily: "system-ui, sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(192,57,43,0.55), inset 0 1px 0 rgba(255,255,255,0.15)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(192,57,43,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
          >
            Cotizar
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-btn"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            width: "42px",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="mobile-menu-wrapper"
      >
        <div
          style={{
            background: "rgba(5,5,8,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: open ? "28px 24px" : "0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            transition: "padding 0.3s",
          }}
        >
          {["Servicios", "Portafolio", "Producción", "Contacto"].map((item, i) => (
            <a
              key={item}
              href="#"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                fontFamily: "system-ui, sans-serif",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
            >
              {item}
            </a>
          ))}
          <div style={{ marginTop: "16px" }}>
            <Button style={{ width: "100%" }}>
              Cotizar Proyecto
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-btn { display: none !important; }
          .mobile-menu-wrapper { display: none !important; }
        }
      `}</style>
    </header>
  )
}